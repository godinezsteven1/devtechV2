import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useMemo } from 'react';



// might switch this to a normal timeline and not 3d 




const parameters = {
    color: 0x00ffff,
};


function TimeLineTube() {
  const { geometry, material } = useMemo(() => {
    const points = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(2, 2, -5),
    new THREE.Vector3(-2, 4, -10),
    new THREE.Vector3(3, 6, -15),
    new THREE.Vector3(0, 8, -20),
    new THREE.Vector3(-3, 10, -30),
    new THREE.Vector3(2, 12, -45),
    new THREE.Vector3(0, 14, -60),
    ];

    const curve = new THREE.CatmullRomCurve3(points);
    const geometry = new THREE.TubeGeometry(curve, 100, 0.2, 8, false);
    const material = new THREE.MeshBasicMaterial({ 
        color: parameters.color,
        side: THREE.DoubleSide, 
    });
    return { geometry, material };
  }, []);

  return <primitive object={new THREE.Mesh(geometry, material)} />;
}

export default function Timeline() {
  return (
    <section style={{ height: '100vh', backgroundColor: parameters.color }}>
      <Canvas camera={{ position: [0, 5, 25], fov: 60 }}>
        <ambientLight intensity={0.5} />
        {/* <OrbitControls /> */}
        <TimeLineTube />
      </Canvas>
    </section>
  );
}