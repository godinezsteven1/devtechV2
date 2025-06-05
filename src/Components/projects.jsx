import { useRef, useEffect } from "react";
import * as THREE from "three";
import imageGradient from "../static/textures/5Gradient.jpeg"; // Adjust the path as needed

export default function Projects() {

    const canvas = useRef(); 
    const texturePathTest = '../static/textures/5Gradient.jpeg'; // Update this path as needed
    console.log("Texture Path:", texturePathTest); // Log the texture path to verify




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
    const objectDistance = 4; // has to be 1 more then proj 

    mesh1.position.set(2, 0, 0);
    mesh2.position.set(-2, -objectDistance, 0);
    mesh3.position.set(2, -objectDistance * 2, 0); // DOUBLE THE DISTANCE PER NEW SHAPE PLEASE 


    scene.add(mesh1, mesh2, mesh3);
    const sectionMeshes = [mesh1, mesh2, mesh3];

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
      renderer.dispose();
    };
  }, []);


  return (
    <div className="w-full h-screen">
      <canvas ref={canvas} className="webgl w-full h-full block" />
    </div>
  );
}