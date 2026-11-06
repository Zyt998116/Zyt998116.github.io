---
layout: home
permalink: /
title: "Yingtong Zhou | Robotics & 3D Perception"
excerpt: "Undergraduate researcher at Zhejiang University working on 3D perception, robotic manipulation, and geometric reasoning."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="home-hero" aria-labelledby="hero-title">
  <div class="home-shell hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">Undergraduate Researcher · Zhejiang University</p>
      <h1 id="hero-title">Yingtong Zhou <span>周映彤</span></h1>
      <p class="hero-lede">I build robotic systems that connect 3D perception, geometric reasoning, and reliable physical interaction in unstructured environments.</p>
      <div class="hero-actions" aria-label="Primary links">
        <a class="home-button home-button--primary" href="mailto:3230102433@zju.edu.cn">Email me</a>
        <a class="home-button" href="https://github.com/zyt998116" target="_blank" rel="noopener">GitHub</a>
        <a class="home-button" href="https://scholar.google.com/citations?user=PS_CX0AAAAAJ" target="_blank" rel="noopener">Google Scholar</a>
      </div>
      <p class="hero-note">B.Eng. candidate in Biosystems Engineering · Chu Kochen Honors College</p>
    </div>
    <div class="hero-portrait-wrap">
      <div class="hero-portrait-frame">
        <img class="hero-portrait" src="{{ site.baseurl }}/images/tt.jpg" alt="Portrait of Yingtong Zhou">
      </div>
      <p class="hero-caption">Hangzhou, China</p>
    </div>
  </div>
</section>

<section class="home-section home-section--intro" id="about">
  <div class="home-shell intro-grid">
    <div>
      <p class="section-kicker">About</p>
      <h2>Research at the boundary of perception and action</h2>
    </div>
    <div class="intro-copy">
      <p>I am an undergraduate at Zhejiang University pursuing Biosystems Engineering alongside Public Administration. My research asks how robots can form reliable geometric understanding from incomplete observations, then use that understanding to act safely in the physical world.</p>
      <p>My current work spans multimodal 3D reconstruction, point-cloud segmentation, mechanism design, vision-guided manipulation, and evidence-bounded scientific synthesis. I am especially interested in robust perception and physical interaction under uncertainty.</p>
      <div class="interest-line" aria-label="Research interests">
        <span>3D perception</span>
        <span>Robotic manipulation</span>
        <span>Geometric reasoning</span>
        <span>Mechanism design</span>
      </div>
    </div>
  </div>
</section>

