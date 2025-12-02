import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function FlyingBat({ startPosition, delay = 0 }) {
  const batRef = useRef();
  const timeRef = useRef(delay);

  useFrame((state, delta) => {
    if (!batRef.current) return;
    
    timeRef.current += delta;
    const t = timeRef.current;
    
    // Fly across the scene in a wavy pattern
    batRef.current.position.x = startPosition[0] + t * 3;
    batRef.current.position.y = startPosition[1] + Math.sin(t * 2) * 2;
    batRef.current.position.z = startPosition[2] + Math.cos(t * 1.5) * 3;
    
    // Wing flapping rotation
    batRef.current.rotation.z = Math.sin(t * 10) * 0.3;
    
    // Reset when out of bounds
    if (batRef.current.position.x > 30) {
      timeRef.current = 0;
      batRef.current.position.x = startPosition[0];
    }
  });

  return (
    <group ref={batRef}>
      {/* Bat body */}
      <mesh>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Left wing */}
      <mesh position={[-0.2, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
        <coneGeometry args={[0.2, 0.4, 3]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      
      {/* Right wing */}
      <mesh position={[0.2, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <coneGeometry args={[0.2, 0.4, 3]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
    </group>
  );
}
