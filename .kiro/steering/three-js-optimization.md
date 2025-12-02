---
inclusion: fileMatch
fileMatchPattern: "**/*.jsx"
---

# Three.js Optimization Guidelines

## Performance Rules

### Geometry Optimization
- Reuse geometries across multiple meshes
- Use `BufferGeometry` instead of `Geometry`
- Keep vertex counts reasonable (< 10k per mesh)
- Use LOD (Level of Detail) for distant objects

### Material Optimization
- Share materials between similar objects
- Minimize material changes per frame
- Use `MeshBasicMaterial` for non-lit objects
- Avoid transparent materials when possible

### Rendering Optimization
- Enable frustum culling (default)
- Use `InstancedMesh` for 50+ identical objects
- Limit shadow-casting objects
- Reduce texture sizes for distant objects

### React Three Fiber Specific
- Memoize components with `React.memo()`
- Use `useMemo` for expensive calculations
- Implement proper cleanup in `useEffect`
- Avoid creating new objects in render

### Cemetery Scene Specific
```javascript
// Good: Reuse geometry
const graveGeometry = useMemo(() => new BoxGeometry(1, 1.5, 0.2), []);

// Good: Instanced rendering for many graves
if (repos.length > 50) {
  return <InstancedGraves repos={repos} />;
}

// Good: Cleanup
useEffect(() => {
  return () => {
    geometry.dispose();
    material.dispose();
  };
}, []);
```

## Spooky Atmosphere Guidelines

### Lighting
- Keep ambient light low (0.1-0.3 intensity)
- Use colored lights (red, orange, blue-gray)
- Add point lights for eerie glows
- Enable shadows sparingly (performance cost)

### Fog
- Always use fog for depth and atmosphere
- Match fog color to background
- Adjust near/far based on scene size

### Post-Processing
- Bloom for glowing effects
- Vignette for focus
- Film grain for vintage horror feel
- Keep effects subtle (performance)

## Common Pitfalls

### ❌ Don't
```javascript
// Creating new objects every render
<mesh geometry={new BoxGeometry()} />

// No cleanup
useEffect(() => {
  const texture = textureLoader.load('texture.jpg');
});

// Inline functions as props
<mesh onClick={() => handleClick(data)} />
```

### ✅ Do
```javascript
// Memoize geometry
const geometry = useMemo(() => new BoxGeometry(), []);

// Proper cleanup
useEffect(() => {
  const texture = textureLoader.load('texture.jpg');
  return () => texture.dispose();
}, []);

// Stable callback references
const handleClick = useCallback(() => handleClick(data), [data]);
```
