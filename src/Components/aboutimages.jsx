import { Canvas, useLoader } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';



const parameters = {
    speed: 2, 
    rotationIntensity: 0.2,
    floatIntensity: 0.3,
}


const Polaroid = ({ image, caption, position, rotation }) => {
  const texture = useLoader(THREE.TextureLoader, image);

  return (
    <Float speed={parameters.speed} rotationIntensity={parameters.rotationIntensity} floatIntensity={parameters.floatIntensity}>
      <group position={position} rotation={rotation}>
        <mesh position={[0, 0, -0.01]}>
          <planeGeometry args={[2.4, 2.9]} />
          <meshBasicMaterial color="white" />
        </mesh>

        <mesh position={[0, 0.3, 0]}>
          <planeGeometry args={[1.8, 1.8]} />
          <meshBasicMaterial map={texture} />
        </mesh>

        <Text
          position={[0, -0.9, 0.01]}
          fontSize={0.2}
          color="#111"
          anchorX="center"
          anchorY="middle"
        >
          {caption}
        </Text>
      </group>
    </Float>
  );
};

// Main AboutImages scene
export default function AboutImages() {
  const dummyImagePath = 'https://ride.superstitionhd.com/hubfs/sportster%20s%20post-reveal%20facebook%20image%203.jpg';

  const images = [
    { image: dummyImagePath, caption: 'Motorcycles', rotation: [0, 0, 0.1] },
    { image: dummyImagePath, caption: 'Powerlifting', rotation: [0, 0, -0.05] },
    { image: dummyImagePath, caption: 'Anime Time', rotation: [0, 0, 0.08] },
  ];

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[0, 5, 5]} intensity={0.5} />
        {images.map((item, i) => (
          <Polaroid
            key={i}
            image={item.image}
            caption={item.caption}
            position={[i * 3 - 3, 0, 0]}
            rotation={item.rotation}
          />
        ))}
      </Canvas>
    </div>
  );
}
