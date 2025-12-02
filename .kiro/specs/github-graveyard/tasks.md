# DeadRepos - Implementation Tasks

## Phase 1: Project Setup
- [x] **T-1.1**: Initialize Vite + React project
  - Maps to: Infrastructure
  - Create package.json with dependencies
  - Configure vite.config.js
  
- [x] **T-1.2**: Install Three.js dependencies
  - Maps to: AC-2
  - Install three, @react-three/fiber, @react-three/drei
  
- [x] **T-1.3**: Setup environment configuration
  - Maps to: SC-1
  - Create .env.example
  - Add .gitignore rules
  - Document API key requirements

## Phase 2: GitHub Integration
- [x] **T-2.1**: Create GitHub API service
  - Maps to: AC-1, CP-1
  - Implement fetchGitHubRepos function
  - Add 8-month filtering logic
  - Handle authentication with token
  
- [x] **T-2.2**: Implement error handling
  - Maps to: AC-5, CP-6
  - Handle 404 (user not found)
  - Handle rate limiting
  - Display user-friendly messages

## Phase 3: 3D Cemetery Scene
- [x] **T-3.1**: Create Cemetery component
  - Maps to: AC-2, CP-2
  - Setup Canvas with camera
  - Add fog and lighting
  - Configure scene background
  
- [x] **T-3.2**: Implement Ground component
  - Maps to: AC-2
  - Create plane geometry
  - Apply dark material
  - Enable shadow receiving
  
- [x] **T-3.3**: Create Grave component
  - Maps to: AC-2, AC-3, CP-3
  - Design grave geometry (box + base)
  - Add repo name text
  - Implement positioning algorithm
  
- [x] **T-3.4**: Add navigation controls
  - Maps to: AC-2
  - Integrate OrbitControls
  - Configure zoom/pan limits
  - Set camera constraints

## Phase 4: Interactivity
- [x] **T-4.1**: Implement grave hover effects
  - Maps to: AC-3
  - Add hover state management
  - Create floating animation
  - Add glow effect (emissive material)
  
- [x] **T-4.2**: Add click handling
  - Maps to: AC-3, CP-4
  - Implement onClick prop
  - Pass repo data to parent
  - Trigger modal display

## Phase 5: AI Integration
- [x] **T-5.1**: Create Gemini API service
  - Maps to: AC-4, CP-5
  - Implement analyzeRepoWithAI function
  - Construct AI prompt
  - Parse JSON response
  
- [x] **T-5.2**: Implement fallback logic
  - Maps to: AC-5, CP-5
  - Create rule-based joke generator
  - Add verdict logic (stars, language)
  - Handle API failures gracefully

## Phase 6: UI Components
- [x] **T-6.1**: Create main UI overlay
  - Maps to: AC-1
  - Username input field
  - Submit button
  - Loading states
  - Instructions panel
  
- [x] **T-6.2**: Build RepoModal component
  - Maps to: AC-4
  - Display repo metadata
  - Show AI analysis
  - Add close button
  - Link to GitHub repo
  
- [x] **T-6.3**: Style with spooky theme
  - Maps to: Visual Design
  - Apply color palette
  - Add animations (flicker, pulse)
  - Create modal entrance effect

## Phase 7: Atmospheric Enhancements (Costume Contest Focus)
- [x] **T-7.1**: Add moon and stars
  - Maps to: Visual Design
  - Create Moon component with glow
  - Add Stars from drei
  - Implement subtle moon movement
  
- [x] **T-7.2**: Create dead trees
  - Maps to: Visual Design
  - Design DeadTree component with branches
  - Add swaying animation
  - Place around cemetery perimeter
  
- [x] **T-7.3**: Build cemetery fence
  - Maps to: Visual Design
  - Create Fence component with posts
  - Add pointed tops and horizontal bars
  - Position around edges
  
- [x] **T-7.4**: Implement particle system
  - Maps to: Visual Design
  - Create floating particles (mist/dust)
  - Add slow upward drift animation
  - Use additive blending for atmosphere
  
- [x] **T-7.5**: Add post-processing effects
  - Maps to: Visual Design
  - Install @react-three/postprocessing
  - Add Bloom for glowing effects
  - Add Vignette for focus
  
- [x] **T-7.6**: Implement sound system
  - Maps to: Visual Design
  - Create SoundManager component
  - Generate wind sound (white noise + filter)
  - Add random creaking sounds
  - Add sound toggle button
  
- [x] **T-7.7**: Enhance grave designs
  - Maps to: AC-2, Visual Design
  - Add cross variant
  - Add tombstone variant with rounded top
  - Add dirt mounds at base
  - Alternate variants per grave

## Phase 8: Polish & Optimization
- [ ] **T-8.1**: Performance optimization
  - Maps to: AC-6, PO-1, PO-2, PO-3
  - Implement memoization
  - Add lazy loading
  - Test with 50+ repos
  
- [ ] **T-8.2**: Accessibility improvements
  - Maps to: NFR-1
  - Add ARIA labels
  - Keyboard navigation
  - Screen reader support
  
- [ ] **T-8.3**: Mobile responsiveness
  - Maps to: NFR-3
  - Touch controls
  - Responsive layout
  - Test on mobile devices

## Phase 9: Kiro Documentation
- [x] **T-9.1**: Create .kiro directory structure
  - Maps to: Hackathon Requirements
  - Setup specs folder
  - Create hooks
  - Add steering docs
  
- [x] **T-9.2**: Document Kiro usage
  - Maps to: Hackathon Requirements
  - Update README with Kiro features used
  - Explain vibe coding approach
  - Document spec-driven development
  - Describe hooks and steering

## Phase 10: Deployment
- [ ] **T-10.1**: Build production version
  - Maps to: Hackathon Requirements
  - Run npm build
  - Test production build
  - Optimize assets
  
- [ ] **T-10.2**: Deploy to hosting
  - Maps to: Hackathon Requirements
  - Choose platform (Vercel/Netlify)
  - Configure environment variables
  - Test live deployment
  
- [ ] **T-10.3**: Create demo video
  - Maps to: Hackathon Requirements
  - Record 3-minute walkthrough
  - Show atmospheric effects
  - Demonstrate AI judgments
  - Upload to YouTube/Vimeo

## Task Dependencies
```
T-1.1 → T-1.2 → T-1.3
T-1.3 → T-2.1 → T-2.2
T-1.2 → T-3.1 → T-3.2, T-3.3, T-3.4
T-3.3 → T-4.1 → T-4.2
T-1.3 → T-5.1 → T-5.2
T-4.2 → T-6.1, T-6.2 → T-6.3
All → T-7.1, T-7.2, T-7.3
All → T-8.1 → T-8.2
T-7.* → T-9.1 → T-9.2 → T-9.3
```

## Progress Tracking
- **Completed**: 25 tasks
- **In Progress**: 0 tasks
- **Remaining**: 6 tasks
- **Total**: 31 tasks
- **Completion**: 81%
