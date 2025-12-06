// src/components/Hero.tsx
import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import '../styles/Hero.scss';

const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  const initThreeJs = useCallback(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha:true for transparent background

    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Add subtle ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light for better neumorphic shadow effect
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 1).normalize();
    scene.add(directionalLight);

    // Create a simple geometric shape (e.g., a dodecahedron)
    const geometry = new THREE.DodecahedronGeometry(1, 0);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x7289da, // Accent blue from variables
      roughness: 0.2,
      metalness: 0.5,
      clearcoat: 1,
      clearcoatRoughness: 0.1
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // OrbitControls for interactivity (optional, can be removed for static background)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;


    const animate = () => {
      requestAnimationFrame(animate);

      // Simple rotation for the mesh
      mesh.rotation.x += 0.002;
      mesh.rotation.y += 0.002;

      controls.update(); // Only required if controls.enableDamping or controls.autoRotate are set to true
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount.removeChild(renderer.domElement);
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  useEffect(() => {
    initThreeJs();
  }, [initThreeJs]);

  return (
    <section className="hero">
      <div className="hero-background" ref={mountRef} />
      <div className="hero-content">
        <h1>Axon AI</h1>
        <p className="tagline">Your Business, Amplified by AI.</p>
        <button className="cta-button">Explore Solutions</button>
      </div>
    </section>
  );
};

export default Hero;
