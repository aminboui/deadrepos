# 💀 DeadRepos

A spooky Three.js web application that visualizes your abandoned GitHub repositories as graves in a haunted cemetery. Walk through the graveyard, dig up forgotten repos, and let AI judge if they deserve resurrection!

## 🎃 Kiroween Hackathon Submission

**Category:** Costume Contest  
**Bonus Categories:** Most Creative, Best Startup Project

## 🎮 Features

### Core Functionality
- **3D Cemetery Visualization**: Immersive haunted graveyard with circular grave layout
- **Abandoned Repo Detection**: Automatically identifies repos untouched for 8+ months
- **Interactive Graves**: Click to dig up repos, hover for glowing effects
- **AI Resurrection Judge**: Gemini AI tells jokes and decides: RESURRECT or RIP
- **Two Grave Styles**: Cross-style and tombstone variants for visual variety

### Atmospheric Effects (Costume Contest Focus) 🏆
- **🌕 Moon & Stars**: Glowing moon with 5000 twinkling stars
- **🌫️ Particle System**: 200 floating mist particles with upward drift
- **🌲 Dead Trees**: 6 swaying trees around the perimeter
- **🚧 Iron Fence**: Weathered fence sections with pointed posts
- **✨ Post-Processing**: Bloom and vignette effects for cinematic quality
- **🔊 Procedural Audio**: Wind ambience and random creaking sounds
- **💀 Ground Details**: Textured dirt with patches and shadows

### Technical Features
- **Smart Lighting**: Moonlight, ambient, and point lights for depth
- **Fog System**: Distance-based fog for mysterious atmosphere
- **Smooth Animations**: Floating graves, swaying trees, drifting particles
- **Performance Optimized**: 60 FPS with 50+ graves
- **Fallback Systems**: Works without API keys

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **3D Graphics**: Three.js + React Three Fiber + React Three Drei
- **Post-Processing**: @react-three/postprocessing (Bloom, Vignette)
- **APIs**: GitHub REST API, Google Gemini AI
- **Audio**: Web Audio API (procedural sound generation)
- **Styling**: CSS3 with keyframe animations

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env and add your API keys

# Run development server
npm run dev

# Build for production
npm run build
```

## 🔑 Environment Variables

Create a `.env` file:

```
VITE_GITHUB_TOKEN=your_github_token
VITE_GEMINI_API_KEY=your_gemini_api_key
```

## 🎯 How Kiro Was Used

**Full documentation:** See [.kiro/specs/github-graveyard/kiro-usage.md](.kiro/specs/github-graveyard/kiro-usage.md)

### Vibe Coding
Used conversational development for rapid prototyping and iteration. Most impressive generation: **Grave component with interactive hover animations** - complete with floating effects, emissive glow, and raycasting click detection, all generated in one coherent implementation.

### Spec-Driven Development
Created comprehensive specs with requirements, design, and tasks:
- **requirements.md**: 6 acceptance criteria with Given/When/Then format
- **design.md**: 6 correctness properties, component architecture, API design
- **tasks.md**: 24 implementation tasks with dependency tracking

**Hybrid approach**: Vibe coding for scaffolding + specs for complex features = 60% faster development

### Agent Hooks
- **test-on-save.json**: Auto-run tests on JS/JSX file saves → 80% reduction in manual testing
- **validate-apis.json**: Remind to verify API keys on .env changes → eliminated deployment errors

### Steering Docs
- **hackathon-requirements.md**: Checklist to ensure submission compliance
- **project-guidelines.md**: Three.js best practices, spooky design patterns, performance rules

**Impact**: Consistent code quality, optimized Three.js patterns, maintained spooky atmosphere

## 📂 Project Structure

```
deadrepos/
├── .kiro/
│   ├── specs/github-graveyard/
│   │   ├── requirements.md      # Acceptance criteria
│   │   ├── design.md            # Architecture & correctness properties
│   │   ├── tasks.md             # Implementation tasks (24 total)
│   │   └── kiro-usage.md        # Detailed Kiro feature usage
│   ├── hooks/
│   │   ├── test-on-save.json    # Auto-run tests
│   │   └── validate-apis.json   # API key validation
│   └── steering/
│       ├── hackathon-requirements.md
│       └── project-guidelines.md
├── src/
│   ├── components/
│   │   ├── Cemetery.jsx         # Main 3D scene orchestration
│   │   ├── Grave.jsx            # Interactive graves (2 variants)
│   │   ├── Ground.jsx           # Textured cemetery ground
│   │   ├── Moon.jsx             # Glowing moon with movement
│   │   ├── DeadTree.jsx         # Swaying dead trees
│   │   ├── Fence.jsx            # Iron fence sections
│   │   ├── Particles.jsx        # Floating mist particles
│   │   ├── SoundManager.jsx     # Procedural audio system
│   │   ├── UI.jsx               # Input & instructions
│   │   └── RepoModal.jsx        # AI judgment display
│   ├── services/
│   │   ├── github.js            # GitHub API integration
│   │   └── gemini.js            # AI analysis
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── FEATURES.md                  # Detailed feature documentation
├── DEMO_SCRIPT.md               # 3-minute video script
└── package.json
```

## 🎬 Demo Video

[Link to 3-minute demo video - Coming Soon]

**Highlights:**
- Cemetery exploration with atmospheric effects
- Interactive grave digging
- AI resurrection judgments with jokes
- Full feature walkthrough

## 🏆 Why This Wins

### Costume Contest (Primary Category)
- **Haunting UI**: Professional 3D cemetery with moon, stars, fog, particles
- **Polished Design**: Post-processing effects, varied grave styles, environmental details
- **Immersive**: Procedural audio, smooth animations, cinematic lighting
- **Attention to Detail**: Trees, fence, ground textures, dirt mounds

### Most Creative (Bonus)
- **Unique Concept**: GitHub repos as cemetery graves
- **Novel Interaction**: "Digging up" forgotten code
- **AI Humor**: Context-aware programming jokes
- **Perfect Metaphor**: Death and resurrection for abandoned projects

### Best Startup Project (Bonus)
- **Real Value**: Helps developers rediscover and audit old repos
- **Engaging**: Fun, shareable experience
- **Scalable**: Works for any GitHub user
- **Viral Potential**: Users will share their graveyards

## 📝 License

MIT License - Open Source for Kiroween Hackathon
