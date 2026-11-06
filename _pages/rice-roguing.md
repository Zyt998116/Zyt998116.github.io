---
layout: project
permalink: /projects/rice-roguing/
title: "Perception-Aware Robotic Roguing in Hybrid Rice"
excerpt: "A field robotics system that couples uncertainty-aware perception with self-centering capture and mechanically triggered rotary-vibration extraction."
author_profile: false
---

<header class="project-hero">
  <div class="project-shell">
    <a class="project-back" href="{{ site.baseurl }}/#research">&larr; Back to selected research</a>
    <div class="project-hero__grid">
      <div>
        <p class="project-eyebrow">Field Robotics &middot; Perception-to-Action &middot; First-Author Research</p>
        <h1>Perception-Aware Robotic Roguing in Hybrid Rice</h1>
      </div>
      <div class="project-hero__summary">
        <p>An integrated robotic system that translates uncertain field perception into reliable plant removal through self-centering capture and mechanically triggered rotary-vibration.</p>
        <p class="project-status">Revised manuscript submitted to <em>Computers and Electronics in Agriculture</em></p>
      </div>
    </div>

    <dl class="project-metrics project-metrics--hero">
      <div><dt>94.5%</dt><dd>extraction success</dd></div>
      <div><dt>0.45%</dt><dd>neighbor damage</dd></div>
      <div><dt>331 N</dt><dd>mean peak force</dd></div>
      <div><dt>9.02 s</dt><dd>mean cycle time</dd></div>
    </dl>

    <figure class="project-figure project-figure--hero">
      <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig01-robot-platform.png" target="_blank" rel="noopener">
        <img src="{{ site.baseurl }}/images/projects/rice-roguing/fig01-robot-platform.png" alt="Complete views of the high-clearance hybrid-rice roguing robot" fetchpriority="high">
      </a>
      <figcaption><span>Figure 1.</span> High-clearance mobile platform and integrated roguing unit. <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig01-robot-platform.png" target="_blank" rel="noopener">Open full-resolution figure</a></figcaption>
    </figure>
  </div>
</header>

<nav class="project-contents" aria-label="Project sections">
  <div class="project-shell project-contents__inner">
    <span>Project map</span>
    <a href="#challenge">Challenge</a>
    <a href="#system">System</a>
    <a href="#perception">Perception</a>
    <a href="#mechanism">Mechanism</a>
    <a href="#validation">Validation</a>
    <a href="#field">Field evidence</a>
  </div>
</nav>

<section class="project-section" id="challenge">
  <div class="project-shell project-split">
    <div class="project-heading">
      <p class="project-kicker">01 &middot; Research challenge</p>
      <h2>Why accurate detection is not enough</h2>
    </div>
    <div class="project-prose project-prose--lead">
      <p>Automated roguing must distinguish off-type plants in a dense canopy and remove them without damaging neighboring rice. The problem couples two forms of uncertainty: occlusion, growth-stage variation, and depth noise perturb the perceived target, while contact geometry and root-soil resistance change during execution.</p>
      <p>A system that depends on centimeter-perfect stem-base localization and monotonic vertical pulling is therefore vulnerable to missed capture, stem breakage, retained roots, and crop injury.</p>
      <p class="project-thesis">The design objective was not perfect perception. It was a complete system that converts a bounded visual estimate into a mechanically tolerant physical action.</p>
    </div>
  </div>
</section>

