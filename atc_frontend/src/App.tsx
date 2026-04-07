import { useEffect, useState } from "react";
import "./index.css";
import Hero from "./Hero";
import LogoScaler from "./LogoScaler.tsx";

const NAVBAR_HTML = `
<!--  1. NAVBAR  -->
<nav>
  <a href="#" class="nav-logo" style="padding: 0; display: flex; align-items: center;">
    <img src="/AtC-fullLogo-black.png" alt="AtC Logo" style="height: 38px; width: auto;" />
  </a>
  <ul class="nav-links">
    <li><a href="#features">Features</a></li>
    <li><a href="#how">How It Works</a></li>
    <li><a href="#app">App</a></li>
    <li><a href="#social">Stories</a></li>
  </ul>
  <a href="#cta" class="btn-primary">Get Started</a>
  <button class="nav-hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>

`;
const REST_HTML = `
<!--  3. FEATURES BENTO  -->
<section id="features">
  <div class="features-header reveal">
    <div class="section-label">What We Offer</div>
    <div class="section-title">Everything You Need<br>to Reach the Top</div>
  </div>

  <div class="bento-grid">
    <div class="b-card col-8 style-black reveal">
      <div>
        <div class="b-icon"></div>
        <div class="b-card-title">Real-Time Performance Analytics</div>
        <div class="b-card-body">Track heart rate, pace, power, and recovery  all in one unified dashboard. AtC processes your data live so you're always a step ahead of your training plan.</div>
      </div>
      <div class="tag-row">
        <span class="tag">Live Data</span>
        <span class="tag">Smart Alerts</span>
        <span class="tag">Wearable Sync</span>
      </div>
    </div>

    <div class="b-card col-4 style-purple reveal reveal-delay-1">
      <div class="b-icon"></div>
      <div class="b-card-title">Goal Tracking</div>
      <div class="b-card-body">Set daily, weekly, and season-long goals. Watch your progress compound.</div>
      <div class="stat-giant">+42%</div>
    </div>

    <div class="b-card col-4 style-yellow reveal">
      <div class="b-icon on-light"></div>
      <div class="b-card-title" style="color:var(--black)">Speed Metrics</div>
      <div class="b-card-body" style="color:rgba(0,0,0,0.7)">Benchmark your top speeds, reaction times, and explosive power output against your personal bests.</div>
    </div>

    <div class="b-card col-4 style-white reveal reveal-delay-1">
      <div class="b-icon on-light"></div>
      <div class="b-card-title">Recovery Insights</div>
      <div class="b-card-body">Know when to push and when to rest. AtC's AI reads your body's readiness signals so you avoid burnout.</div>
    </div>

    <div class="b-card col-4 style-blue reveal reveal-delay-2">
      <div class="b-icon"></div>
      <div class="b-card-title">AI Coaching</div>
      <div class="b-card-body">Personalised training adjustments powered by Gemini AI  your data, your plan.</div>
    </div>

    <div class="b-card col-6 style-green reveal">
      <div class="b-icon on-light"></div>
      <div class="b-card-title" style="color:var(--black)">Training Calendar</div>
      <div class="b-card-body" style="color:rgba(0,0,0,0.75)">Plan your entire season. Visualise load distribution, taper weeks, and competition peaks at a glance.</div>
      <div class="tag-row">
        <span class="tag dark">Periodisation</span>
        <span class="tag dark">Auto-Schedule</span>
      </div>
    </div>

    <div class="b-card col-6 style-black reveal reveal-delay-1">
      <div class="b-icon"></div>
      <div class="b-card-title">Team & Coach Mode</div>
      <div class="b-card-body">Coaches see every athlete's data in one view. Share insights, leave notes, and celebrate milestones together.</div>
      <div class="tag-row">
        <span class="tag">Squad Dashboard</span>
        <span class="tag">Private Notes</span>
      </div>
    </div>
  </div>
</section>

<!--  4. STATS  -->
<section id="stats">
  <div class="stats-inner">
    <div class="stats-left reveal">
      <div class="section-label" style="color:rgba(255,255,255,0.4)">By the Numbers</div>
      <div class="section-title">Results That<br>Speak for Themselves</div>
      <div class="section-body">Athletes who train with structured data improve 3 faster than those who don't. AtC makes that structure effortless.</div>
    </div>
    <div class="stats-grid reveal reveal-delay-1">
      <div class="stat-card s-purple">
        <div class="stat-num">3</div>
        <div class="stat-label" style="color:rgba(255,255,255,0.7)">Faster improvement</div>
      </div>
      <div class="stat-card s-green">
        <div class="stat-num">98%</div>
        <div class="stat-label">Retention rate</div>
      </div>
      <div class="stat-card s-yellow">
        <div class="stat-num">50k+</div>
        <div class="stat-label">Athletes tracked</div>
      </div>
      <div class="stat-card s-blue">
        <div class="stat-num">12M+</div>
        <div class="stat-label" style="color:rgba(255,255,255,0.7)">Sessions logged</div>
      </div>
    </div>
  </div>
</section>

<!--  5. HOW IT WORKS  -->
<section id="how">
  <div class="how-inner">
    <div class="reveal" style="max-width:600px">
      <div class="section-label">Process</div>
      <div class="section-title">Three Steps to<br>Peak Performance</div>
    </div>
    <div class="how-steps">
      <div class="how-step reveal">
        <div class="step-num">01</div>
        <div class="step-icon si-purple"></div>
        <div class="step-title">Connect Your Gear</div>
        <div class="step-body">Sync your wearables, GPS watches, and training apps. AtC unifies all your data sources in seconds.</div>
      </div>
      <div class="how-step reveal reveal-delay-1">
        <div class="step-num">02</div>
        <div class="step-icon si-blue"></div>
        <div class="step-title">Track Every Session</div>
        <div class="step-body">Log workouts manually or let your devices do it automatically. Every detail is captured  nothing is missed.</div>
      </div>
      <div class="how-step reveal reveal-delay-2">
        <div class="step-num">03</div>
        <div class="step-icon si-green"></div>
        <div class="step-title">Improve with AI</div>
        <div class="step-body">Receive intelligent recommendations tailored to your goals, fitness level, and recovery status  every single day.</div>
      </div>
    </div>
  </div>
</section>

<!--  6. APP SHOWCASE  -->
<section id="app">
  <div class="app-inner">
    <div class="app-phone reveal">
      <div class="phone-frame">
        <div class="phone-inner">
          <div class="phone-status">
            <span>9:41</span>
            <span>AtC</span>
            <span>100%</span>
          </div>
          <div class="phone-content">
            <div class="ph-header">Good morning, Alex</div>
            <div class="ph-card pc-purple">
              <div class="ph-slabel">Today's Readiness</div>
              <div class="ph-stat">High</div>
            </div>
            <div class="ph-row">
              <div class="ph-card pc-dark">
                <div class="ph-slabel">Resting HR</div>
                <div class="ph-stat" style="font-size:18px">52 bpm</div>
              </div>
              <div class="ph-card pc-green">
                <div class="ph-slabel dark">Sleep</div>
                <div class="ph-stat dark" style="font-size:18px">7.8h</div>
              </div>
            </div>
            <div style="font-size:10px;color:rgba(255,255,255,0.4);letter-spacing:1.5px;text-transform:uppercase;font-weight:600;margin-top:2px">Recent Activity</div>
            <div class="ph-activity">
              <div class="ph-act-item">
                <div class="ph-act-dot" style="background:var(--purple)"></div>
                <div class="ph-act-text">Morning Run  6.2km</div>
              </div>
              <div class="ph-act-item">
                <div class="ph-act-dot" style="background:var(--blue)"></div>
                <div class="ph-act-text">Strength  Upper Body</div>
              </div>
              <div class="ph-act-item">
                <div class="ph-act-dot" style="background:var(--green)"></div>
                <div class="ph-act-text">Recovery  Yoga 20min</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="app-content reveal reveal-delay-1">
      <div class="section-label">Mobile App</div>
      <div class="section-title">Your Coach.<br>In Your Pocket.</div>
      <div class="section-body">The AtC mobile app gives you full access to your performance data, training plans, and AI insights  wherever you train.</div>
      <div class="app-features">
        <div class="app-feat">
          <div class="app-feat-icon af-purple"></div>
          <div class="app-feat-text">
            <h4>Live Dashboard</h4>
            <p>See your performance score, readiness, and next session at a glance every morning.</p>
          </div>
        </div>
        <div class="app-feat">
          <div class="app-feat-icon af-blue"></div>
          <div class="app-feat-text">
            <h4>Smart Notifications</h4>
            <p>Get nudged at the right time  not spammed. AtC only alerts you when it matters.</p>
          </div>
        </div>
        <div class="app-feat">
          <div class="app-feat-icon af-green"></div>
          <div class="app-feat-text">
            <h4>Offline Mode</h4>
            <p>Train anywhere. Your data syncs when you're back online, no connection required mid-session.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!--  7. TESTIMONIALS  -->
<section id="social">
  <div class="testimonials-header reveal">
    <div class="section-label">Athlete Stories</div>
    <div class="section-title">What Champions Say</div>
  </div>
  <div class="testi-grid">
    <div class="testi-card t-black reveal">
      <div class="testi-quote">"AtC completely changed how I approach training. I went from guessing to knowing exactly what my body needs every single day."</div>
      <div class="testi-author">
        <div class="testi-avatar" style="background:var(--purple);color:#fff">JR</div>
        <div>
          <div class="testi-name">Jordan R.</div>
          <div class="testi-role">400m Sprinter</div>
        </div>
      </div>
    </div>
    <div class="testi-card t-border reveal reveal-delay-1">
      <div class="testi-quote">"The bento dashboard is so clean  I can see everything without scrolling. My coach loves the team view too."</div>
      <div class="testi-author">
        <div class="testi-avatar" style="background:var(--green);color:#000">MS</div>
        <div>
          <div class="testi-name">Maya S.</div>
          <div class="testi-role">Competitive Cyclist</div>
        </div>
      </div>
    </div>
    <div class="testi-card t-purple reveal reveal-delay-2">
      <div class="testi-quote">"I shaved 18 seconds off my 5K in two months just by following AtC's recovery recommendations. I was overtraining and didn't even know it."</div>
      <div class="testi-author">
        <div class="testi-avatar" style="background:rgba(255,255,255,0.2);color:#fff">TK</div>
        <div>
          <div class="testi-name">Tom K.</div>
          <div class="testi-role">Triathlete</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!--  8. CTA  -->
<section id="cta">
  <div class="cta-accent-line"></div>
  <div class="cta-inner reveal">
    <div class="section-label" style="color:rgba(255,255,255,0.35);margin-bottom:16px">Ready to Level Up?</div>
    <div class="cta-title">From Athletes <span style="font-family:var(--font-accent)">to</span> Champions</div>
    <div class="cta-sub">Join thousands of athletes already training smarter. Your journey to the top starts with a single session.</div>
    <div class="cta-btns">
      <a href="#" class="btn-cta-white">Get Started Free</a>
      <a href="#app" class="btn-cta-outline">View the App</a>
    </div>
  </div>
</section>

<!--  9. FOOTER  -->
<footer>
  <div class="footer-rainbow"></div>
  <div class="footer-inner">
    <div class="footer-brand">
      <a href="#" class="nav-logo" style="margin-bottom:14px">
        <span class="word-athletes">Athletes</span>
        <span class="word-to">to</span>
        <span class="word-champions">Champions</span>
      </a>
      <p>Performance tracking software built for athletes who refuse to settle. From first session to championship podium.</p>
    </div>
    <div class="footer-col">
      <h5>Product</h5>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#app">Mobile App</a></li>
        <li><a href="#how">How It Works</a></li>
        <li><a href="#">Pricing</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Athletes</h5>
      <ul>
        <li><a href="#">Individual Plans</a></li>
        <li><a href="#">Team Plans</a></li>
        <li><a href="#">Coaches</a></li>
        <li><a href="#">Case Studies</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Company</h5>
      <ul>
        <li><a href="#">About AtC</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p> 2025 Athletes to Champions. All rights reserved.</p>
    <p style="font-family:var(--font-accent);font-size:12px;color:#bbb">Built with passion.</p>
  </div>
</footer>
`;

