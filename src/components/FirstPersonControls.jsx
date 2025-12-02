import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { PointerLockControls } from '@react-three/drei';
import * as THREE from 'three';

export default function FirstPersonControls({ autoLock = false, onWalkingChange }) {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  const hasAutoLocked = useRef(false);
  
  // Prevent pointer lock when clicking on UI elements
  useEffect(() => {
    const canvas = gl.domElement;
    
    const handlePointerDown = (event) => {
      const target = event.target;
      
      // Block pointer lock for UI interactions
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('.modal') ||
        target.closest('.input-container') ||
        target.closest('.header') ||
        document.activeElement?.tagName === 'INPUT'
      ) {
        event.stopPropagation();
        event.preventDefault();
        if (controlsRef.current?.isLocked) {
          controlsRef.current.unlock();
        }
        return false;
      }
    };
    
    // Capture phase to intercept before PointerLockControls
    document.addEventListener('pointerdown', handlePointerDown, true);
    
    // Also check on pointer lock change
    const handlePointerLockChange = () => {
      // If an input is focused, unlock immediately
      if (document.activeElement?.tagName === 'INPUT' && controlsRef.current?.isLocked) {
        controlsRef.current.unlock();
      }
    };
    
    document.addEventListener('pointerlockchange', handlePointerLockChange);
    
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown, true);
      document.removeEventListener('pointerlockchange', handlePointerLockChange);
    };
  }, [gl, controlsRef]);
  
  const moveState = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });
  
  const velocity = useRef(new THREE.Vector3());
  const direction = useRef(new THREE.Vector3());
  
  // Auto-lock pointer when component mounts (repos loaded)
  useEffect(() => {
    if (autoLock && controlsRef.current && !hasAutoLocked.current) {
      // Small delay to ensure everything is ready
      const timer = setTimeout(() => {
        if (controlsRef.current && !controlsRef.current.isLocked) {
          controlsRef.current.lock();
          hasAutoLocked.current = true;
        }
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [autoLock]);
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          moveState.current.forward = true;
          break;
        case 'KeyS':
        case 'ArrowDown':
          moveState.current.backward = true;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          moveState.current.left = true;
          break;
        case 'KeyD':
        case 'ArrowRight':
          moveState.current.right = true;
          break;
      }
    };
    
    const handleKeyUp = (event) => {
      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          moveState.current.forward = false;
          break;
        case 'KeyS':
        case 'ArrowDown':
          moveState.current.backward = false;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          moveState.current.left = false;
          break;
        case 'KeyD':
        case 'ArrowRight':
          moveState.current.right = false;
          break;
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  
  useFrame((state, delta) => {
    if (!controlsRef.current?.isLocked) return;
    
    const speed = 25.0; // Increased from 5.0 for faster movement
    
    velocity.current.x -= velocity.current.x * 10.0 * delta;
    velocity.current.z -= velocity.current.z * 10.0 * delta;
    
    direction.current.z = Number(moveState.current.forward) - Number(moveState.current.backward);
    direction.current.x = Number(moveState.current.right) - Number(moveState.current.left);
    direction.current.normalize();
    
    if (moveState.current.forward || moveState.current.backward) {
      velocity.current.z -= direction.current.z * speed * delta;
    }
    if (moveState.current.left || moveState.current.right) {
      velocity.current.x -= direction.current.x * speed * delta;
    }
    
    controlsRef.current.moveRight(-velocity.current.x * delta);
    controlsRef.current.moveForward(-velocity.current.z * delta);
    
    // Keep camera at eye level
    camera.position.y = 1.6;
  });
  
  return (
    <PointerLockControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      selector=".three-canvas-only"
    />
  );
}
