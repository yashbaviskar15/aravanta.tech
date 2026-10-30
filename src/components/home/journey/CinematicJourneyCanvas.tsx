"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface CinematicJourneyCanvasProps {
  scrollProgress: number; // 0.0 to 1.0
  activeScene: number; // 0 to 7
  isReducedMotion?: boolean;
}

// Deep background camera waypoints positioned safely behind content layers
const CAM_WAYPOINTS = [
  // Scene 01: Hero split architecture view
  { p: new THREE.Vector3(0, 0, 22), t: new THREE.Vector3(0, 0, 0) },
  // Scene 02: Cloud Transformation (Multi-Cloud Constellation)
  { p: new THREE.Vector3(2.4, 1.2, 18), t: new THREE.Vector3(0.6, 0, -2) },
  // Scene 03: Application Engineering (Tiered Architecture Stack)
  { p: new THREE.Vector3(-2.2, 0.8, 16), t: new THREE.Vector3(-0.4, 0, -3) },
  // Scene 04: DevOps & Automation (GitOps Conduit Tunnel)
  { p: new THREE.Vector3(0, -1.2, 15), t: new THREE.Vector3(0, -0.2, -4) },
  // Scene 05: Security & Reliability (Zero-Trust Shield)
  { p: new THREE.Vector3(1.8, 1.5, 17), t: new THREE.Vector3(0.2, 0.2, -2) },
  // Scene 06: Aravanta CloudOS (MicroVM Kernel Lattice)
  { p: new THREE.Vector3(0, 0.5, 19), t: new THREE.Vector3(0, 0, -1) },
  // Scene 07: Engineering Approach (5-Stage Quantum Portals)
  { p: new THREE.Vector3(-1.2, 1.3, 21), t: new THREE.Vector3(0, 0.1, 0) },
  // Scene 08: Conversion & Synthesis Vortex
  { p: new THREE.Vector3(0, 0, 25), t: new THREE.Vector3(0, 0, 0) },
];

// Color palette themes corresponding to each scene
const SCENE_THEMES = [
  { key: 0xd4a342, rim: 0x38bdf8, amb: 0x111624 }, // S01: Enterprise Gold & Cyan
  { key: 0x38bdf8, rim: 0xd4a342, amb: 0x0c1524 }, // S02: Multi-Cloud Cyan
  { key: 0x10b981, rim: 0x38bdf8, amb: 0x091b16 }, // S03: App Eng Emerald
  { key: 0xd4a342, rim: 0xf59e0b, amb: 0x1c1409 }, // S04: GitOps Accelerator Amber
  { key: 0x10b981, rim: 0x059669, amb: 0x061c14 }, // S05: Zero-Trust Emerald
  { key: 0x38bdf8, rim: 0x818cf8, amb: 0x0a1628 }, // S06: CloudOS Cyan & Indigo
  { key: 0xd4a342, rim: 0x10b981, amb: 0x14181f }, // S07: 5-Stage Gold & Emerald
  { key: 0xd4a342, rim: 0x38bdf8, amb: 0x10141e }, // S08: Conversion Vortex
];