<section class="home-section" id="research">
  <div class="home-shell">
    <div class="section-heading">
      <div>
        <p class="section-kicker">Selected research</p>
        <h2>From dense observations to dependable systems</h2>
      </div>
      <p>Three projects that trace a common thread: extract structure, model uncertainty, and design the downstream system around what perception can reliably provide.</p>
    </div>

    <article class="research-feature research-feature--lead">
      <div class="research-visual">
        <img src="{{ site.baseurl }}/images/research/robotic-manipulation.png" alt="Experimental setup for a vision-guided rice roguing robot and its iris gripper">
      </div>
      <div class="research-copy">
        <p class="project-index">01 · Robotics and mechanism design</p>
        <h3>Vision-guided manipulation with a single-motor underactuated end effector</h3>
        <p>I co-developed a six-blade iris gripper that couples capture with rotary-vibration extraction. The mechanism uses load-triggered switching and accommodates bounded localization error without distal electronic state sensing.</p>
        <dl class="metric-row">
          <div><dt>94.5%</dt><dd>field success</dd></div>
          <div><dt>400</dt><dd>field trials</dd></div>
          <div><dt>331 N</dt><dd>mean peak force</dd></div>
        </dl>
        <p class="project-meta">First-author research · Manuscript under revision</p>
      </div>
    </article>

    <div class="research-pair">
      <article class="research-card">
        <div class="research-card__visual">
          <img src="{{ site.baseurl }}/images/research/3d-reconstruction.png" alt="A plant reconstructed from multi-view images as a dense 3D point cloud">
        </div>
        <div class="research-card__copy">
          <p class="project-index">02 · 3D vision</p>
          <h3>Multimodal 3D reconstruction and structural understanding</h3>
          <p>I led a project combining NeRF reconstruction, geometric cleaning, organ-instance segmentation, skeleton extraction, and trait estimation for complex, partially occluded structures.</p>
          <ul class="result-list">
            <li><strong>34.5 dB</strong> image-based PSNR</li>
            <li><strong>0.93</strong> organ-instance mIoU</li>
            <li><strong>R² &gt; 0.95</strong> for key geometric traits</li>
          </ul>
        </div>
      </article>

      <article class="research-card">
        <div class="research-card__visual research-card__visual--contain">
          <img src="{{ site.baseurl }}/images/research/closed-loop-agents.png" alt="Conceptual framework for closed-loop artificial intelligence agents in livestock health management">
        </div>
        <div class="research-card__copy">
          <p class="project-index">03 · Scientific synthesis</p>
          <h3>Closed-loop AI agents for livestock health decisions</h3>
          <p>I synthesized evidence across multimodal sensing, sequential decision-making, and agentic systems, while distinguishing validated component technologies from prospective end-to-end integration.</p>
          <p class="project-meta">Second author · Frontiers in Veterinary Science, 2026</p>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="home-section home-section--tint" id="publications">
  <div class="home-shell publication-layout">
    <div>
      <p class="section-kicker">Publications and intellectual property</p>
      <h2>Selected output</h2>
      <p class="section-aside">Peer-reviewed work, an active manuscript, and mechanism-focused intellectual property.</p>
    </div>
    <div class="publication-list">
      <article class="publication-item">
        <p class="publication-year">2026 · Journal article</p>
        <h3>Closed-loop artificial intelligence agents for animal epidemic prediction and decision support in livestock farming: a review</h3>
        <p>Yuzhi Wang, <strong>Yingtong Zhou</strong>, Liyu Li, Huiling Xu, Wangze Ni, Xiaoliang Li</p>
        <p class="venue"><em>Frontiers in Veterinary Science</em>, 13:1968632</p>
        <a href="https://doi.org/10.3389/fvets.2026.1968632" target="_blank" rel="noopener">DOI 10.3389/fvets.2026.1968632</a>
      </article>
      <article class="publication-item">
        <p class="publication-year">2026 · Revised manuscript submitted</p>
        <h3>An intelligent hybrid-rice roguing system combining cross-modal perception with a mechanically triggered rotary-vibration end effector</h3>
        <p><strong>Yingtong Zhou</strong>, Shuqi Zheng, Chaoyue Yang, Yan Zhu, Huaiqu Feng, Yongwei Wang</p>
        <p class="venue"><em>Computers and Electronics in Agriculture</em></p>
      </article>
      <article class="publication-item">
        <p class="publication-year">2026 · Patent application</p>
        <h3>An iris-enveloping rotary-vibrating roguing device and method</h3>
        <p>Shuqi Zheng, <strong>Yingtong Zhou</strong>, Yan Zhu, Yongwei Wang</p>
        <p class="venue">Chinese invention patent application No. 202611163903.0 · Pending</p>
      </article>
      <article class="publication-item publication-item--compact">
        <p class="publication-year">2025 · Conference papers</p>
        <h3>Conceptual design of a 3-DOF underactuated dual gripper for rice purification · Intelligent research on hybrid rice: focusing on key datasets</h3>
        <p><em>ASABE Annual International Meeting</em>, Papers 237 and 226</p>
      </article>
    </div>
  </div>
</section>

