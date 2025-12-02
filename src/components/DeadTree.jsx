import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'; // Import THREE for potential use like creating a material

// Helper function to create a branch/limb mesh
// This makes the main component cleaner and allows for potential recursion later
const TreeBranch = ({ position, rotation, length, radiusTop, radiusBottom, color, detail }) => (
  <mesh position={position} rotation={rotation} castShadow>
    <cylinderGeometry args={[radiusTop, radiusBottom, length, detail]} />
    {/* Use a detailed material for better visual appeal, e.g., a custom texture material */}
    <meshStandardMaterial color={color} roughness={0.9} metalness={0.1} />
  </mesh>
);

export default function DeadTree({ position, wobbleIntensity = 0.05, branchColor = '#4d4d4d', twigColor = '#3a3a3a' }) {
  const treeRef = useRef();
  
  // Subtle wind wobble (rotation is applied to the entire group)
  useFrame((state) => {
    if (treeRef.current) {
      // Use a combination of sin waves for a slightly more complex, non-uniform sway
      const time = state.clock.elapsedTime * 1.5;
      treeRef.current.rotation.z = Math.sin(time + position[0]) * wobbleIntensity;
      treeRef.current.rotation.x = Math.cos(time * 0.8 + position[1]) * wobbleIntensity * 0.5;
    }
  });

  // Calculate the trunk's geometry arguments
  const trunkHeight = 3.5;
  const trunkRadiusTop = 0.1; // Thinner at the top
  const trunkRadiusBottom = 0.3; // Wider at the base
  const trunkDetail = 10; // Slightly more detail for a smoother appearance

  return (
    <group position={position} ref={treeRef}>
      {/* 1. Trunk (Taller, Tapered, slightly skewed/bent) */}
      <TreeBranch
        position={[0, trunkHeight / 2, 0]}
        // Apply a slight lean to the trunk for a more natural look
        rotation={[Math.PI / 100, 0, Math.PI / 80]}
        length={trunkHeight}
        radiusTop={trunkRadiusTop}
        radiusBottom={trunkRadiusBottom}
        color={branchColor}
        detail={trunkDetail}
      />
      
      {/* 2. Main branches (More variation in size, position, and rotation) */}
      
      {/* Branch 1: Large, low-hanging */}
      <group position={[0, trunkHeight * 0.6, 0]}>
        <TreeBranch
          position={[-0.4, 0, 0]} 
          rotation={[0, 0, -0.6]} 
          length={2.0} 
          radiusTop={0.05} 
          radiusBottom={0.1} 
          color={branchColor} 
          detail={6}
        />
      </group>

      {/* Branch 2: Higher, angled up */}
      <group position={[0, trunkHeight * 0.8, 0]}>
        <TreeBranch
          position={[0.3, 0.2, 0]} 
          rotation={[0.3, 0, 0.8]} 
          length={1.5} 
          radiusTop={0.04} 
          radiusBottom={0.08} 
          color={branchColor} 
          detail={6}
        />
      </group>

      {/* Branch 3: Back-facing, stubby */}
      <group position={[0, trunkHeight * 0.7, 0]}>
        <TreeBranch
          position={[0, 0, 0.4]} 
          rotation={[0.5, 0, 0]} 
          length={1.0} 
          radiusTop={0.03} 
          radiusBottom={0.06} 
          color={branchColor} 
          detail={6}
        />
      </group>
      
      {/* 3. Small, broken Twigs at the very top */}
      <group position={[0, trunkHeight, 0]}>
        <TreeBranch
          position={[-0.1, 0, 0]} 
          rotation={[0, 0, -1.2]} 
          length={0.4} 
          radiusTop={0.01} 
          radiusBottom={0.02} 
          color={twigColor} 
          detail={4}
        />
        <TreeBranch
          position={[0.1, 0, 0.1]} 
          rotation={[0.5, 0, 1.5]} 
          length={0.3} 
          radiusTop={0.01} 
          radiusBottom={0.02} 
          color={twigColor} 
          detail={4}
        />
      </group>
    </group>
  );
}