<section class="project-section project-section--tint" id="system">
  <div class="project-shell">
    <div class="project-heading project-heading--row">
      <div>
        <p class="project-kicker">02 &middot; System concept</p>
        <h2>From uncertain perception to reliable action</h2>
      </div>
      <p>Software handles global discrimination and approach. Hardware absorbs the final local uncertainty and sequences capture before extraction.</p>
    </div>

    <ol class="project-flow" aria-label="Perception-to-extraction workflow">
      <li><span>01</span>Off-type recognition</li>
      <li><span>02</span>3D target generation</li>
      <li><span>03</span>Gantry approach</li>
      <li><span>04</span>Iris capture</li>
      <li><span>05</span>Mechanical switching</li>
      <li><span>06</span>Rotary-vibration</li>
    </ol>

    <figure class="project-figure">
      <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig02-system-architecture.png" target="_blank" rel="noopener">
        <img loading="lazy" src="{{ site.baseurl }}/images/projects/rice-roguing/fig02-system-architecture.png" alt="Complete system architecture showing perception, planning, control, and the three-stage end-effector sequence">
      </a>
      <figcaption><span>Figure 2.</span> Three-layer system architecture and the descent, grasping, and rotary-vibration workflow. <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig02-system-architecture.png" target="_blank" rel="noopener">Open full-resolution figure</a></figcaption>
    </figure>
  </div>
</section>

<section class="project-section" id="perception">
  <div class="project-shell">
    <div class="project-heading project-heading--row">
      <div>
        <p class="project-kicker">03 &middot; Perception</p>
        <h2>A bounded target the mechanism can use</h2>
      </div>
      <p>The perception front end separates representation learning, online detection, and geometric fusion instead of asking one model to solve the entire physical task.</p>
    </div>

    <article class="project-chapter">
      <div class="project-chapter__copy">
        <p class="project-subindex">03.1 &middot; Phenotypic representation</p>
        <h3>Learning structure from heterogeneous field imagery</h3>
        <p>Three dataset configurations combined 5,420 public panicle images with 7,165 field images collected in four districts of Zhejiang Province. After crop generation and quality screening, Dataset C contained 38,771 images. Dataset-specific t-SimCLR training organized maturity stages and abnormal phenotypes in a label-efficient representation space.</p>
        <dl class="project-facts">
          <div><dt>12</dt><dd>field acquisition batches</dd></div>
          <div><dt>4</dt><dd>districts represented</dd></div>
          <div><dt>0.314</dt><dd>Dataset C silhouette score</dd></div>
        </dl>
      </div>
      <figure class="project-figure">
        <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig07-perception-pipeline.png" target="_blank" rel="noopener">
          <img loading="lazy" src="{{ site.baseurl }}/images/projects/rice-roguing/fig07-perception-pipeline.png" alt="Complete data construction, t-SimCLR representation learning, and detector evaluation pipeline">
        </a>
        <figcaption><span>Figure 7.</span> Dataset construction, t-SimCLR representation learning, and the separate detector-validation workflow. <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig07-perception-pipeline.png" target="_blank" rel="noopener">Open full-resolution figure</a></figcaption>
      </figure>
    </article>

    <article class="project-chapter">
      <div class="project-chapter__copy">
        <p class="project-subindex">03.2 &middot; Independent detection</p>
        <h3>Localizing targets across growth stages and occlusion</h3>
        <p>A separately trained DetCo-based detector was evaluated on an independent set of 43,581 annotated panicle instances that was not used for detector training. The validation exposes the conditions that must be absorbed downstream rather than hiding difficult elongation-stage and occluded cases.</p>
        <dl class="project-facts project-facts--four">
          <div><dt>0.913</dt><dd>mAP@50</dd></div>
          <div><dt>0.699</dt><dd>mAP@50:95</dd></div>
          <div><dt>0.853</dt><dd>precision</dd></div>
          <div><dt>0.860</dt><dd>recall</dd></div>
        </dl>
      </div>
      <figure class="project-figure">
        <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig10-detector-validation.png" target="_blank" rel="noopener">
          <img loading="lazy" src="{{ site.baseurl }}/images/projects/rice-roguing/fig10-detector-validation.png" alt="Complete detector validation figure with field detections, precision-recall curve, growth-stage performance, and activation analysis">
        </a>
        <figcaption><span>Figure 10.</span> Representative detections, independent validation, growth-stage performance, and qualitative activation analysis. <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig10-detector-validation.png" target="_blank" rel="noopener">Open full-resolution figure</a></figcaption>
      </figure>
    </article>

    <article class="project-chapter">
      <div class="project-chapter__copy">
        <p class="project-subindex">03.3 &middot; Geometric fusion</p>
        <h3>Generating an uncertainty-aware 3D anchor</h3>
        <p>Color-aligned RGB-D point clouds and the fused pose chain form a probabilistic canopy-elevation map. The semantic region and local surface geometry are translated into the physical anchor <strong>{P, n, R, &Sigma;}</strong>: target position, local orientation, estimated radius, and state uncertainty.</p>
        <p>The objective is a bounded target state, not exact stem-base reconstruction. Once the predicted stem lies inside the capture envelope, the iris performs the final local correction.</p>
      </div>
      <figure class="project-figure">
        <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig11-canopy-mapping.png" target="_blank" rel="noopener">
          <img loading="lazy" src="{{ site.baseurl }}/images/projects/rice-roguing/fig11-canopy-mapping.png" alt="Complete RGB-D sensing, canopy elevation mapping, uncertainty, and map-consistent trajectory figure">
        </a>
        <figcaption><span>Figure 11.</span> Field sensing, probabilistic canopy-elevation mapping, uncertainty, and map-consistent target association. <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig11-canopy-mapping.png" target="_blank" rel="noopener">Open full-resolution figure</a></figcaption>
      </figure>
    </article>
  </div>