<section class="home-section" id="experience">
  <div class="home-shell experience-layout">
    <div>
      <p class="section-kicker">Experience</p>
      <h2>Research across academic and industrial settings</h2>
    </div>
    <div class="timeline">
      <article class="timeline-item">
        <p class="timeline-date">2024 — Present</p>
        <h3>Zhejiang University</h3>
        <p class="timeline-role">Undergraduate researcher · Robotics, 3D perception, and mechanism design</p>
        <p>Developing perception-to-mechanism interfaces, validating field robotics systems, and leading a national undergraduate research project.</p>
      </article>
      <article class="timeline-item">
        <p class="timeline-date">Summer 2025</p>
        <h3>Wageningen University &amp; Research</h3>
        <p class="timeline-role">Summer Research in Bioengineering · Exchange student</p>
        <p>Completed an international summer research program and received the Excellent Participant Award.</p>
      </article>
      <article class="timeline-item">
        <p class="timeline-date">2026</p>
        <h3>DexRobot Co., Ltd.</h3>
        <p class="timeline-role">Robotics intern</p>
        <p>Tested dexterous-hand grasping sequences and designed a simulation study for robust grasping with Isaac Gym and PPO.</p>
      </article>
      <article class="timeline-item">
        <p class="timeline-date">2024 — 2026</p>
        <h3>ShanZhu Robotics · MGB Endoskopische Geräte · Paiyangshan Forest Centre</h3>
        <p class="timeline-role">Algorithms and R&amp;D internships</p>
        <p>Worked on elevation mapping, endoscopic image enhancement, lightweight recognition networks, and edge-oriented deployment.</p>
      </article>
    </div>
  </div>
</section>

<section class="home-section home-section--dark" id="honors">
  <div class="home-shell">
    <div class="section-heading section-heading--dark">
      <div>
        <p class="section-kicker">Honors and skills</p>
        <h2>Selected recognition</h2>
      </div>
      <p>Recognition for research, engineering, leadership, and innovation.</p>
    </div>
    <div class="honors-grid">
      <article>
        <p class="honor-level">National First Prize</p>
        <h3>15th “Challenge Cup” China College Students’ Entrepreneurship Competition</h3>
        <p>Core Project Leader</p>
      </article>
      <article>
        <p class="honor-level">National First Prize</p>
        <h3>China Collegiate Intelligent Robotics Competition</h3>
        <p>Team Leader</p>
      </article>
      <article>
        <p class="honor-level">Scholarship</p>
        <h3>Zhejiang University Third-Class Scholarship</h3>
        <p>Academic and research achievement</p>
      </article>
      <article>
        <p class="honor-level">Leadership</p>
        <h3>Outstanding Student Leader, Zhejiang University</h3>
        <p>President, Innovation and Entrepreneurship Association</p>
      </article>
    </div>
    <div class="skills-strip">
      <div><span>Perception</span><p>PyTorch, NeRF, COLMAP, point clouds, RGB-D fusion</p></div>
      <div><span>Robotics</span><p>ROS, CAD/SolidWorks, Isaac Gym, mechanism analysis</p></div>
      <div><span>Systems</span><p>Python, C++, MATLAB, CUDA, Arduino, Raspberry Pi</p></div>
    </div>
  </div>
</section>

<section class="home-section home-section--contact" id="contact">
  <div class="home-shell contact-grid">
    <div>
      <p class="section-kicker">Contact</p>
      <h2>Let’s talk about robotics, 3D vision, and research collaboration</h2>
    </div>
    <div class="contact-card">
      <p>I welcome conversations about research opportunities, collaboration, and graduate study.</p>
      <a class="contact-email" href="mailto:3230102433@zju.edu.cn">3230102433@zju.edu.cn</a>
      <div class="contact-links">
        <a href="https://github.com/zyt998116" target="_blank" rel="noopener">GitHub</a>
        <a href="https://scholar.google.com/citations?user=PS_CX0AAAAAJ" target="_blank" rel="noopener">Google Scholar</a>
      </div>
    </div>
  </div>
</section>
