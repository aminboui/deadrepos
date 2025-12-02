# 🛠️ Built With - DeadRepos

## Languages

- **JavaScript (ES6+)** - Primary development language
- **JSX** - React component syntax
- **CSS3** - Styling and animations
- **Markdown** - Documentation

## Frameworks & Libraries

### Frontend Framework
- **React 18.3.1** - UI component library
- **Vite 5.0** - Build tool and dev server

### 3D Graphics
- **Three.js 0.160.0** - WebGL 3D library
- **React Three Fiber 8.15.0** - React renderer for Three.js
- **React Three Drei 9.92.0** - Useful helpers for R3F
- **React Three Postprocessing 2.16.0** - Post-processing effects

### API Integration
- **Axios 1.6.0** - HTTP client for API requests
- **@google/generative-ai 0.2.0** - Google Gemini AI SDK

## APIs & Services

### External APIs
- **GitHub REST API** - Repository data and metadata
  - Endpoint: `https://api.github.com/users/{username}/repos`
  - Authentication: Personal Access Token (optional)
  - Rate Limit: 60 req/hour (unauthenticated), 5000 req/hour (authenticated)

- **Google Gemini AI API** - Code analysis and joke generation
  - Model: `gemini-pro`
  - Purpose: Analyze repos and generate resurrection verdicts

### Browser APIs
- **Web Audio API** - Procedural sound generation
  - AudioContext for sound synthesis
  - OscillatorNode for tones
  - GainNode for volume control
  - BiquadFilterNode for audio shaping

- **Pointer Lock API** - First-person camera controls
  - Used for immersive walking experience
  - Mouse movement controls camera rotation

## Development Tools

### AI-Powered Development
- **Kiro IDE** - Primary development environment
  - Vibe coding for rapid prototyping
  - Spec-driven development for complex features
  - Agent hooks for automated workflows
  - Steering docs for consistent patterns

### Version Control
- **Git** - Source control
- **GitHub** - Repository hosting

## Cloud Services & Hosting

### Deployment Options
- **Vercel** (Recommended) - Serverless deployment platform
- **Netlify** (Alternative) - JAMstack hosting
- **GitHub Pages** (Alternative) - Static site hosting

## Databases

**None** - This is a fully client-side application with no backend database. All data is:
- Fetched in real-time from GitHub API
- Processed client-side
- Not persisted (stateless)

## Audio Assets

### Sound Files
- **Scary.wav** - Ambient atmospheric sound (looping)
- **Shovel.wav** - Grave digging sound effect

### Procedural Audio
- **Footsteps** - Generated using Web Audio API (sine wave)
- **Wind** - White noise with lowpass filter (replaced with file)
- **Thunder** - Noise burst with exponential decay (replaced with file)

## Design & Assets

### 3D Models
- **Procedurally Generated** - All 3D objects created with Three.js primitives:
  - BoxGeometry (graves, fence posts)
  - CylinderGeometry (trees, lanterns)
  - SphereGeometry (moon, particles, dirt mounds)
  - PlaneGeometry (ground)

### Fonts
- **System Fonts** - No external font files
  - 'Creepster' (fallback to Courier New) for headers
  - Default sans-serif for UI

### Icons & Emojis
- **Unicode Emojis** - 💀 🪦 👻 🎃 🌙 🦇
  - No icon libraries needed
  - Universal support

## Performance Optimizations

### Build Optimizations
- **Vite** - Fast HMR and optimized production builds
- **Tree Shaking** - Removes unused code
- **Code Splitting** - Lazy loading for better performance

### Runtime Optimizations
- **React.memo()** - Memoized components
- **useMemo()** - Cached expensive calculations
- **useCallback()** - Stable function references
- **Geometry Reuse** - Shared geometries across meshes
- **Proper Cleanup** - Disposed geometries and materials

## Testing

### Manual Testing
- **Browser Testing**: Chrome, Firefox, Safari, Edge
- **Device Testing**: Desktop, Mobile (touch controls)
- **Performance Testing**: 60 FPS target with 50+ objects

