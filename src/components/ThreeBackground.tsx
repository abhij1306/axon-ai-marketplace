import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

const ThreeBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // --- SIMPLE PARTICLE SYSTEM (Reverted) ---
        // Clean, simple floating particles. No lines. No logo.
        const particlesCount = 300;
        const particlesGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            // Spread them out more, random positions
            positions[i] = (Math.random() - 0.5) * 50;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.15,
            color: theme === 'light' ? 0x3b82f6 : 0xec4899, // Blue in Light, Pink in Dark
            transparent: true,
            opacity: 0.4,
            sizeAttenuation: true
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // --- INTERACTION ---
        let mouseX = 0;
        let mouseY = 0;
        const handleMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX / window.innerWidth) - 0.5;
            mouseY = (event.clientY / window.innerHeight) - 0.5;
        };
        document.addEventListener('mousemove', handleMouseMove);

        camera.position.z = 20;

        let frameId: number;
        const animate = () => {
            frameId = requestAnimationFrame(animate);

            // Gentle Rotation of the entire field
            particlesMesh.rotation.y += 0.0005;
            particlesMesh.rotation.x += 0.0002;

            // Subtle Parallax
            camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
            camera.position.y += (-mouseY * 2 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };
        animate();

        // Resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            if (frameId) cancelAnimationFrame(frameId);
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', handleMouseMove);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            particlesGeometry.dispose();
            particlesMaterial.dispose();
        };
    }, [theme]);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0, // Behind content
                pointerEvents: 'none',
                overflow: 'hidden'
            }}
        />
    );
};

export default ThreeBackground;
