import re

content = open("index.html", encoding="utf-8").read()

css_blocks = re.findall(r'<style>([\s\S]*?)</style>', content)
if css_blocks:
    with open("src/index.css", "w", encoding="utf-8") as f:
        for block in css_blocks:
            f.write(block)

body_match = re.search(r'<body>([\s\S]*?)<div id="root">', content)
if body_match:
    body_html = body_match.group(1)
    
    app_tsx = f"""import React, {{ useEffect }} from 'react';
import './index.css';

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
    <div dangerouslySetInnerHTML={{{{ __html: `{body_html.replace('`', r'\`')}` }}}} />
  );
}}

export default App;
"""
    with open("src/App.tsx", "w", encoding="utf-8") as f:
        f.write(app_tsx)

with open("index.html", "w", encoding="utf-8") as f:
    f.write("""<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Athletes to Champions</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Boldonse&family=Playwrite+IE:wght@100..400&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,400&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>""")
