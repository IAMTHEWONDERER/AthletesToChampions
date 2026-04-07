import re

with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Find the HERO section inside RAW_HTML
hero_start = content.find('<!--  2. HERO  -->\n<section id="hero">')
if hero_start != -1:
    hero_end = content.find('</section>\n\n<!--  3. FEATURES BENTO  -->', hero_start)
    if hero_end != -1:
        hero_end += len('</section>\n')
        
        navbar_html = content[:hero_start]
        rest_html = content[hero_end:]
        
        # Now we need to create the Hero component logic and update App.tsx
        new_app = f"""import {{ useEffect }} from "react";
import "./index.css";
import Hero from "./Hero";

const NAVBAR_HTML = `{navbar_html.split('const RAW_HTML = `')[1]}`;
const REST_HTML = `{rest_html.split('`;')[0]}`;

function App() {{
  useEffect(() => {{
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {{
      entries.forEach(e => {{ if (e.isIntersecting) {{ e.target.classList.add('visible'); observer.unobserve(e.target); }} }});
    }}, {{ threshold: 0.12 }});
    revealEls.forEach(el => observer.observe(el));

    const hamburger = document.querySelector('.nav-hamburger');
    if (hamburger) {{
      hamburger.addEventListener('click', function() {{
        const links = document.querySelector('.nav-links') as HTMLElement;
        if (links) {{
            const open = links.style.display === 'flex';
            links.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:fixed;top:68px;left:0;right:0;background:rgba(255,255,255,0.97);padding:24px 5vw;gap:20px;border-bottom:1px solid #eee;z-index:99';
        }}
      }});
    }}

    document.querySelectorAll('.btn-secondary').forEach(btn => {{
      btn.addEventListener('click', function(this: any) {{
        this.classList.remove('rainbow-active');
        void this.offsetWidth;
        this.classList.add('rainbow-active');
        this.addEventListener('animationend', () => this.classList.remove('rainbow-active'), {{ once: true }});
      }});
    }});
  }}, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{{{ __html: NAVBAR_HTML }}}} />
      <Hero />
      <div dangerouslySetInnerHTML={{{{ __html: REST_HTML }}}} />
    </>
  );
}}

export default App;
"""
        with open("src/App.tsx", "w", encoding="utf-8") as out:
            out.write(new_app)
        print("Successfully split App.tsx!")
    else:
        print("Hero end not found")
else:
    print("Hero start not found")