export function CinematicJourneyCanvas({
  scrollProgress,
  activeScene,
  isReducedMotion = false,
}: CinematicJourneyCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(scrollProgress);
  const smoothedProgressRef = useRef(scrollProgress);
  const smoothedLookAtRef = useRef(new THREE.Vector3().copy(CAM_WAYPOINTS[0].t));
  const mouseRef = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    vx: 0,
    vy: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    progressRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene & Deep Atmospheric Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070a, 0.022);
    scene.background = new THREE.Color(0x05070a);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.copy(CAM_WAYPOINTS[0].p);

    // 2. High-Performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 3. Dynamic Scene Lighting System
    const ambientLight = new THREE.AmbientLight(0x111624, 0.6);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0xd4a342, 2.6, 95);
    keyLight.position.set(18, 16, 12);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x38bdf8, 2.0, 85);
    rimLight.position.set(-18, -14, -6);
    scene.add(rimLight);

    // Cursor Follow Light for dynamic tactile interaction
    const cursorLight = new THREE.PointLight(0xfce8a6, 2.4, 45);
    cursorLight.position.set(0, 0, 10);
    scene.add(cursorLight);

    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // -------------------------------------------------------------
    // 4. ARCHITECTURAL PERSPECTIVE GRIDS (Floor & Ceiling)
    // -------------------------------------------------------------
    const gridHelperFloor = new THREE.GridHelper(140, 70, 0xd4a342, 0x151b28);
    gridHelperFloor.position.set(0, -9.5, -16);
    worldGroup.add(gridHelperFloor);

    const gridHelperCeiling = new THREE.GridHelper(140, 70, 0x38bdf8, 0x111622);
    gridHelperCeiling.position.set(0, 14, -16);
    worldGroup.add(gridHelperCeiling);

    // -------------------------------------------------------------
    // 5. CENTRAL ARCHITECTURAL KERNEL (Dynamic Morphing Core)
    // -------------------------------------------------------------
    const coreGroup = new THREE.Group();
    coreGroup.position.set(0, 0, -15);
    worldGroup.add(coreGroup);

    // Inner Icosahedron Facet Core
    const innerCoreGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0x0a0e18,
      roughness: 0.15,
      metalness: 0.95,
      emissive: 0xd4a342,
      emissiveIntensity: 0.15,
      transparent: true,
      opacity: 0.85,
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    coreGroup.add(innerCoreMesh);

    // Outer Octahedron Precision Cage
    const outerCageGeo = new THREE.OctahedronGeometry(2.5, 0);
    const outerCageWire = new THREE.LineSegments(
      new THREE.EdgesGeometry(outerCageGeo),
      new THREE.LineBasicMaterial({ color: 0xd4a342, transparent: true, opacity: 0.75 })
    );
    coreGroup.add(outerCageWire);

    // Concentric Gyroscopic Telemetry Rings
    const ring1 = new THREE.Mesh(
      new THREE.RingGeometry(4.2, 4.26, 64),
      new THREE.MeshBasicMaterial({ color: 0xd4a342, side: THREE.DoubleSide, transparent: true, opacity: 0.45 })
    );
    ring1.rotation.x = Math.PI / 2.3;
    coreGroup.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.RingGeometry(6.4, 6.46, 64),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide, transparent: true, opacity: 0.35 })
    );
    ring2.rotation.y = Math.PI / 2.6;
    coreGroup.add(ring2);

    // Additional Tunnel Conduit Rings (for Scene 04 DevOps Accelerator)
    const conduitRings: THREE.Mesh[] = [];
    const conduitGroup = new THREE.Group();
    worldGroup.add(conduitGroup);
    for (let c = 0; c < 5; c++) {
      const cRing = new THREE.Mesh(
        new THREE.RingGeometry(3.6 + c * 0.4, 3.66 + c * 0.4, 48),
        new THREE.MeshBasicMaterial({
          color: 0xd4a342,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.2,
        })
      );
      cRing.position.set(0, -0.5, -8 - c * 4);
      conduitGroup.add(cRing);
      conduitRings.push(cRing);
    }

    // -------------------------------------------------------------
    // 6. CRYPTOGRAPHIC ZERO-TRUST GEODESIC SHIELD (Scene 05 Security)
    // -------------------------------------------------------------
    const shieldGroup = new THREE.Group();
    shieldGroup.position.set(0, 0, -15);
    worldGroup.add(shieldGroup);

    const shieldGeo = new THREE.IcosahedronGeometry(4.8, 1);
    const shieldWire = new THREE.LineSegments(
      new THREE.WireframeGeometry(shieldGeo),
      new THREE.LineBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0 })
    );
    shieldGroup.add(shieldWire);

    // -------------------------------------------------------------
    // 7. ORBITING CLOUDOS MICROVM SATELLITE NODES (Scene 06 CloudOS)
    // -------------------------------------------------------------
    const microVMGroup = new THREE.Group();
    microVMGroup.position.set(0, 0, -15);
    worldGroup.add(microVMGroup);

    const satelliteNodes: {
      mesh: THREE.Mesh;
      angle: number;
      radius: number;
      speed: number;
      orbitPlane: "xy" | "xz" | "tilted";
    }[] = [];

    const satGeo = new THREE.BoxGeometry(0.7, 0.7, 0.7);
    const satMat = new THREE.MeshStandardMaterial({
      color: 0x081320,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.35,
    });
    const satEdges = new THREE.EdgesGeometry(satGeo);
    const satWireMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.8 });

    for (let s = 0; s < 6; s++) {
      const satMesh = new THREE.Mesh(satGeo, satMat);
      satMesh.add(new THREE.LineSegments(satEdges, satWireMat));
      microVMGroup.add(satMesh);

      satelliteNodes.push({
        mesh: satMesh,
        angle: (s / 6) * Math.PI * 2,
        radius: 4.8 + (s % 2) * 1.5,
        speed: 0.6 + s * 0.15,
        orbitPlane: s % 3 === 0 ? "xy" : s % 3 === 1 ? "xz" : "tilted",
      });
    }

    // -------------------------------------------------------------
    // 8. 28 RECONFIGURABLE MONOLITHIC SERVER BLOCKS
    // Dynamically morph between formations based on scroll progress!
    // -------------------------------------------------------------
    const serverBlocksGroup = new THREE.Group();
    worldGroup.add(serverBlocksGroup);

    const blockCount = 28;
    const blockGeo = new THREE.BoxGeometry(1.4, 1.4, 1.4);
    const blockMat = new THREE.MeshStandardMaterial({
      color: 0x0a0e17,
      roughness: 0.2,
      metalness: 0.85,
      transparent: true,
      opacity: 0.72,
    });
    const edgeGeo = new THREE.EdgesGeometry(blockGeo);

    interface BlockData {
      mesh: THREE.Mesh;
      wireframe: THREE.LineSegments;
      // Morph formations for different scenes
      f0: THREE.Vector3; // Scene 0: Isometric background matrix
      f1: THREE.Vector3; // Scene 1: Distributed 4-cluster cloud
      f2: THREE.Vector3; // Scene 2: 3-tier microservice architecture stack
      f3: THREE.Vector3; // Scene 3: Linear CI/CD pipeline conduit
      f4: THREE.Vector3; // Scene 4: Defensive perimeter ring
      f5: THREE.Vector3; // Scene 5: Satellite constellation around CloudOS
      f6: THREE.Vector3; // Scene 6: 5-Stage milestone gates
      f7: THREE.Vector3; // Scene 7: Inward convergence vortex
      speed: number;
      rotSpeed: number;
      originalWireColor: number;
    }

    const blocks: BlockData[] = [];

    for (let i = 0; i < blockCount; i++) {
      const isGold = i % 3 === 0;
      const wireColor = isGold ? 0xd4a342 : 0x38bdf8;
      const wireMat = new THREE.LineBasicMaterial({
        color: wireColor,
        transparent: true,
        opacity: isGold ? 0.65 : 0.45,
      });

      const mesh = new THREE.Mesh(blockGeo, blockMat);
      const wireframe = new THREE.LineSegments(edgeGeo, wireMat);
      mesh.add(wireframe);

      // Formation 0: Isometric background grid (Scene 01)
      const f0X = ((i % 7) - 3) * 4.4 + ((i * 3) % 5 - 2) * 0.4;
      const f0Y = Math.floor(i / 7) * 3.4 - 5.5 + ((i * 2) % 3 - 1) * 0.3;
      const f0Z = -14 + ((i * 7) % 9 - 4) * 0.8;
      const f0 = new THREE.Vector3(f0X, f0Y, f0Z);

      // Formation 1: Distributed 4-Region Multi-Cloud Constellation (Scene 02)
      const regionIndex = i % 4; // 0: US-East, 1: EU-Central, 2: AP-South, 3: Global Edge
      const regionCenter = [
        new THREE.Vector3(-6, 3, -15),
        new THREE.Vector3(6, 3.5, -16),
        new THREE.Vector3(-5, -4, -14),
        new THREE.Vector3(5.5, -3.5, -17),
      ][regionIndex];
      const offsetAngle = (i / 7) * Math.PI * 2;
      const f1 = new THREE.Vector3(
        regionCenter.x + Math.cos(offsetAngle) * 2.2,
        regionCenter.y + Math.sin(offsetAngle) * 1.8,
        regionCenter.z + (Math.sin(i) * 1.5)
      );

      // Formation 2: 3-Tier Microservices Stack (Scene 03)
      const tier = i % 3; // 0: Presentation, 1: Services, 2: Data Store
      const tierY = tier === 0 ? 3.8 : tier === 1 ? 0 : -3.8;
      const tierCol = Math.floor(i / 3) - 4;
      const f2 = new THREE.Vector3(
        tierCol * 1.8,
        tierY + (Math.sin(i) * 0.4),
        -13 + (tier * -1.8)
      );

      // Formation 3: Linear CI/CD Pipeline Conduit (Scene 04)
      const pipeIndex = i;
      const f3Angle = (pipeIndex / blockCount) * Math.PI * 6;
      const f3Radius = 3.6;
      const f3 = new THREE.Vector3(
        Math.cos(f3Angle) * f3Radius,
        Math.sin(f3Angle) * f3Radius - 0.5,
        -6 - (pipeIndex * 0.8)
      );

      // Formation 4: Cryptographic Zero-Trust Perimeter (Scene 05)
      const theta = (i / blockCount) * Math.PI * 2;
      const phi = ((i % 5) / 5) * Math.PI - Math.PI / 2;
      const r = 6.2;
      const f4 = new THREE.Vector3(
        r * Math.cos(phi) * Math.cos(theta),
        r * Math.sin(phi),
        -15 + r * Math.cos(phi) * Math.sin(theta)
      );

      // Formation 5: CloudOS Satellite Lattice (Scene 06)
      const f5 = new THREE.Vector3(
        ((i % 6) - 2.5) * 3.5,
        (Math.floor(i / 6) - 2) * 2.8,
        -14 + Math.sin(i * 1.2) * 2.5
      );

      // Formation 6: 5-Stage Engineering Gates (Scene 07)
      const gateIndex = i % 5;
      const gateZ = -10 - gateIndex * 3.2;
      const side = (i % 2 === 0 ? 1 : -1);
      const f6 = new THREE.Vector3(
        side * (2.8 + (Math.floor(i / 10) * 1.2)),
        ((Math.floor(i / 5) % 3) - 1) * 2.5,
        gateZ
      );

      // Formation 7: Conversion Synthesis Vortex (Scene 08)
      const spiralT = i / blockCount;
      const spiralR = 1.2 + spiralT * 6.5;
      const spiralAngle = spiralT * Math.PI * 5;
      const f7 = new THREE.Vector3(
        Math.cos(spiralAngle) * spiralR,
        Math.sin(spiralAngle) * spiralR,
        -11 - spiralT * 12
      );

      mesh.position.copy(f0);
      serverBlocksGroup.add(mesh);

      blocks.push({
        mesh,
        wireframe,
        f0,
        f1,
        f2,
        f3,
        f4,
        f5,
        f6,
        f7,
        speed: 0.0008 + Math.random() * 0.0012,
        rotSpeed: (Math.random() - 0.5) * 0.006,
        originalWireColor: wireColor,
      });
    }

    // -------------------------------------------------------------
    // 9. HIGH-TECH 3D PARTICLE FIELD (Cyber Stardust Swarm)
    // -------------------------------------------------------------
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: { x: number; y: number; z: number }[] = [];

    for (let p = 0; p < particleCount; p++) {
      particlePositions[p * 3] = (Math.random() - 0.5) * 45;
      particlePositions[p * 3 + 1] = (Math.random() - 0.5) * 28;
      particlePositions[p * 3 + 2] = -5 - Math.random() * 26;

      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.012,
        y: (Math.random() - 0.5) * 0.012,
        z: (Math.random() - 0.5) * 0.012,
      });
    }

    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: 0xd4a342,
      size: 0.16,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    worldGroup.add(particleSystem);

    // -------------------------------------------------------------
    // 10. INTERACTIVE MOUSE TRACKING & PHYSICS
    // -------------------------------------------------------------
    const onMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;

      // Track cursor velocity for dynamic fluid swirl
      mouseRef.current.vx = normX - mouseRef.current.lastX;
      mouseRef.current.vy = normY - mouseRef.current.lastY;
      mouseRef.current.lastX = normX;
      mouseRef.current.lastY = normY;

      mouseRef.current.targetX = normX;
      mouseRef.current.targetY = normY;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Window Resize Event
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // -------------------------------------------------------------
    // 11. MAIN ANIMATION & SMOOTH MORPHING RENDER LOOP
    // -------------------------------------------------------------
    let animId: number;
    const clock = new THREE.Clock();

    // Helper to get target position across the 7 transition segments
    const getMorphTarget = (b: BlockData, seg: number, t: number): THREE.Vector3 => {
      const forms = [b.f0, b.f1, b.f2, b.f3, b.f4, b.f5, b.f6, b.f7];
      const start = forms[seg] || forms[0];
      const end = forms[Math.min(seg + 1, forms.length - 1)] || forms[forms.length - 1];
      return new THREE.Vector3().lerpVectors(start, end, t);
    };

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const rawProgress = progressRef.current;

      // Silky exponential smoothing for scroll interpolation
      smoothedProgressRef.current += (rawProgress - smoothedProgressRef.current) * 0.085;
      const progress = smoothedProgressRef.current;

      // Smooth mouse lerping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;

      // Unprojected mouse coordinate in 3D world space at z = -14
      const mouseWorldX = mouseRef.current.x * 14;
      const mouseWorldY = mouseRef.current.y * 9;

      // Segment math for 8 scenes (7 transitions)
      const waypoints = CAM_WAYPOINTS;
      const totalSegments = waypoints.length - 1;
      const exactSegment = progress * totalSegments;
      const segIndex = Math.min(Math.floor(exactSegment), totalSegments - 1);
      const segT = exactSegment - segIndex;

      // 1. Interpolate Camera Waypoint
      const pA = waypoints[segIndex].p;
      const pB = waypoints[segIndex + 1].p;
      const tA = waypoints[segIndex].t;
      const tB = waypoints[segIndex + 1].t;

      const targetCamPos = new THREE.Vector3().lerpVectors(pA, pB, segT);
      const targetLookAt = new THREE.Vector3().lerpVectors(tA, tB, segT);

      // Subtle mouse camera parallax
      if (!isReducedMotion) {
        targetCamPos.x += mouseRef.current.x * 1.1;
        targetCamPos.y += mouseRef.current.y * 0.8;
      }

      camera.position.lerp(targetCamPos, 0.075);
      smoothedLookAtRef.current.lerp(targetLookAt, 0.075);
      camera.lookAt(smoothedLookAtRef.current);

      // 2. Cursor Spotlight Dynamic Positioning
      cursorLight.position.x = mouseWorldX;
      cursorLight.position.y = mouseWorldY;
      cursorLight.position.z = -2 + Math.sin(elapsedTime) * 1.5;

      // 3. Dynamic Scene Theme Lighting Interpolation
      const themeA = SCENE_THEMES[segIndex] || SCENE_THEMES[0];
      const themeB = SCENE_THEMES[Math.min(segIndex + 1, SCENE_THEMES.length - 1)] || SCENE_THEMES[0];
      
      const currentKeyColor = new THREE.Color(themeA.key).lerp(new THREE.Color(themeB.key), segT);
      const currentRimColor = new THREE.Color(themeA.rim).lerp(new THREE.Color(themeB.rim), segT);
      const currentAmbColor = new THREE.Color(themeA.amb).lerp(new THREE.Color(themeB.amb), segT);

      keyLight.color.copy(currentKeyColor);
      rimLight.color.copy(currentRimColor);
      ambientLight.color.copy(currentAmbColor);

      // 4. Central Core & Rings Transformations
      if (!isReducedMotion) {
        innerCoreMesh.rotation.y = elapsedTime * 0.16;
        innerCoreMesh.rotation.x = elapsedTime * 0.1;
        outerCageWire.rotation.y = -elapsedTime * 0.12;
        outerCageWire.rotation.z = elapsedTime * 0.08;

        ring1.rotation.z = elapsedTime * 0.08;
        ring2.rotation.z = -elapsedTime * 0.07;
      }

      // Security Geodesic Shield visibility (Scene 05 peak around segIndex 4)
      const shieldVisibility = Math.max(0, 1 - Math.abs(exactSegment - 4));
      (shieldWire.material as THREE.LineBasicMaterial).opacity = shieldVisibility * 0.75;
      if (shieldVisibility > 0.02) {
        shieldGroup.rotation.y = elapsedTime * 0.15;
        shieldGroup.rotation.x = elapsedTime * 0.08;
        shieldGroup.scale.setScalar(1 + Math.sin(elapsedTime * 2) * 0.04);
      }

      // CloudOS Satellite Nodes (Scene 06 peak around segIndex 5)
      const cloudOSVisibility = Math.max(0, 1 - Math.abs(exactSegment - 5) * 0.8);
      satelliteNodes.forEach((sat, idx) => {
        sat.mesh.visible = cloudOSVisibility > 0.05;
        if (sat.mesh.visible) {
          const curAngle = sat.angle + elapsedTime * sat.speed * (isReducedMotion ? 0.2 : 1);
          let satX = Math.cos(curAngle) * sat.radius;
          let satY = Math.sin(curAngle) * sat.radius;
          let satZ = 0;

          if (sat.orbitPlane === "xz") {
            satZ = satY;
            satY = Math.sin(curAngle * 0.5) * 1.5;
          } else if (sat.orbitPlane === "tilted") {
            satZ = Math.sin(curAngle) * (sat.radius * 0.7);
            satY = Math.cos(curAngle) * (sat.radius * 0.7);
            satX = Math.sin(curAngle) * sat.radius;
          }

          sat.mesh.position.set(satX, satY, satZ);
          sat.mesh.rotation.y += 0.02;
          sat.mesh.rotation.x += 0.01;
        }
      });

      // DevOps Tunnel Conduit Rings (Scene 04 peak around segIndex 3)
      const tunnelFactor = Math.max(0, 1 - Math.abs(exactSegment - 3));
      conduitRings.forEach((cRing, idx) => {
        const mat = cRing.material as THREE.MeshBasicMaterial;
        mat.opacity = tunnelFactor * (0.25 + (idx % 2) * 0.15);
        cRing.rotation.z = (elapsedTime * (0.1 + idx * 0.05)) * (idx % 2 === 0 ? 1 : -1);
      });

      // 5. Server Monoliths Reconfiguration & Cursor Proximity Physics
      blocks.forEach((b, idx) => {
        // Base morph target based on scroll segment
        const basePos = getMorphTarget(b, segIndex, segT);

        // Subtle idle levitation
        const levitationY = Math.sin(elapsedTime * 0.9 + idx * 0.4) * 0.25;

        // Interactive Cursor Proximity Interaction:
        // Blocks near the cursor react dynamically by tilting and subtle repulsion
        let cursorInfluenceX = 0;
        let cursorInfluenceY = 0;
        let cursorInfluenceZ = 0;

        if (!isReducedMotion) {
          const dx = basePos.x - mouseWorldX;
          const dy = basePos.y - mouseWorldY;
          const distToMouse = Math.sqrt(dx * dx + dy * dy);

          if (distToMouse < 6.5) {
            const force = (1 - distToMouse / 6.5);
            // Repel slightly along the mouse vector
            cursorInfluenceX = (dx / distToMouse) * force * 1.2;
            cursorInfluenceY = (dy / distToMouse) * force * 1.2;
            cursorInfluenceZ = -force * 1.8;

            // Tilt block face toward cursor
            b.mesh.rotation.x = THREE.MathUtils.lerp(b.mesh.rotation.x, dy * 0.12, 0.1);
            b.mesh.rotation.y = THREE.MathUtils.lerp(b.mesh.rotation.y, -dx * 0.12, 0.1);
          } else {
            b.mesh.rotation.x += b.rotSpeed * 0.6;
            b.mesh.rotation.y += b.rotSpeed;
          }
        }

        // Smoothly update position
        b.mesh.position.x = basePos.x + cursorInfluenceX;
        b.mesh.position.y = basePos.y + levitationY + cursorInfluenceY;
        b.mesh.position.z = basePos.z + cursorInfluenceZ;
      });

      // 6. Particle Dust Swarm Dynamics with subtle cursor velocity swirl
      if (!isReducedMotion) {
        const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
        const posArray = posAttr.array as Float32Array;

        for (let p = 0; p < particleCount; p++) {
          const pIdx = p * 3;
          let px = posArray[pIdx];
          let py = posArray[pIdx + 1];
          let pz = posArray[pIdx + 2];

          const vel = particleVelocities[p];
          px += vel.x + mouseRef.current.vx * 0.08;
          py += vel.y + mouseRef.current.vy * 0.08;
          pz += vel.z;

          // Wrap boundaries
          if (px > 24) px = -24;
          if (px < -24) px = 24;
          if (py > 15) py = -15;
          if (py < -15) py = 15;
          if (pz > -4) pz = -30;
          if (pz < -30) pz = -4;

          posArray[pIdx] = px;
          posArray[pIdx + 1] = py;
          posArray[pIdx + 2] = pz;
        }
        posAttr.needsUpdate = true;
      }

      // Grid subtle breathing
      gridHelperFloor.position.z = -16 + Math.sin(elapsedTime * 0.3) * 0.6;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isReducedMotion]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}

export default CinematicJourneyCanvas;
