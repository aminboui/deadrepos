import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

// Utility function to get weathered material properties
const getMaterialProps = (isHovered) => ({
  color: isHovered ? '#ff8c5a' : '#555555', 
  roughness: 0.85, 
  metalness: 0.1, 
  emissive: isHovered ? '#ff6b35' : '#000000',
  emissiveIntensity: isHovered ? 0.8 : 0, 
});

const baseStoneColor = '#4a4a4a'; 

export default function Grave({ position, repo, onClick, variant = 'cross', rotation }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [isDigging, setIsDigging] = useState(false);
  const [digProgress, setDigProgress] = useState(0);
  
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    if (isDigging) {
      // Digging animation - sink down
      if (digProgress < 1) {
        setDigProgress(prev => Math.min(prev + delta * 2, 1));
        meshRef.current.position.y = -digProgress * 0.5;
        meshRef.current.rotation.z = Math.sin(digProgress * Math.PI) * 0.1;
      }
    } else if (hovered) {
      meshRef.current.position.y = (Math.sin(state.clock.elapsedTime * 4) * 0.05) - 0.05; 
    } else {
      meshRef.current.position.y = 0;
      meshRef.current.rotation.z = 0;
    }
  });
  
  const handleClick = () => {
    setIsDigging(true);
    playDigSound();
    setTimeout(() => {
      onClick();
      setIsDigging(false);
      setDigProgress(0);
    }, 500);
  };
  
  const playDigSound = () => {
    const audio = new Audio('/sounds/Shovel.wav');
    audio.volume = 0.3; // Adjust volume as needed
    audio.play().catch(err => console.log('Audio play failed:', err));
  };

  const renderGraveShape = (isHovered) => {
    const materialProps = getMaterialProps(isHovered);
    const textBaseZ = 0.12; 

    if (variant === 'cross') {
      return (
        <group>
          {/* Vertical part */}
          <mesh position={[0, 0, 0]} castShadow>
            <boxGeometry args={[0.3, 1.5, 0.15]} /> 
            <meshStandardMaterial {...materialProps} />
          </mesh>
          
          {/* Horizontal part */}
          <mesh position={[0, 0.45, 0]} castShadow>
            <boxGeometry args={[0.9, 0.3, 0.15]} /> 
            <meshStandardMaterial {...materialProps} />
          </mesh>

          {/* Texts are positioned relative to the overall group */}
          <Text
            position={[0, 0.1, textBaseZ]}
            fontSize={0.12}
            color="#d0d0d0"
            anchorX="center"
            anchorY="middle"
            maxWidth={0.8}
            // --- FIX: REMOVED font="/fonts/serif.woff" ---
          >
            {repo.name.substring(0, 15)}
          </Text>
          
          <Text
            position={[0, -0.2, textBaseZ]}
            fontSize={0.08}
            color="#888"
            anchorX="center"
            anchorY="middle"
            // --- FIX: REMOVED font="/fonts/serif.woff" ---
          >
            REST IN PEACE
          </Text>
        </group>
      );
    } 
    
    if (variant === 'obelisk') {
      return (
        <group>
          {/* Base pedestal */}
          <mesh position={[0, -0.3, 0]} castShadow>
            <boxGeometry args={[0.8, 0.5, 0.3]} />
            <meshStandardMaterial {...materialProps} color={isHovered ? '#ff8c5a' : baseStoneColor} />
          </mesh>

          {/* Main tapering obelisk shaft */}
          <mesh position={[0, 0.8, 0]} castShadow>
            <cylinderGeometry args={[0.2, 0.5, 2.2, 4]} /> 
            <meshStandardMaterial {...materialProps} color={isHovered ? '#ff8c5a' : baseStoneColor} />
          </mesh>

          {/* Texts are small and high up */}
          <Text
            position={[0, 0.7, textBaseZ]}
            fontSize={0.08}
            color="#d0d0d0"
            anchorX="center"
            anchorY="middle"
            maxWidth={0.4}
            // --- FIX: REMOVED font="/fonts/serif.woff" ---
          >
            {repo.name.substring(0, 10)}
          </Text>
        </group>
      );
    }
    
    // Default/Simple Variant
    return (
      <group>
        {/* Main slab */}
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[1, 1.5, 0.2]} />
          <meshStandardMaterial {...materialProps} color={isHovered ? '#ff8c5a' : baseStoneColor} />
        </mesh>
        
        {/* Rounded top (Half Cylinder) */}
        <mesh position={[0, 0.75, 0]} castShadow>
          <cylinderGeometry args={[0.5, 0.5, 0.2, 16, 1, false, 0, Math.PI]} /> 
          <meshStandardMaterial {...materialProps} color={isHovered ? '#ff8c5a' : baseStoneColor} />
        </mesh>

        {/* Name Text */}
        <Text
          position={[0, 0.2, textBaseZ]}
          fontSize={0.15}
          color="#d0d0d0"
          anchorX="center"
          anchorY="middle"
          maxWidth={0.8}
          // --- FIX: REMOVED font="/fonts/serif.woff" ---
        >
          {repo.name.substring(0, 15)}
        </Text>
        
        {/* RIP Text */}
        <Text
          position={[0, -0.1, textBaseZ]}
          fontSize={0.1}
          color="#888"
          anchorX="center"
          anchorY="middle"
          // --- FIX: REMOVED font="/fonts/serif.woff" ---
        >
          GONE
        </Text>
      </group>
    );
  };

  return (
    <group position={position} rotation={rotation}>
      <group
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {renderGraveShape(hovered)}
        
        {/* Dust particles when digging */}
        {isDigging && (
          <group>
            {[...Array(8)].map((_, i) => (
              <mesh
                key={i}
                position={[
                  Math.cos(i * Math.PI / 4) * 0.5,
                  0.5 + digProgress * 0.5,
                  Math.sin(i * Math.PI / 4) * 0.5
                ]}
              >
                <sphereGeometry args={[0.05, 8, 8]} />
                <meshBasicMaterial color="#8b7355" transparent opacity={1 - digProgress} />
              </mesh>
            ))}
          </group>
        )}
      </group>
      
      {/* Base Foundation */}
      <mesh position={[0, -0.76, 0]} receiveShadow> 
        <boxGeometry args={[1.3, 0.1, 0.5]} />
        <meshStandardMaterial color="#2d3748" roughness={0.9} />
      </mesh>
      
      {/* Dirt Mound */}
      <mesh position={[0, -0.65, 0.4]} receiveShadow>
        <sphereGeometry args={[0.4, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#1f231f" roughness={1} metalness={0} /> 
      </mesh>
    </group>
  );
}