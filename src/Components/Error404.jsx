import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Error404() {
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const tvGroupRef = useRef(null);
    const staticMaterialRef = useRef(null);
    const antennaLeftRef = useRef(null);
    const antennaRightRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;


        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a1a1a); // Dark gray background
        sceneRef.current = scene;

        // camera setup
        const camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.set(0, 0, 15);

        // renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        mountRef.current.appendChild(renderer.domElement);

        // lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 10, 5);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        // TV Group
        const tvGroup = new THREE.Group();
        tvGroupRef.current = tvGroup;
        scene.add(tvGroup);

        // TV Body
        const tvGeometry = new THREE.BoxGeometry(6, 4.5, 2);
        const tvMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x2d1b69, // purple
            specular: 0x4a4a4a,
            shininess: 20
        });
        const tvBody = new THREE.Mesh(tvGeometry, tvMaterial);
        tvBody.castShadow = true;
        tvBody.receiveShadow = true;
        tvGroup.add(tvBody);

        // TV screen
        const screenGeometry = new THREE.PlaneGeometry(4.5, 3);
        const staticCanvas = document.createElement('canvas');
        staticCanvas.width = 256;
        staticCanvas.height = 256;
        const staticTexture = new THREE.CanvasTexture(staticCanvas);
        
        const screenMaterial = new THREE.MeshBasicMaterial({ 
            map: staticTexture,
            emissive: 0x222222,
            emissiveIntensity: 0.2
        });
        staticMaterialRef.current = { canvas: staticCanvas, texture: staticTexture };
        
        const screen = new THREE.Mesh(screenGeometry, screenMaterial);
        screen.position.z = 1.01;
        tvGroup.add(screen);

        // screen frame
        const frameGeometry = new THREE.BoxGeometry(5, 3.5, 0.1);
        const frameMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
        const frame = new THREE.Mesh(frameGeometry, frameMaterial);
        frame.position.z = 1.05;
        tvGroup.add(frame);

        // pannel 
        const panelGeometry = new THREE.BoxGeometry(1, 3, 0.1);
        const panelMaterial = new THREE.MeshPhongMaterial({ color: 0x1f1f1f }); // Dark gray panel
        const panel = new THREE.Mesh(panelGeometry, panelMaterial);
        panel.position.set(3.2, 0, 1);
        tvGroup.add(panel);

        // knobs
        const knobGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.2, 16);
        const knobMaterial = new THREE.MeshPhongMaterial({ color: 0x2a2a2a });
        
        const knob1 = new THREE.Mesh(knobGeometry, knobMaterial);
        knob1.rotation.z = Math.PI / 2;
        knob1.position.set(3.2, 0.8, 1.2);
        tvGroup.add(knob1);

        const knob2 = new THREE.Mesh(knobGeometry, knobMaterial);
        knob2.rotation.z = Math.PI / 2;
        knob2.position.set(3.2, 0, 1.2);
        tvGroup.add(knob2);

        // speaker holes
        for (let i = 0; i < 3; i++) {
            const holeGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.3, 8);
            const holeMaterial = new THREE.MeshPhongMaterial({ color: 0x1a1a1a });
            const hole = new THREE.Mesh(holeGeometry, holeMaterial);
            hole.rotation.z = Math.PI / 2;
            hole.position.set(3.2, -0.8 + i * 0.3, 1.1);
            tvGroup.add(hole);
        }

        // legs
        const legGeometry = new THREE.CylinderGeometry(0.15, 0.15, 1.5, 8);
        const legMaterial = new THREE.MeshPhongMaterial({ color: 0x4a4a4a });
        
        const leg1 = new THREE.Mesh(legGeometry, legMaterial);
        leg1.position.set(-2, -3, 0);
        tvGroup.add(leg1);

        const leg2 = new THREE.Mesh(legGeometry, legMaterial);
        leg2.position.set(2, -3, 0);
        tvGroup.add(leg2);

        // antenna
        const antennaGeometry = new THREE.CylinderGeometry(0.05, 0.05, 4, 8);
        const antennaMaterial = new THREE.MeshPhongMaterial({ color: 0x3a3a3a });
        
        const antennaLeft = new THREE.Mesh(antennaGeometry, antennaMaterial);
        antennaLeft.position.set(-1, 3.5, 0);
        antennaLeft.rotation.z = -Math.PI / 6;
        antennaLeftRef.current = antennaLeft;
        tvGroup.add(antennaLeft);

        const antennaRight = new THREE.Mesh(antennaGeometry, antennaMaterial);
        antennaRight.position.set(1, 3.5, 0);
        antennaRight.rotation.z = Math.PI / 6;
        antennaRightRef.current = antennaRight;
        tvGroup.add(antennaRight);

        // antenna balls
        const ballGeometry = new THREE.SphereGeometry(0.15, 16, 16);
        const ballMaterial = new THREE.MeshPhongMaterial({ color: 0x2a2a2a });
        
        const ball1 = new THREE.Mesh(ballGeometry, ballMaterial);
        ball1.position.set(-1.8, 5.2, 0);
        tvGroup.add(ball1);

        const ball2 = new THREE.Mesh(ballGeometry, ballMaterial);
        ball2.position.set(1.8, 5.2, 0);
        tvGroup.add(ball2);

        // text on screen
        const textCanvas = document.createElement('canvas');
        textCanvas.width = 512;
        textCanvas.height = 256;
        const textCtx = textCanvas.getContext('2d');
        
        const textTexture = new THREE.CanvasTexture(textCanvas);
        const textMaterial = new THREE.MeshBasicMaterial({ 
            map: textTexture,
            transparent: true
        });
        
        const textGeometry = new THREE.PlaneGeometry(2, 0.5);
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.z = 1.02;
        tvGroup.add(textMesh);


        let time = 0;
        
        function animate() {
            requestAnimationFrame(animate);
            time += 0.01;

            // TV floating animation
            tvGroup.rotation.y = Math.sin(time * 0.5) * 0.2;
            tvGroup.rotation.x = Math.sin(time * 0.7) * 0.1;
            tvGroup.position.y = Math.sin(time * 0.8) * 0.5;
            tvGroup.position.x = Math.sin(time * 0.6) * 0.3;

            // antenna twerk
            if (antennaLeftRef.current && antennaRightRef.current) {
                antennaLeftRef.current.rotation.z = -Math.PI / 6 + Math.sin(time * 3) * 0.1;
                antennaRightRef.current.rotation.z = Math.PI / 6 + Math.sin(time * 3 + Math.PI) * 0.1;
            }


            if (Math.random() > 0.7) {
                updateStatic();
            }

            renderer.render(scene, camera);
        }

        animate();


        function handleResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current?.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
            <div style={{
                position: 'absolute',
                bottom: '80px',
                left: '50%',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                color: '#5a5a5a',
                fontFamily: 'Arial, sans-serif',
                zIndex: 10
            }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#9333ea' }}>404</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#a0a0a0' }}>
                    Oops! This channel doesn't exist. (sneaky sneaky)
                </p>
                <a href="/" style={{
                    display: 'inline-block',
                    padding: '12px 30px',
                    backgroundColor: '#7c3aed',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '25px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)',
                    ':hover': {
                        backgroundColor: '#6d28d9',
                        transform: 'translateY(-2px)'
                    }
                }}>
                    Back to Home
                </a>
            </div>
        </div>
    );
}