</section>

<section class="project-section project-section--ink" id="mechanism">
  <div class="project-shell">
    <div class="project-heading project-heading--row">
      <div>
        <p class="project-kicker">04 &middot; Mechanism design</p>
        <h2>A mechanism that completes what vision cannot</h2>
      </div>
      <p>One motor drives protected descent, enveloping capture, load-triggered power transfer, and rotary-vibration extraction without a distal electronic state sensor.</p>
    </div>

    <div class="mechanism-grid">
      <article>
        <span>01</span>
        <h3>Self-centering capture</h3>
        <p>Six synchronized blades close like an aperture. Chamfered edges guide an off-axis stem toward the center, while distributed contact avoids a precision two-point grasp.</p>
      </article>
      <article>
        <span>02</span>
        <h3>Mechanical state switching</h3>
        <p>Stem contact raises carrier-side resistance. The planetary differential then redirects the single motor from iris closure to ring-gear rotation.</p>
      </article>
      <article>
        <span>03</span>
        <h3>Task-specific motion</h3>
        <p>A three-wave sinusoidal profile converts circumferential rotation into simultaneous rotation and axial reciprocation during lifting.</p>
      </article>
    </div>

    <figure class="project-figure project-figure--on-ink">
      <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig03-end-effector-design.png" target="_blank" rel="noopener">
        <img loading="lazy" src="{{ site.baseurl }}/images/projects/rice-roguing/fig03-end-effector-design.png" alt="Complete mechanical design of the underactuated rotary-vibration end effector">
      </a>
      <figcaption><span>Figure 3.</span> Complete end-effector assembly, suspension and differential modules, and six-blade iris. <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig03-end-effector-design.png" target="_blank" rel="noopener">Open full-resolution figure</a></figcaption>
    </figure>

    <div class="project-figure-pair">
      <figure class="project-figure project-figure--on-ink">
        <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig04-working-principle.png" target="_blank" rel="noopener">
          <img loading="lazy" src="{{ site.baseurl }}/images/projects/rice-roguing/fig04-working-principle.png" alt="Complete operational sequence for closing, oscillation, rotation, and extraction">
        </a>
        <figcaption><span>Figure 4.</span> Clamp-to-rotary-vibration sequence and the corresponding plant-removal process. <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig04-working-principle.png" target="_blank" rel="noopener">Open full-resolution figure</a></figcaption>
      </figure>
      <figure class="project-figure project-figure--on-ink">
        <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig05-rotary-vibration-mechanics.png" target="_blank" rel="noopener">
          <img loading="lazy" src="{{ site.baseurl }}/images/projects/rice-roguing/fig05-rotary-vibration-mechanics.png" alt="Complete sinusoidal cam kinematics and V-groove bearing mechanics figure">
        </a>
        <figcaption><span>Figure 5.</span> Sinusoidal cam kinematics, V-groove contact, and guided axial reciprocation. <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig05-rotary-vibration-mechanics.png" target="_blank" rel="noopener">Open full-resolution figure</a></figcaption>
      </figure>
    </div>
  </div>
