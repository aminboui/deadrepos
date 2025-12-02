export default function Fence({ position, rotation = [0, 0, 0] }) {
  const posts = [];
  
  for (let i = 0; i < 5; i++) {
    posts.push(
      <group key={i} position={[i * 0.8, 0, 0]}>
        {/* Post */}
        <mesh position={[0, 0.6, 0]} castShadow>
          <boxGeometry args={[0.1, 1.2, 0.1]} />
          <meshStandardMaterial color="#3d3d3d" roughness={0.8} />
        </mesh>
        
        {/* Pointed top */}
        <mesh position={[0, 1.3, 0]} castShadow>
          <coneGeometry args={[0.08, 0.2, 4]} />
          <meshStandardMaterial color="#3d3d3d" roughness={0.8} />
        </mesh>
      </group>
    );
  }
  
  return (
    <group position={position} rotation={rotation}>
      {posts}
      
      {/* Horizontal bars */}
      <mesh position={[1.6, 0.4, 0]}>
        <boxGeometry args={[3.2, 0.05, 0.05]} />
        <meshStandardMaterial color="#3d3d3d" roughness={0.8} />
      </mesh>
      
      <mesh position={[1.6, 0.8, 0]}>
        <boxGeometry args={[3.2, 0.05, 0.05]} />
        <meshStandardMaterial color="#3d3d3d" roughness={0.8} />
      </mesh>
    </group>
  );
}
