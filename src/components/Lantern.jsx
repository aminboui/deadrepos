import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Lantern({ position }) {
  const lightRef = useRef();
  
  useFrame((state) => {
    if (lightRef.current) {
      // Flickering effect
      const flicker = 0.8 + Math.sin(state.clock.elapsedTime * 8) * 0.1 + Math.random() * 0.1;
      lightRef.current.intensity = flicker * 2;
    }
  });

  return (
    <group position={position}>
      {/* Lantern post */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
        <meshStandardMaterial color="#3d3d3d" />
      </mesh>
      
      {/* Lantern cage */}
      <mesh position={[0, 2.2, 0]}>
        <boxGeometry args={[0.3, 0.4, 0.3]} />
        <meshStandardMaterial 
          color="#8b7355" 
          transparent 
          opacity={0.3}
          emissive="#ff8c00"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Light source */}
      <pointLight
        ref={lightRef}
        position={[0, 2.2, 0]}
        color="#ff8c00"
        intensity={2}
        distance={8}
        decay={2}
      />
    </group>
  );
}
