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
  // Scene 02: Cloud Transformation
  { p: new THREE.Vector3(2.2, 1.0, 18), t: new THREE.Vector3(0.5, 0, -2) },
  // Scene 03: Application Engineering
  { p: new THREE.Vector3(-2.0, 0.6, 16), t: new THREE.Vector3(-0.4, 0, -3) },
  // Scene 04: DevOps & Automation
  { p: new THREE.Vector3(0, -1.0, 15), t: new THREE.Vector3(0, -0.4, -4) },
  // Scene 05: Security & Reliability
  { p: new THREE.Vector3(1.6, 1.4, 17), t: new THREE.Vector3(0.2, 0.2, -2) },
  // Scene 06: Aravanta CloudOS
  { p: new THREE.Vector3(0, 0.4, 19), t: new THREE.Vector3(0, 0, -1) },
  // Scene 07: Engineering Approach
  { p: new THREE.Vector3(-1.0, 1.2, 21), t: new THREE.Vector3(0, 0.1, 0) },
  // Scene 08: Conversion & Footer
  { p: new THREE.Vector3(0, 0, 25), t: new THREE.Vector3(0, 0, 0) },
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
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

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
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);

    // 3. Lighting: High-Tech Gold & Cyber Cyan
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.PointLight(0xd4a342, 2.4, 90);
    goldKeyLight.position.set(18, 16, 12);
    scene.add(goldKeyLight);

    const cyanRimLight = new THREE.PointLight(0x38bdf8, 1.8, 80);
    cyanRimLight.position.set(-18, -14, -6);
    scene.add(cyanRimLight);

    const cursorLight = new THREE.PointLight(0xfce8a6, 2.8, 50);
    cursorLight.position.set(0, 0, 10);
    scene.add(cursorLight);

    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // -------------------------------------------------------------
    // 4. ENTERPRISE ARCHITECTURAL CYBERNETIC GRID (Floor & Ceiling)
    // Professional perspective planes with clean grid lines
    // -------------------------------------------------------------
    const gridHelperFloor = new THREE.GridHelper(120, 60, 0xd4a342, 0x151b28);
    gridHelperFloor.position.set(0, -9.5, -16);
    worldGroup.add(gridHelperFloor);

    const gridHelperCeiling = new THREE.GridHelper(120, 60, 0x38bdf8, 0x111622);
    gridHelperCeiling.position.set(0, 14, -16);
    worldGroup.add(gridHelperCeiling);

    // -------------------------------------------------------------
    // 5. ISOMETRIC SERVER CUBES & DATA BLOCKS (Enterprise Geometry)
    // Replaces all astrological star constellations with clean server blocks!
    // -------------------------------------------------------------
    const serverBlocksGroup = new THREE.Group();
    worldGroup.add(serverBlocksGroup);

    const blockCount = 28;
    const blocks: {
      mesh: THREE.Mesh;
      wireframe: THREE.LineSegments;
      baseY: number;
      speed: number;
      rotSpeed: number;
    }[] = [];

    const blockGeo = new THREE.BoxGeometry(1.4, 1.4, 1.4);
    const blockMat = new THREE.MeshStandardMaterial({
      color: 0x0c101a,
      roughness: 0.2,
      metalness: 0.8,
      transparent: true,
      opacity: 0.7,
    });

    const edgeGeo = new THREE.EdgesGeometry(blockGeo);

    for (let i = 0; i < blockCount; i++) {
      const isGold = i % 3 === 0;
      const wireMat = new THREE.LineBasicMaterial({
        color: isGold ? 0xd4a342 : 0x38bdf8,
        transparent: true,
        opacity: isGold ? 0.6 : 0.4,
      });

      const mesh = new THREE.Mesh(blockGeo, blockMat);
      const wireframe = new THREE.LineSegments(edgeGeo, wireMat);
      mesh.add(wireframe);

      // Distribute in deep structured space behind content (z = -24 to -8)
      const posX = ((i % 7) - 3) * 4.5 + (Math.random() - 0.5) * 1.5;
      const posY = Math.floor(i / 7) * 3.5 - 6 + (Math.random() - 0.5) * 1.5;
      const posZ = -14 + (Math.random() - 0.5) * 8;

      mesh.position.set(posX, posY, posZ);
      serverBlocksGroup.add(mesh);

      blocks.push({
        mesh,
        wireframe,
        baseY: posY,
        speed: 0.0008 + Math.random() * 0.0012,
        rotSpeed: (Math.random() - 0.5) * 0.004,
      });
    }

    // -------------------------------------------------------------
    // 6. ORTHOGONAL DATA HIGHWAYS (Rectilinear 90° Server Bus Lines)
    // Pure computer architecture circuit traces, NOT astrological lines!
    // -------------------------------------------------------------
    const busLineCount = 14;
    const busLinesGroup = new THREE.Group();
    worldGroup.add(busLinesGroup);

    for (let i = 0; i < busLineCount; i++) {
      const points: THREE.Vector3[] = [];
      let currentX = (Math.random() - 0.5) * 30;
      let currentY = (Math.random() - 0.5) * 16;
      let currentZ = -18 + (Math.random() - 0.5) * 8;

      points.push(new THREE.Vector3(currentX, currentY, currentZ));

      // 4 orthogonal 90-degree steps
      for (let s = 0; s < 4; s++) {
        const axis = s % 2 === 0 ? "x" : "y";
        if (axis === "x") {
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
        opacity: 0.35,
      });

      const line = new THREE.Line(busGeo, busMat);
      busLinesGroup.add(line);
    }

    // -------------------------------------------------------------
    // 7. CENTRAL ARCHITECTURAL KERNEL (CloudOS Geometric Core)
    // Layered floating platform with subtle concentric telemetry rings
    // -------------------------------------------------------------
    const coreGroup = new THREE.Group();
    coreGroup.position.set(0, 0, -15);
    worldGroup.add(coreGroup);

    // Octahedron Core with Precision Edges
    const octaGeo = new THREE.OctahedronGeometry(2.4, 0);
    const octaMat = new THREE.MeshStandardMaterial({
      color: 0x0e1320,
      roughness: 0.3,
      metalness: 0.9,
      transparent: true,
      opacity: 0.75,
    });
    const octaMesh = new THREE.Mesh(octaGeo, octaMat);
    const octaWire = new THREE.LineSegments(
      new THREE.EdgesGeometry(octaGeo),
      new THREE.LineBasicMaterial({ color: 0xd4a342, transparent: true, opacity: 0.7 })
    );
    octaMesh.add(octaWire);
    coreGroup.add(octaMesh);

    // Concentric Telemetry Rings (Hardware Bus)
    const ring1 = new THREE.Mesh(
      new THREE.RingGeometry(4.2, 4.25, 48),
      new THREE.MeshBasicMaterial({ color: 0xd4a342, side: THREE.DoubleSide, transparent: true, opacity: 0.4 })
    );
    ring1.rotation.x = Math.PI / 2.3;
    coreGroup.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.RingGeometry(6.4, 6.44, 56),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide, transparent: true, opacity: 0.3 })
    );
    ring2.rotation.y = Math.PI / 2.6;
    coreGroup.add(ring2);

    // Mouse Tracking Event
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Window Resize Event
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // Animation Render Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const rawProgress = progressRef.current;

      // Exponential smoothing for buttery scroll transitions
      smoothedProgressRef.current += (rawProgress - smoothedProgressRef.current) * 0.08;
      const progress = smoothedProgressRef.current;

      // Mouse Lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Camera Waypoint Interpolation based on smoothed scroll
      const waypoints = CAM_WAYPOINTS;
      const totalSegments = waypoints.length - 1;
      const exactSegment = progress * totalSegments;
      const segIndex = Math.min(Math.floor(exactSegment), totalSegments - 1);
      const segT = exactSegment - segIndex;

      const pA = waypoints[segIndex].p;
      const pB = waypoints[segIndex + 1].p;
      const tA = waypoints[segIndex].t;
      const tB = waypoints[segIndex + 1].t;

      const targetCamPos = new THREE.Vector3().lerpVectors(pA, pB, segT);
      const targetLookAt = new THREE.Vector3().lerpVectors(tA, tB, segT);

      // Subtle mouse parallax
      if (!isReducedMotion) {
        targetCamPos.x += mouseRef.current.x * 0.8;
        targetCamPos.y += mouseRef.current.y * 0.6;
      }

      // Smooth camera position and lookAt damping
      camera.position.lerp(targetCamPos, 0.07);
      smoothedLookAtRef.current.lerp(targetLookAt, 0.07);
      camera.lookAt(smoothedLookAtRef.current);

      // Cursor Light follow
      cursorLight.position.x = mouseRef.current.x * 12;
      cursorLight.position.y = mouseRef.current.y * 8;

      // Subtle rotation of server blocks & telemetry core
      if (!isReducedMotion) {
        octaMesh.rotation.y = elapsedTime * 0.12;
        octaMesh.rotation.x = elapsedTime * 0.08;
        ring1.rotation.z = elapsedTime * 0.06;
        ring2.rotation.z = -elapsedTime * 0.05;

        blocks.forEach((b, idx) => {
          b.mesh.position.y = b.baseY + Math.sin(elapsedTime * 0.8 + idx) * 0.35;
          b.mesh.rotation.y += b.rotSpeed;
          b.mesh.rotation.x += b.rotSpeed * 0.7;
        });

        // Floor and ceiling grid subtle pulse
        gridHelperFloor.position.z = -16 + (Math.sin(elapsedTime * 0.2) * 0.5);
      }

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