</section>

<section class="project-section" id="validation">
  <div class="project-shell">
    <div class="project-heading project-heading--row">
      <div>
        <p class="project-kicker">05 &middot; Controlled validation</p>
        <h2>Testing the sequence before the full system</h2>
      </div>
      <p>The mechanism was evaluated at three levels: switching robustness, measured power flow, and a randomized comparison of extraction methods.</p>
    </div>

    <article class="project-chapter">
      <div class="project-chapter__copy">
        <p class="project-subindex">05.1 &middot; Switching and kinematics</p>
        <h3>Did the mechanism change state reliably?</h3>
        <p>The switching model was evaluated across friction coefficients from 0.1 to 0.4 with &plusmn;15% preload and axial-load variation. Even under the adverse combination, the modeled switching margin remained positive at approximately <strong>0.67 N&middot;m</strong>.</p>
        <p>Prototype torque measurements resolved the intended sequence: no-load iris closure, stem contact, threshold crossing and carrier stall, rotary-vibration, and the final drop after uprooting. At 90 RPM, the three-wave cam produced a simulated 4.5 Hz axial excitation with a peak acceleration of 4.80 m/s&sup2;.</p>
      </div>
      <figure class="project-figure">
        <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig12-switching-validation.png" target="_blank" rel="noopener">
          <img loading="lazy" src="{{ site.baseurl }}/images/projects/rice-roguing/fig12-switching-validation.png" alt="Complete switching-margin, measured torque, and power-flow validation figure">
        </a>
        <figcaption><span>Figure 12.</span> Switching-margin robustness, prototype torque, and phase-aligned power flow. <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig12-switching-validation.png" target="_blank" rel="noopener">Open full-resolution figure</a></figcaption>
      </figure>
    </article>

    <article class="project-chapter">
      <div class="project-chapter__copy">
        <p class="project-subindex">05.2 &middot; Randomized extraction experiment</p>
        <h3>Did rotary-vibration reduce peak extraction force?</h3>
        <p>One hundred and twenty eligible weedy rice plants were allocated to direct pulling, rotational pulling, or rotational-vibrational pulling using a fully randomized, interleaved sequence. Each method used the same iris, clamping height, and termination criterion; all 120 trials were retained.</p>
      </div>
      <figure class="project-figure">
        <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig08-extraction-experiment.png" target="_blank" rel="noopener">
          <img loading="lazy" src="{{ site.baseurl }}/images/projects/rice-roguing/fig08-extraction-experiment.png" alt="Complete experimental apparatus and three extraction-mode comparison figure">
        </a>
        <figcaption><span>Figure 8.</span> Field extraction apparatus, force sensor, iris gripper, and the three tested extraction modes. <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig08-extraction-experiment.png" target="_blank" rel="noopener">Open full-resolution figure</a></figcaption>
      </figure>

      <div class="force-summary">
        <div><span>Direct pulling</span><strong>392 N</strong></div>
        <div><span>Rotational pulling</span><strong>353 N</strong></div>
        <div class="force-summary__highlight"><span>Rotary-vibrational</span><strong>331 N</strong></div>
      </div>
      <p class="project-result">Rotary-vibrational pulling reduced mean peak force by <strong>61 N</strong> relative to direct pulling, a <strong>15.6%</strong> reduction under the tested conditions. It also reduced the mean by 22 N relative to rotation alone.</p>

      <figure class="project-figure">
        <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig13-force-results.png" target="_blank" rel="noopener">
          <img loading="lazy" src="{{ site.baseurl }}/images/projects/rice-roguing/fig13-force-results.png" alt="Complete force-time profiles, trial-level peak forces, and pairwise comparisons">
        </a>
        <figcaption><span>Figure 13.</span> Force-time trajectories, individual peak-force observations, and estimation-based pairwise contrasts. <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig13-force-results.png" target="_blank" rel="noopener">Open full-resolution figure</a></figcaption>
      </figure>
    </article>
  </div>
