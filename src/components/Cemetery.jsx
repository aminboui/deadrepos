import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import Grave from './Grave';
import Ground from './Ground';
import Moon from './Moon';
import DeadTree from './DeadTree';
import Fence from './Fence';
import Particles from './Particles';
import FirstPersonControls from './FirstPersonControls';
import FlyingBat from './FlyingBat';
import Lantern from './Lantern';

export default function Cemetery({ repos, onGraveClick, firstPersonMode = false, onWalkingChange }) {
  // Enhanced Atmospheric Settings
  const darkNightColor = '#0d1117'; // Very dark, slightly blue/black for deep night
  const thickFogColor = '#181c25'; // Denser, low-visibility fog color

  return (
    <Canvas
      camera={{ position: firstPersonMode ? [0, 1.6, 20] : [0, 8, 25], fov: 75 }}
      shadows
    >
      <color attach="background" args={[darkNightColor]} />
      {/* Thicker, darker fog for increased atmosphere */}
      <fog attach="fog" args={[thickFogColor, 15, 60]} /> 
      
      {/* Enhanced Lighting: Cooler and Spookier */}
      
      {/* General moonlight ambient fill */}
      <ambientLight intensity={0.2} color="#6a7588" /> 
      
      {/* Primary directional moonlight - more intense and colder */}
      <directionalLight
        position={[15, 25, -30]} // Slightly higher for better coverage
        intensity={1.5} // Increased intensity
        castShadow
        color="#c0c0e0" // Cooler, starker moonlight color
        shadow-mapSize={[2048, 2048]} // Increased shadow map size for sharper shadows
        shadow-bias={-0.0005} // Subtle bias to fight shadow acne
      />
      
      {/* Faint, eerie secondary light for warmth/contrast (e.g., distant lantern or low-glow) */}
      <pointLight position={[0, 4, 0]} intensity={0.5} color="#ffaa55" distance={50} decay={2} />
      
      {/* Hemisphere light is fine, but slightly reduced intensity to favor directional light */}
      <hemisphereLight intensity={0.3} color="#4a525f" groundColor="#0d1117" />
      
      {/* Sky elements */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0.1} fade speed={0.5} />
      <Moon />
      
      {/* Atmospheric particles */}
      {/* Increased particle count and slightly lower speed for a denser, slow-moving mist/dust */}
      <Particles count={300} speed={0.05} /> 
      
      <Ground />
      
      {/* Graves arranged in blocks with pathways */}
      {repos.map((repo, index) => {
        const gravesPerBlock = 4; // 2x2 blocks
        const blocksPerRow = 3;
        
        const blockIndex = Math.floor(index / gravesPerBlock);
        const graveInBlock = index % gravesPerBlock;
        
        const blockRow = Math.floor(blockIndex / blocksPerRow);
        const blockCol = blockIndex % blocksPerRow;
        
        const localRow = Math.floor(graveInBlock / 2);
        const localCol = graveInBlock % 2;
        
        const graveSpacing = 2.5; 
        const pathWidth = 4; 
        
        // Calculate base position
        const x = (blockCol * (2 * graveSpacing + pathWidth)) + (localCol * graveSpacing) - 10;
        const z = (blockRow * (2 * graveSpacing + pathWidth)) + (localRow * graveSpacing) - 5;
        
        // --- Added Grave Variety and Randomness ---
        
        // 1. Random Grave Variant: Mix up the style
        const variants = ['cross'];
        const variant = variants[index % variants.length];
        
        // 2. Random Rotation (subtle): Makes them look less perfectly aligned
        const randomRotation = Math.random() * 0.2 - 0.1; // -0.1 to +0.1 radians (approx +/- 5.7 degrees)
        
        // 3. Subtle Random Position Offset: Makes placement less grid-like
        const randomXOffset = Math.random() * 0.4 - 0.2;
        const randomZOffset = Math.random() * 0.4 - 0.2;
        
        return (
          <Grave
            key={repo.id}
            position={[x + randomXOffset, 0, z + randomZOffset]}
            rotation={[0, randomRotation, 0]} // Apply random rotation
            repo={repo}
            onClick={() => onGraveClick(repo)}
            variant={variant} // Use varied variant
          />
        );
      })}
      
      {/* Cemetery perimeter - Trees (Pushed further out to avoid graves) */}
      <group rotation={[0, 0.1, 0]}> 
        {/* Back row */}
        <DeadTree position={[-21, 0, -18]} />
        <DeadTree position={[-14, 0, -17.5]} />
        <DeadTree position={[-7, 0, -18]} />
        <DeadTree position={[0, 0, -18]} />
        <DeadTree position={[7, 0, -18]} />
        <DeadTree position={[14, 0, -17.5]} />
        <DeadTree position={[21, 0, -18]} />
      </group>

      <group rotation={[0, -0.05, 0]}>
        {/* Left side */}
        <DeadTree position={[-25, 0, -10]} />
        <DeadTree position={[-24.5, 0, -3]} />
        <DeadTree position={[-25, 0, 4]} />
        <DeadTree position={[-24.5, 0, 11]} />
        <DeadTree position={[-25, 0, 18]} />
      </group>

      <group rotation={[0, 0.08, 0]}>
        {/* Right side */}
        <DeadTree position={[25, 0, -10]} />
        <DeadTree position={[24.5, 0, -3]} />
        <DeadTree position={[25, 0, 4]} />
        <DeadTree position={[24.5, 0, 11]} />
        <DeadTree position={[25, 0, 18]} />
      </group>

      <group rotation={[0, 0.15, 0]}>
        {/* Front corners (entrance is in the middle) */}
        <DeadTree position={[-21, 0, 24]} />
        <DeadTree position={[-14, 0, 23.5]} />
        <DeadTree position={[14, 0, 23.5]} />
        <DeadTree position={[21, 0, 24]} />
      </group>
      
      {/* Cemetery perimeter - Fence (Pushed further out) */}
      <group position={[0, -0.05, 0]}>
        {/* Back fence */}
        <Fence position={[-18, 0, -20]} rotation={[0, 0, 0]} />
        <Fence position={[-14, 0, -20]} rotation={[0, 0, 0]} />
        <Fence position={[-10, 0, -20]} rotation={[0, 0, 0]} />
        <Fence position={[-6, 0, -20]} rotation={[0, 0, 0]} />
        <Fence position={[-2, 0, -20]} rotation={[0, 0, 0]} />
        <Fence position={[2, 0, -20]} rotation={[0, 0, 0]} />
        <Fence position={[6, 0, -20]} rotation={[0, 0, 0]} />
        <Fence position={[10, 0, -20]} rotation={[0, 0, 0]} />
        <Fence position={[14, 0, -20]} rotation={[0, 0, 0]} />
        <Fence position={[18, 0, -20]} rotation={[0, 0, 0]} />
        
        {/* Left fence */}
        <Fence position={[-27, 0, -16]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[-27, 0, -12]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[-27, 0, -8]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[-27, 0, -4]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[-27, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[-27, 0, 4]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[-27, 0, 8]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[-27, 0, 12]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[-27, 0, 16]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[-27, 0, 20]} rotation={[0, Math.PI / 2, 0]} />
        
        {/* Right fence */}
        <Fence position={[27, 0, -16]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[27, 0, -12]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[27, 0, -8]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[27, 0, -4]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[27, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[27, 0, 4]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[27, 0, 8]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[27, 0, 12]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[27, 0, 16]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[27, 0, 20]} rotation={[0, Math.PI / 2, 0]} />
        
        {/* Front fence (with entrance gap in middle) */}
        <Fence position={[-18, 0, 22]} rotation={[0, 0, 0]} />
        <Fence position={[-14, 0, 22]} rotation={[0, 0, 0]} />
        <Fence position={[-10, 0, 22]} rotation={[0, 0, 0]} />
        <Fence position={[-6, 0, 22]} rotation={[0, 0, 0]} />
        {/* Gap for entrance */}
        <Fence position={[6, 0, 22]} rotation={[0, 0, 0]} />
        <Fence position={[10, 0, 22]} rotation={[0, 0, 0]} />
        <Fence position={[14, 0, 22]} rotation={[0, 0, 0]} />
        <Fence position={[18, 0, 22]} rotation={[0, 0, 0]} />
      </group>
      
      {/* Flying bats */}
      <FlyingBat startPosition={[-25, 8, -10]} delay={0} />
      <FlyingBat startPosition={[-25, 10, 5]} delay={3} />
      <FlyingBat startPosition={[-25, 9, 15]} delay={6} />
      
      {/* Lanterns near entrance */}
      <Lantern position={[-4, 0, 20]} />
      <Lantern position={[4, 0, 20]} />
      
      {repos.length > 0 && (
        firstPersonMode ? (
          <FirstPersonControls autoLock={true} onWalkingChange={onWalkingChange} />
        ) : (
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={5}
            maxDistance={35}
            maxPolarAngle={Math.PI / 2.2}
          />
        )
      )}
      
      {/* Post-processing effects */}
      <EffectComposer>
        {/* Reduced Bloom intensity for less glare, but keeping the subtle glow */}
        <Bloom luminanceThreshold={0.4} luminanceSmoothing={0.9} intensity={0.4} /> 
        {/* Increased darkness for Vignette to focus the view */}
        <Vignette eskil={false} offset={0.15} darkness={0.6} /> 
      </EffectComposer>
    </Canvas>
  );
}