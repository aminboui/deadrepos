import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Moon() {
  const moonRef = useRef();
  
  useFrame((state) => {
    if (moonRef.current) {
      moonRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 2;
    }
  });

  return (
    <group position={[15, 20, -30]}>
      <mesh ref={moonRef}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshBasicMaterial color="#fffdf3ff" />
      </mesh>
      <pointLight position={[0, 0, 0]} intensity={1} color="#fffdf3ff" distance={20} />
    </group>
  );
}