</section>

<section class="project-section project-section--tint" id="field">
  <div class="project-shell">
    <div class="project-heading project-heading--row">
      <div>
        <p class="project-kicker">06 &middot; Field evidence</p>
        <h2>Integrated operation across four off-type morphologies</h2>
      </div>
      <p>The complete system was evaluated over 400 field trials spanning slender-erect, tall-yellowing, broad-leaved tufted, and asynchronously heading plants.</p>
    </div>

    <dl class="project-metrics project-metrics--field">
      <div><dt>378 / 400</dt><dd>successful extractions</dd></div>
      <div><dt>9 / 2,000</dt><dd>neighbor plants damaged</dd></div>
      <div><dt>91.5%</dt><dd>root integrity</dd></div>
      <div><dt>3.5%</dt><dd>stem breakage</dd></div>
    </dl>

    <figure class="project-figure">
      <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig14-field-sequence.png" target="_blank" rel="noopener">
        <img loading="lazy" src="{{ site.baseurl }}/images/projects/rice-roguing/fig14-field-sequence.png" alt="Complete field roguing sequence for four representative off-type rice morphologies">
      </a>
      <figcaption><span>Figure 14.</span> Positioning, engagement, clamping, rotary-vibration, and successful extraction across four representative morphologies. <a href="{{ site.baseurl }}/images/projects/rice-roguing/fig14-field-sequence.png" target="_blank" rel="noopener">Open full-resolution figure</a></figcaption>
    </figure>

    <div class="field-note">
      <div>
        <p class="project-subindex">What the field trial showed</p>
        <h3>Perception and mechanism worked as one chain</h3>
        <p>The iris acted as the final local correction stage instead of requiring centimeter-perfect localization from the mobile platform. Broad-leaved tufted plants produced the lowest success rate and longest cycle time, identifying canopy width and multiple tillers as specific capture challenges.</p>
      </div>
      <div>
        <p class="project-subindex">Evidence boundary</p>
        <h3>What remains unresolved</h3>
        <p>The randomized extraction experiment was completed in one batch, and the full field trial was conducted at one site. Soil deformation, interface shear resistance, and pore-water pressure were not directly measured. Multi-site, multi-season validation and direct soil-interface measurements are the next steps.</p>
      </div>
    </div>
  </div>
</section>

<section class="project-section project-section--closing">
  <div class="project-shell project-closing-grid">
    <div>
      <p class="project-kicker">My contribution</p>
      <h2>Designing the interface between perception and action</h2>
    </div>
    <div class="project-prose">
      <p>I co-developed the single-motor, six-blade iris end effector and integrated the perception output with its mechanical capture envelope. My work also included mechanical modelling, prototype validation, randomized extraction experiments, field-system evaluation, and preparation of the first-author manuscript.</p>
      <p class="project-publication"><strong>Publication:</strong> Yingtong Zhou, Shuqi Zheng, Chaoyue Yang, Yan Zhu, Huaiqu Feng, and Yongwei Wang. “An intelligent hybrid-rice roguing system combining cross-modal perception with a mechanically triggered rotary-vibration end effector.” Revised manuscript submitted to <em>Computers and Electronics in Agriculture</em>.</p>
      <p class="project-publication"><strong>Patent:</strong> Chinese invention patent application No. 202611163903.0, pending.</p>
      <a class="project-cta" href="mailto:3230102433@zju.edu.cn">Discuss this research</a>
    </div>
  </div>
</section>