function App() {
  const [showScaler, setShowScaler] = useState(window.location.hash === "#scaler");

  useEffect(() => {
    const handleHash = () => setShowScaler(window.location.hash === "#scaler");
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  useEffect(() => {
    if (showScaler) return;
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));

    const hamburger = document.querySelector('.nav-hamburger');
    if (hamburger) {
      hamburger.addEventListener('click', function() {
        const links = document.querySelector('.nav-links') as HTMLElement;
        if (links) {
            const open = links.style.display === 'flex';
            links.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:fixed;top:68px;left:0;right:0;background:rgba(255,255,255,0.97);padding:24px 5vw;gap:20px;border-bottom:1px solid #eee;z-index:99';
        }
      });
    }

    document.querySelectorAll('.btn-secondary').forEach(btn => {
      btn.addEventListener('click', function(this: any) {
        this.classList.remove('rainbow-active');
        void this.offsetWidth;
        this.classList.add('rainbow-active');
        this.addEventListener('animationend', () => this.classList.remove('rainbow-active'), { once: true });
      });
    });
  }, [showScaler]);

  if (showScaler) {
    return <LogoScaler />;
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: NAVBAR_HTML }} />
      <Hero />
      <div dangerouslySetInnerHTML={{ __html: REST_HTML }} />
    </>
  );
}

export default App;
