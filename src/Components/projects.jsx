import { useRef, useEffect } from "react";
import * as THREE from "three";
import imageGradient from "/static/textures/5Gradient.jpeg"; // Adjust the path as needed
import { Link } from 'react-router-dom';

export default function Projects() {

    const canvas = useRef(); 

    useEffect(() => {
    const parameters = {
        color: "#91092e",
    };

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    }

    const scene = new THREE.Scene();

    const textureLoader = new THREE.TextureLoader();
    const gradientTexture = textureLoader.load(imageGradient); 
    gradientTexture.magFilter = THREE.NearestFilter;

    const material = new THREE.MeshToonMaterial({
        color: parameters.color,
        gradientMap: gradientTexture,
        });

    const mesh1 = new THREE.Mesh(new THREE.IcosahedronGeometry(1), material);
    const mesh2 = new THREE.Mesh(new THREE.OctahedronGeometry(1), material);
    const mesh3 = new THREE.Mesh(new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16), material);
    const mesh4 = new THREE.Mesh(new THREE.TorusGeometry(0.9), material);
    const mesh5 = new THREE.Mesh(new THREE.TetrahedronGeometry(1), material);
    const mesh6 = new THREE.Mesh(new THREE.BoxGeometry(1), material);

    const objectDistance = 4; // has to be 1 more then proj 

    const perfectDistance = 1.5; 
    mesh1.position.set(perfectDistance, 0, 0); 
    mesh2.position.set(-perfectDistance, -objectDistance, 0);
    mesh3.position.set(perfectDistance, -objectDistance * 2, 0); // DOUBLE THE DISTANCE PER NEW SHAPE PLEASE 
    mesh4.position.set(-perfectDistance, -objectDistance * 3, 0); 
    mesh5.position.set(perfectDistance, -objectDistance * 4, 0); 
    mesh6.position.set(-perfectDistance, -objectDistance * 5, 0);


    scene.add(mesh1, mesh2, mesh3, mesh4, mesh5, mesh6);
    const sectionMeshes = [mesh1, mesh2, mesh3, mesh4, mesh5, mesh6];



    //Particles 
    const particlesCount = 200;
    const positions = new Float32Array(particlesCount * 3); // 3 values per particle (x, y, z)
    
    for (let i = 0; i < particlesCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10; // x
        positions[i * 3 + 1] = objectDistance * 0.5 - Math.random() * objectDistance * sectionMeshes.length; // y
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
    }
    
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        color: parameters.color,
        sizeAttenuation: true,
        size: 0.05,
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);


    // Light
    const directionalLight = new THREE.DirectionalLight("#ffffff", 4);
    directionalLight.position.set(1, 1, 0);
    scene.add(directionalLight);

    // Camera
    const cameraGroup = new THREE.Group();
    scene.add(cameraGroup);
    const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 6;
    cameraGroup.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas.current,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));





    // Scroll
    let scrollY = window.scrollY;
    let currentSection = 0;

    const handleScroll = () => {
      scrollY = window.scrollY;
      const newSection = Math.round(scrollY / sizes.height);

      if (newSection !== currentSection) {
        currentSection = newSection;
        
        // Animate section mesh rotation
        if (sectionMeshes[currentSection]) {
          const mesh = sectionMeshes[currentSection];
          const startRotation = {
            x: mesh.rotation.x,
            y: mesh.rotation.y,
            z: mesh.rotation.z
          };
          const targetRotation = {
            x: startRotation.x + 6,
            y: startRotation.y + 3,
            z: startRotation.z + 1.5
          };
          
          const startTime = Date.now();
          const duration = 1500;
          
          const animateRotation = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Power2.inOut easing
            const easeProgress = progress < 0.5
              ? 2 * progress * progress
              : -1 + (4 - 2 * progress) * progress;
            
            mesh.rotation.x = startRotation.x + (targetRotation.x - startRotation.x) * easeProgress;
            mesh.rotation.y = startRotation.y + (targetRotation.y - startRotation.y) * easeProgress;
            mesh.rotation.z = startRotation.z + (targetRotation.z - startRotation.z) * easeProgress;
            
            if (progress < 1) {
              requestAnimationFrame(animateRotation);
            }
          };
          
          animateRotation();
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cursor
    const cursor = { x: 0, y: 0 };
    
    const handleMouseMove = (event) => {
      cursor.x = event.clientX / sizes.width - 0.5;
      cursor.y = -(event.clientY / sizes.height - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);



    // Handle resize
    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

     // Animation
    const clock = new THREE.Clock();
    let previousTime = 0;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - previousTime;
      previousTime = elapsedTime;

      camera.position.y = -scrollY / sizes.height * objectDistance;

      const parallaxX = cursor.x;
      const parallaxY = -cursor.y;
      cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 2 * deltaTime;
      cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 2 * deltaTime;

      // Rotate all meshes
      for (const mesh of sectionMeshes) {
        mesh.rotation.x += 0.1 * deltaTime;
        mesh.rotation.y += 0.12 * deltaTime;
      }

    renderer.render(scene, camera);
    requestAnimationFrame(tick);





    };
    tick();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
    };
  }, []);

  return (

    <>
      <style jsx>{`
        body {
          margin: 0;
          padding: 0;
        }
        .section-text {
          position: relative;
          z-index: 10;
          font-family: 'Courier New', monospace;
        }
      `}</style>
      
      <div className="relative min-h-[400vh]" >
        <canvas ref={canvas} className="webgl fixed top-0 left-0 w-full h-full" />
        
        <section className="h-screen flex items-center justify-start pl-20">
          <h2 className="section-text text-4xl font-bold">
            <Link
            to="/projects/signlang"
            className="text-white hover:text-pink-300 transition-colors">
             AI Sign Language
            </Link>
          </h2>
        </section>
        
        <section className="h-screen flex items-center justify-end pr-20">
          <h2 className="section-text text-4xl font-bold">
            <Link
            to="/projects/TumorNet"
            className="text-white hover:text-pink-300 transition-colors">
             Tumor net CNN
            </Link>
          </h2>
        </section>
        
        <section className="h-screen flex items-center justify-start pl-20">
          <h2 className="section-text text-4xl font-bold">
            <Link
            to="/projects/GraduateAI"
            className="text-white hover:text-pink-300 transition-colors">
             Graduate projects
            </Link>
          </h2>
        </section>
        
        <section className="h-screen flex items-center justify-end pr-20">
          <h2 className="section-text text-4xl font-bold">
            <Link
            to="/projects/Keylogger"
            className="text-white hover:text-pink-300 transition-colors">
             Malware Keylogger
            </Link>
          </h2>
        </section>

        <section className="h-screen flex items-center justify-start pl-20">
          <h2 className="section-text text-4xl font-bold">
            <Link
            to="/projects/Ransom"
            className="text-white hover:text-pink-300 transition-colors">
             Malware Ransom
            </Link>
          </h2>
        </section>

        <section className="h-screen flex items-center justify-end pr-20">
          <h2 className="section-text text-4xl font-bold">
            <Link
            to="/projects/oldPortfolio"
            className="text-white hover:text-pink-300 transition-colors">
              ThreeJs Portfolio
            </Link>
          </h2>
        </section>
      </div>
    </>
  );
}