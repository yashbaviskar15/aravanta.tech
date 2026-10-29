/**
 * ARAVANTA TECH — CINEMATIC SCROLL-DRIVEN 3D EXPERIENCE
 * - Persistent Three.js WebGL background with spatial architectural grids & isometric server blocks
 * - GSAP ScrollTrigger camera choreography through 8 distinct scenes
 * - Real-time 3D lighting modulation on service card hover
 * - Smooth custom cursor follower with spring physics
 * - Testimonial carousel, active nav indicator, contact form, and preloader
 */

(function () {
  'use strict';

  // -------------------------------- State & Configuration --------------------------------
  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Scene Accent Themes
  const ACCENT_COLORS = {
    default: { key: 0xd4a342, rim: 0x38bdf8, core: 0xd4a342, speed: 1.0 },
    cloud: { key: 0xfce8a6, rim: 0xd4a342, core: 0xd4a342, speed: 1.6 },
    software: { key: 0x38bdf8, rim: 0x818cf8, core: 0x38bdf8, speed: 2.0 },
    devops: { key: 0x10b981, rim: 0x38bdf8, core: 0x10b981, speed: 2.2 },
    security: { key: 0x818cf8, rim: 0xd4a342, core: 0x818cf8, speed: 1.4 }
  };

  let currentAccent = { ...ACCENT_COLORS.default };
  let targetAccent = { ...ACCENT_COLORS.default };

  // -------------------------------- 1. Custom Cursor Follower --------------------------------
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');
  const mouse = { x: -100, y: -100, targetX: -100, targetY: -100, isHovering: false };

  if (!isTouchDevice && cursorDot && cursorRing) {
    window.addEventListener('mousemove', (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    }, { passive: true });

    window.addEventListener('mousedown', () => document.body.classList.add('cursor-active'));
    window.addEventListener('mouseup', () => document.body.classList.remove('cursor-active'));

    // Detect hoverable elements
    const interactiveQuery = 'a, button, input, select, textarea, .service-card, .work-card, .process-step, .tech-pill, .stat-card';
    document.querySelectorAll(interactiveQuery).forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    // Cursor render loop with smooth spring damping
    function updateCursor() {
      mouse.x += (mouse.targetX - mouse.x) * 0.2;
      mouse.y += (mouse.targetY - mouse.y) * 0.2;

      cursorDot.style.transform = `translate3d(${mouse.targetX}px, ${mouse.targetY}px, 0)`;
      cursorRing.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;

      requestAnimationFrame(updateCursor);
    }
    requestAnimationFrame(updateCursor);
  }

  // -------------------------------- 2. Preloader --------------------------------
  const loader = document.getElementById('loader');
  const loaderProgress = document.getElementById('loader-progress');

  function updateLoaderProgress(pct) {
    if (loaderProgress) loaderProgress.style.width = pct + '%';
  }

  updateLoaderProgress(60);

  window.addEventListener('load', () => {
    updateLoaderProgress(100);
    setTimeout(() => {
      if (loader) loader.classList.add('loaded');
    }, 400);
  });

  // -------------------------------- 3. Three.js Background World --------------------------------
  const container = document.getElementById('webgl-container');
  let scene, camera, renderer, clock;
  let coreGroup, coreMesh, innerCoreMesh, ring1, ring2, ring3, beaconsMesh;
  let gridHelperFloor, gridHelperCeiling, serverBlocks = [], busLinesGroup;
  let keyLight, rimLight, cursorLight;

  // Camera Spatial Waypoints for Each Section (0 to 8)
  const WAYPOINTS = [
    { p: new THREE.Vector3(0, 0, 22), t: new THREE.Vector3(0, 0, 0) },      // 0: Hero
    { p: new THREE.Vector3(2.5, 1.2, 18), t: new THREE.Vector3(0.8, 0, -3) }, // 1: About
    { p: new THREE.Vector3(-2.2, 0.8, 16), t: new THREE.Vector3(-0.6, 0, -4) },// 2: Services
    { p: new THREE.Vector3(0, -1.2, 15), t: new THREE.Vector3(0, -0.6, -5) }, // 3: Process
    { p: new THREE.Vector3(1.8, 1.6, 17), t: new THREE.Vector3(0.3, 0.3, -3) },// 4: Work
    { p: new THREE.Vector3(-1.4, -0.8, 18), t: new THREE.Vector3(-0.2, 0, -2) },// 5: Tech
    { p: new THREE.Vector3(0, 0.6, 19), t: new THREE.Vector3(0, 0, -1) },    // 6: Testimonials
    { p: new THREE.Vector3(-1.0, 1.2, 21), t: new THREE.Vector3(0, 0.2, 0) },  // 7: Contact
    { p: new THREE.Vector3(0, 0, 26), t: new THREE.Vector3(0, 0, 0) }       // 8: Footer
  ];

  // Procedural soft circular particle texture
  function createParticleTexture() {
    const cvs = document.createElement('canvas');
    cvs.width = 64;
    cvs.height = 64;
    const ctx = cvs.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.25, 'rgba(235, 205, 120, 0.85)');
      grad.addColorStop(0.6, 'rgba(201, 162, 74, 0.2)');
      grad.addColorStop(1, 'rgba(5, 7, 10, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
    }
    const texture = new THREE.CanvasTexture(cvs);
    texture.needsUpdate = true;
    return texture;
  }

  function initThree() {
    if (!container || typeof THREE === 'undefined') return;

    // Scene & Deep Fog
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070a, 0.016);
    scene.background = new THREE.Color(0x05070a);

    // Camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.copy(WAYPOINTS[0].p);

    // Renderer
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    clock = new THREE.Clock();

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambientLight);

    keyLight = new THREE.PointLight(0xd4a342, 2.8, 85);
    keyLight.position.set(16, 18, 14);
    scene.add(keyLight);

    rimLight = new THREE.PointLight(0x38bdf8, 1.8, 75);
    rimLight.position.set(-18, -14, -8);
    scene.add(rimLight);

    cursorLight = new THREE.PointLight(0xfce8a6, 3.2, 45);
    cursorLight.position.set(0, 0, 10);
    scene.add(cursorLight);

    // Quantum Core Group (placed at z = -14)
    coreGroup = new THREE.Group();
    coreGroup.position.set(0, 0, -14);
    scene.add(coreGroup);

    // 1. Faceted Geodesic Icosahedron Core
    const coreGeo = new THREE.IcosahedronGeometry(2.2, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xd4a342,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // Inner Glowing Core
    const innerGeo = new THREE.IcosahedronGeometry(1.2, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    innerCoreMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerCoreMesh);

    // 2. Kinetic Concentric Orbital Rings
    const ring1Geo = new THREE.TorusGeometry(5.4, 0.035, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0xd4a342, transparent: true, opacity: 0.45 });
    ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI * 0.25;
    coreGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(8.2, 0.03, 16, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.35 });
    ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI * 0.35;
    coreGroup.add(ring2);

    const ring3Geo = new THREE.TorusGeometry(11.0, 0.025, 16, 140);
    const ring3Mat = new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.25 });
    ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = -Math.PI * 0.3;
    ring3.rotation.z = Math.PI * 0.15;
    coreGroup.add(ring3);

    // 3. Orbital Satellite Beacons
    const pTex = createParticleTexture();
    const beaconCount = 8;
    const beaconsGeo = new THREE.BufferGeometry();
    const bPos = new Float32Array(beaconCount * 3);
    const bCol = new Float32Array(beaconCount * 3);
    const cGold = new THREE.Color(0xd4a342);
    const cCyan = new THREE.Color(0x38bdf8);

    for (let i = 0; i < beaconCount; i++) {
      const i3 = i * 3;
      const pick = i % 2 === 0 ? cGold : cCyan;
      bCol[i3] = pick.r;
      bCol[i3 + 1] = pick.g;
      bCol[i3 + 2] = pick.b;
    }
    beaconsGeo.setAttribute('position', new THREE.BufferAttribute(bPos, 3));
    beaconsGeo.setAttribute('color', new THREE.BufferAttribute(bCol, 3));

    const beaconsMat = new THREE.PointsMaterial({
      size: 0.6,
      map: pTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    beaconsMesh = new THREE.Points(beaconsGeo, beaconsMat);
    coreGroup.add(beaconsMesh);

    // 4. Dual Perspective Architectural Spatial Grids (Floor & Ceiling)
    gridHelperFloor = new THREE.GridHelper(120, 60, 0xd4a342, 0x111622);
    gridHelperFloor.position.set(0, -9.5, -16);
    scene.add(gridHelperFloor);

    gridHelperCeiling = new THREE.GridHelper(120, 60, 0x38bdf8, 0x111622);
    gridHelperCeiling.position.set(0, 14, -16);
    scene.add(gridHelperCeiling);

    // 5. Isometric Server Cubes & Data Blocks (Enterprise Tech Geometry)
    const serverBlocksGroup = new THREE.Group();
    scene.add(serverBlocksGroup);

    const blockCount = 28;
    const blockGeo = new THREE.BoxGeometry(1.4, 1.4, 1.4);
    const blockMat = new THREE.MeshStandardMaterial({
      color: 0x0c101a,
      roughness: 0.2,
      metalness: 0.8,
      transparent: true,
      opacity: 0.7
    });
    const edgeGeo = new THREE.EdgesGeometry(blockGeo);

    serverBlocks = [];
    for (let i = 0; i < blockCount; i++) {
      const isGold = i % 3 === 0;
      const wireMat = new THREE.LineBasicMaterial({
        color: isGold ? 0xd4a342 : 0x38bdf8,
        transparent: true,
        opacity: isGold ? 0.6 : 0.4
      });

      const mesh = new THREE.Mesh(blockGeo, blockMat);
      const wireframe = new THREE.LineSegments(edgeGeo, wireMat);
      mesh.add(wireframe);

      const posX = ((i % 7) - 3) * 4.5 + (Math.random() - 0.5) * 1.5;
      const posY = Math.floor(i / 7) * 3.5 - 6 + (Math.random() - 0.5) * 1.5;
      const posZ = -14 + (Math.random() - 0.5) * 8;

      mesh.position.set(posX, posY, posZ);
      serverBlocksGroup.add(mesh);

      serverBlocks.push({
        mesh,
        baseY: posY,
        rotSpeed: (Math.random() - 0.5) * 0.004
      });
    }

    // 6. Orthogonal Data Highways (Rectilinear 90° Server Bus Lines)
    busLinesGroup = new THREE.Group();
    scene.add(busLinesGroup);

    for (let i = 0; i < 14; i++) {
      const points = [];
      let currentX = (Math.random() - 0.5) * 30;
      let currentY = (Math.random() - 0.5) * 16;
      let currentZ = -18 + (Math.random() - 0.5) * 8;
      points.push(new THREE.Vector3(currentX, currentY, currentZ));

      for (let s = 0; s < 4; s++) {
        const axis = s % 2 === 0 ? 'x' : 'y';
        if (axis === 'x') {
          currentX += (Math.random() > 0.5 ? 1 : -1) * (3 + Math.random() * 4);
        } else {
          currentY += (Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 3);
        }
        points.push(new THREE.Vector3(currentX, currentY, currentZ));
      }

      const curve = new THREE.CatmullRomCurve3(points);
      const busGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(30));
      const busMat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? 0xd4a342 : 0x38bdf8,
        transparent: true,
        opacity: 0.35
      });
      const line = new THREE.Line(busGeo, busMat);
      busLinesGroup.add(line);
    }

    // Animation & Render Loop
    let isVisible = true;
    document.addEventListener('visibilitychange', () => { isVisible = !document.hidden; });

    const _camPos = new THREE.Vector3();
    const _camLook = new THREE.Vector3();
    const curveP = new THREE.CatmullRomCurve3(WAYPOINTS.map(w => w.p));
    const curveT = new THREE.CatmullRomCurve3(WAYPOINTS.map(w => w.t));

    let scrollProgress = 0;
    let smoothProgress = 0;

    // Track scroll progress
    window.addEventListener('scroll', () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = Math.max(0, Math.min(1, window.scrollY / (maxScroll || 1)));
    }, { passive: true });

    function animate() {
      requestAnimationFrame(animate);
      if (!isVisible) return;

      const dt = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth scroll progress interpolation
      smoothProgress += (scrollProgress - smoothProgress) * 0.08;

      // Evaluate spline position & target
      curveP.getPoint(smoothProgress, _camPos);
      curveT.getPoint(smoothProgress, _camLook);

      // Handheld camera parallax sway from cursor
      if (!REDUCED_MOTION && !isTouchDevice) {
        const nx = (mouse.targetX / window.innerWidth - 0.5) * 2;
        const ny = (mouse.targetY / window.innerHeight - 0.5) * 2;
        _camPos.x += nx * 1.2;
        _camPos.y += -ny * 0.75;

        cursorLight.position.x = nx * 14;
        cursorLight.position.y = -ny * 9 + 0.5;
      }

      camera.position.copy(_camPos);
      camera.lookAt(_camLook);

      // Kinetic Rotation of Core
      if (!REDUCED_MOTION) {
        const speed = currentAccent.speed;
        coreMesh.rotation.y = elapsed * 0.12 * speed;
        coreMesh.rotation.x = elapsed * 0.08 * speed;
        innerCoreMesh.rotation.y = -elapsed * 0.2 * speed;

        ring1.rotation.z = elapsed * 0.15 * speed;
        ring2.rotation.x = elapsed * 0.12 * speed;
        ring3.rotation.y = -elapsed * 0.09 * speed;

        // Animate satellite beacons
        const bp = beaconsGeo.attributes.position.array;
        for (let i = 0; i < beaconCount; i++) {
          const i3 = i * 3;
          const theta = elapsed * 0.8 * speed + (i * Math.PI * 2) / beaconCount;
          const r = i < 4 ? 5.4 : 8.2;
          bp[i3] = Math.cos(theta) * r;
          bp[i3 + 1] = Math.sin(theta) * (r * 0.6);
          bp[i3 + 2] = Math.sin(theta * 0.5) * 2;
        }
        beaconsGeo.attributes.position.needsUpdate = true;
      }

      // Smooth Color Interpolation on Hover
      currentAccent.key += (targetAccent.key - currentAccent.key) * 0.05;
      currentAccent.speed += (targetAccent.speed - currentAccent.speed) * 0.05;
      keyLight.color.setHex(targetAccent.key);
      coreMesh.material.color.setHex(targetAccent.core);

      // Server Blocks and Grid Kinetic Float
      if (!REDUCED_MOTION) {
        serverBlocks.forEach((b, idx) => {
          b.mesh.position.y = b.baseY + Math.sin(elapsed * 0.8 + idx) * 0.35;
          b.mesh.rotation.y += b.rotSpeed;
          b.mesh.rotation.x += b.rotSpeed * 0.7;
        });

        if (gridHelperFloor) {
          gridHelperFloor.position.z = -16 + (Math.sin(elapsed * 0.2) * 0.5);
        }
      }

      renderer.render(scene, camera);
    }

    animate();

    // Window Resize Handler
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    });
  }

  // Initialize Three.js after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThree);
  } else {
    initThree();
  }

  // -------------------------------- 4. Interactive Service Card Hover Modulations --------------------------------
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card) => {
    const mode = card.dataset.mode;
    card.addEventListener('mouseenter', () => {
      if (ACCENT_COLORS[mode]) {
        targetAccent = { ...ACCENT_COLORS[mode] };
      }
    });
    card.addEventListener('mouseleave', () => {
      targetAccent = { ...ACCENT_COLORS.default };
    });
  });

  // -------------------------------- 5. Mobile Navigation Overlay --------------------------------
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('active');
      mobileToggle.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // -------------------------------- 6. Active Section Highlighting --------------------------------
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-pill[data-section], .desktop-nav .nav-link[data-section]');

  function updateActiveNav() {
    let currentId = '';
    const scrollMid = window.scrollY + window.innerHeight * 0.4;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollMid >= top && scrollMid < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      if (link.dataset.section === currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  // -------------------------------- 7. Testimonial Carousel --------------------------------
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  let currentSlide = 0;
  let carouselTimer = null;

  function showSlide(index) {
    slides.forEach((s, idx) => s.classList.toggle('active', idx === index));
    dots.forEach((d, idx) => d.classList.toggle('active', idx === index));
    currentSlide = index;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  if (slides.length > 0) {
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetTimer(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetTimer(); });
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => { showSlide(idx); resetTimer(); });
    });

    function startTimer() {
      carouselTimer = setInterval(nextSlide, 7000);
    }
    function resetTimer() {
      clearInterval(carouselTimer);
      startTimer();
    }
    startTimer();
  }

  // -------------------------------- 8. Contact Form Handling --------------------------------
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const feedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        if (feedback) {
          feedback.textContent = 'Please fill out all required fields.';
          feedback.className = 'form-feedback error';
        }
        return;
      }

      if (btnText) btnText.textContent = 'Transmitting Scope...';
      if (submitBtn) submitBtn.disabled = true;

      // Simulated clean async dispatch
      setTimeout(() => {
        if (btnText) btnText.textContent = 'Inquiry Sent!';
        if (feedback) {
          feedback.textContent = 'Thank you! Your project inquiry has been received. Our principal architects will reach out within 24 hours.';
          feedback.className = 'form-feedback success';
        }
        contactForm.reset();
        setTimeout(() => {
          if (btnText) btnText.textContent = 'Send Project Inquiry';
          if (submitBtn) submitBtn.disabled = false;
        }, 4000);
      }, 1200);
    });
  }

  // -------------------------------- 9. Magnetic Button Micro-interaction --------------------------------
  if (!isTouchDevice && !REDUCED_MOTION) {
    document.querySelectorAll('.magnetic-btn').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate3d(${x * 0.25}px, ${y * 0.25}px, 0)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate3d(0, 0, 0)';
      });
    });
  }

})();
