import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const MandapamScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x0f0f0f);

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.set(0, 2, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xd4af37, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 10, 10);
    scene.add(directionalLight);

    // Create mandapam structure
    const mandapamGroup = new THREE.Group();

    // Base platform
    const baseGeometry = new THREE.BoxGeometry(6, 0.5, 6);
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      metalness: 0.3,
      roughness: 0.7,
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -0.5;
    mandapamGroup.add(base);

    // Pillars (4 corners)
    const pillarGeometry = new THREE.CylinderGeometry(0.3, 0.4, 4, 32);
    const pillarMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.7,
      roughness: 0.3,
    });

    const pillarPositions = [
      [-2.5, 0, -2.5],
      [2.5, 0, -2.5],
      [-2.5, 0, 2.5],
      [2.5, 0, 2.5],
    ];

    pillarPositions.forEach((pos) => {
      const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
      pillar.position.set(...(pos as [number, number, number]));
      mandapamGroup.add(pillar);
    });

    // Top roof piece
    const roofGeometry = new THREE.BoxGeometry(3.5, 0.3, 3.5);
    const roofMaterial = new THREE.MeshStandardMaterial({
      color: 0xb87333,
      metalness: 0.5,
      roughness: 0.5,
    });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 2;
    mandapamGroup.add(roof);

    // Decorative rings/halos
    const ringGeometry = new THREE.TorusGeometry(2, 0.1, 16, 100);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.8,
      roughness: 0.2,
    });

    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.y = 1 + i * 0.5;
      ring.rotation.x = Math.PI / 4;
      mandapamGroup.add(ring);
    }

    scene.add(mandapamGroup);

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Gentle rotation
      mandapamGroup.rotation.y += 0.003;

      // Subtle vertical animation
      mandapamGroup.position.y = Math.sin(Date.now() * 0.0005) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      containerRef.current?.removeChild(renderer.domElement);
      baseGeometry.dispose();
      baseMaterial.dispose();
      pillarGeometry.dispose();
      pillarMaterial.dispose();
      roofGeometry.dispose();
      roofMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};
