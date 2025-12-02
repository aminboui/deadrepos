import React from 'react';

export default function Ground() {
  // Define colors matching the dark, cool, and weathered aesthetic
  const mainGroundColor = "#222a22"; // Deeper, more desaturated dark green-brown
  const pathColor = "#3c3a38";        // Darker, drier, dusty earth/gravel color
  const grassPatchColor = "#1a201a";   // Very dark, almost black-green for dense, damp areas
  const textureColor = "#252b25";    // Color for subtle texture variations (slightly lighter than main ground)

  return (
    <group>
      {/* Main cemetery ground - large area of unkempt, dark, slightly damp grass.
        Increased size and position slightly lowered for better visual depth.
      */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.51, 0]} receiveShadow>
        <planeGeometry args={[120, 120]} /> {/* Larger size to cover the whole scene */}
        {/* Maximum roughness for a non-reflective, rough earth/grass look */}
        <meshStandardMaterial color={mainGroundColor} roughness={1} metalness={0} />
      </mesh>
      
      {/* Main walking path system - made to look like worn dirt/gravel.
        Combined the entrance and main path into two large sections for better continuity.
      */}
      
      {/* Entrance and beginning of path */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 10]} receiveShadow>
        <planeGeometry args={[6, 12]} />
        {/* High roughness for dry dirt/gravel */}
        <meshStandardMaterial color={pathColor} roughness={0.98} metalness={0} />
      </mesh>

      {/* Main central path */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, -10]} receiveShadow>
        <planeGeometry args={[6, 28]} />
        <meshStandardMaterial color={pathColor} roughness={0.98} metalness={0} />
      </mesh>
      
      {/* --- Scatter subtle, low-opacity meshes to simulate uneven ground/texture variation --- */}
      
      {/* Grass patches (representing darker, unkempt burial plots/mounds). 
        Added more variety in size, position, and opacity.
      */}
      
      {/* Patch 1: Large, dense, dark area */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[8.5, -0.49, 3.5]} receiveShadow>
        <circleGeometry args={[2.5, 32]} />
        <meshStandardMaterial 
          color={grassPatchColor} 
          roughness={1} 
          transparent 
          opacity={0.9} 
        />
      </mesh>
      
      {/* Patch 2: Long, subtle discoloration (using a plane) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-10, -0.49, -12]} receiveShadow>
        <planeGeometry args={[5, 12]} />
        <meshStandardMaterial 
          color={textureColor} // Slightly different tone for contrast
          roughness={1} 
          transparent 
          opacity={0.4} 
        />
      </mesh>

      {/* Patch 3: Small, very dark mound near the path */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-3, -0.49, 0]} receiveShadow>
        <circleGeometry args={[1, 32]} />
        <meshStandardMaterial 
          color={grassPatchColor} 
          roughness={1} 
          transparent 
          opacity={0.95} 
        />
      </mesh>
      
      {/* Patch 4: Large, scattered area (lower opacity) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[12, -0.49, -8]} receiveShadow>
        <circleGeometry args={[4, 32]} />
        <meshStandardMaterial 
          color={textureColor} 
          roughness={1} 
          transparent 
          opacity={0.5} 
        />
      </mesh>
      
      {/* Patch 5: Edge detail */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-18, -0.49, 6]} receiveShadow>
        <circleGeometry args={[3, 32]} />
        <meshStandardMaterial 
          color={grassPatchColor} 
          roughness={1} 
          transparent 
          opacity={0.8} 
        />
      </mesh>
      
      {/* Patch 6: Corner detail */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[18, -0.49, 15]} receiveShadow>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial 
          color={grassPatchColor} 
          roughness={1} 
          transparent 
          opacity={0.65} 
        />
      </mesh>
      
    </group>
  );
}