### Automated Testing (via Kiro Hooks)
- **test-on-save.json** - Runs tests on file save
- **validate-apis.json** - Validates environment variables

## Documentation Tools

### Specification System
- **Markdown** - All documentation in `.md` format
- **Kiro Specs** - Structured requirements, design, and tasks
  - requirements.md (6 acceptance criteria)
  - design.md (6 correctness properties)
  - tasks.md (31 implementation tasks)
  - kiro-usage.md (development methodology)

### Code Documentation
- **JSDoc-style comments** - Inline code documentation
- **README.md** - Project overview and setup
- **FEATURES.md** - Detailed feature list
- **DEMO_SCRIPT.md** - Video recording guide

## License

- **MIT License** - Open source, OSI-approved

## Development Environment

### System Requirements
- **Node.js** 18+ - JavaScript runtime
- **npm** 9+ - Package manager
- **Modern Browser** - WebGL 2.0 support required

### IDE Features Used
- **Kiro Vibe Coding** - Natural language code generation
- **Kiro Specs** - Structured development workflow
- **Kiro Hooks** - Automated testing and validation
- **Kiro Steering** - Project-specific guidelines

## Package Manager

- **npm** - Node Package Manager
  - Total dependencies: 15 packages
  - Bundle size: ~800KB (gzipped)
  - Install time: ~30 seconds

## Browser Compatibility

### Minimum Requirements
- **Chrome** 90+ (recommended)
- **Firefox** 88+
- **Safari** 15+
- **Edge** 90+

### Required Features
- WebGL 2.0
- Web Audio API
- Pointer Lock API
- ES6+ JavaScript
- CSS Grid & Flexbox

## Accessibility

### Standards Compliance
- **WCAG 2.1** - Partial compliance
- **Keyboard Navigation** - ESC key support
- **Screen Reader** - ARIA labels (partial)

### Future Improvements
- Full keyboard navigation
- High contrast mode
- Screen reader optimization

## Analytics & Monitoring

**None** - No analytics or tracking implemented. Privacy-first approach.

## Security

### Best Practices
- **Environment Variables** - API keys in `.env` (not committed)
- **HTTPS Only** - Secure connections required
- **No Backend** - Reduced attack surface
- **Client-Side Only** - No server-side vulnerabilities

### API Key Management
- `.env.example` - Template for required keys
- `.gitignore` - Excludes `.env` from version control
- Fallback logic - Works without API keys (limited functionality)

---

## Technology Stack Summary

```
Frontend:     React + Vite
3D Engine:    Three.js + React Three Fiber
AI:           Google Gemini
APIs:         GitHub REST API
Audio:        Web Audio API + WAV files
Deployment:   Vercel / Netlify
Development:  Kiro IDE
License:      MIT (Open Source)
```

## Why These Technologies?

### React + Vite
- **Fast development** - HMR in milliseconds
- **Modern tooling** - ES modules, optimized builds
- **Large ecosystem** - Extensive library support

### Three.js + React Three Fiber
- **Declarative 3D** - React components for Three.js
- **Performance** - WebGL acceleration
- **Flexibility** - Full Three.js API access

### Google Gemini AI
- **Advanced reasoning** - Context-aware responses
- **JSON output** - Structured data for jokes/verdicts
- **Free tier** - Generous API limits

### GitHub API
- **Public data** - No authentication required (with limits)
- **Rich metadata** - Stars, language, last push date
- **Reliable** - Industry-standard API

### Kiro IDE
- **AI-powered** - Natural language code generation
- **Structured** - Specs for complex features
- **Automated** - Hooks for workflows
- **Guided** - Steering for best practices

---

*Total Development Time: 4 days*  
*Lines of Code: ~2,500*  
*External Dependencies: 15 packages*  
*Bundle Size: ~800KB (gzipped)*  
*Performance: 60 FPS*  
*Fun Factor: ∞*

🎃 **Built for Kiroween Hackathon 2025** 🎃
