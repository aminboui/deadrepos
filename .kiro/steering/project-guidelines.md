# DeadRepos - Project Guidelines

## Project Overview
A spooky Three.js web application for the Kiroween Hackathon that visualizes abandoned GitHub repositories as graves in a 3D cemetery.

## Development Standards

### Three.js Best Practices
- Use React Three Fiber for React integration
- Optimize geometry and materials for performance
- Implement proper lighting for spooky atmosphere
- Use fog and shadows for depth
- Keep draw calls minimal (< 100 objects)

### Code Style
- Use functional React components with hooks
- Keep components small and focused
- Use async/await for API calls
- Handle errors gracefully with user-friendly messages
- Add loading states for all async operations

### API Integration
- GitHub API: Use personal access tokens to avoid rate limits
- Gemini AI: Implement fallback responses if API fails
- Cache responses when possible
- Handle 404s and network errors

### Performance
- Lazy load Three.js components
- Optimize grave rendering for large repo counts
- Use instanced meshes if rendering 50+ graves
- Implement proper cleanup in useEffect hooks

### Spooky Design Elements
- Dark color palette (#0a0a0a, #8b0000, #ff4500)
- Glowing effects on hover
- Fog and atmospheric lighting
- Creepy animations (floating, flickering)
- Halloween-themed UI elements
