# 🎃 DeadRepos - Feature Showcase

## 🌟 Core Features

### 1. GitHub Repository Analysis
- **Automatic Detection**: Scans user repos and identifies those abandoned for 8+ months
- **Smart Filtering**: Uses GitHub API with proper authentication
- **Error Handling**: Graceful handling of invalid usernames, rate limits, network issues
- **Metadata Display**: Shows stars, language, description, last activity date

### 2. 3D Cemetery Visualization
- **Circular Layout**: Graves arranged in expanding circles for optimal viewing
- **Two Grave Variants**: 
  - Cross-style graves (traditional)
  - Tombstone graves with rounded tops
- **Dynamic Positioning**: Automatically adjusts layout based on repo count
- **Smooth Navigation**: OrbitControls for intuitive camera movement

### 3. Interactive Elements
- **Hover Effects**: 
  - Graves glow with emissive orange-red light
  - Floating animation (sin wave)
  - Cursor changes to pointer
- **Click to Dig**: Opens detailed modal with repo information
- **Smooth Animations**: All transitions use easing functions

### 4. AI-Powered Resurrection Judgment
- **Google Gemini Integration**: Analyzes repo metadata
- **Programming Jokes**: Context-aware humor based on repo details
- **Verdict System**: RESURRECT or REST IN PEACE
- **Reasoning**: Explains why the repo should live or die
- **Fallback Logic**: Rule-based system if AI unavailable

## 🎨 Atmospheric Effects (Costume Contest Focus)

### Visual Atmosphere
1. **Moon System**
   - Large glowing moon with point light
   - Subtle horizontal movement (breathing effect)
   - Golden color (#ffd700)
   - Casts light across cemetery

2. **Starfield**
   - 5000 stars using drei's Stars component
   - Slow rotation for dynamic sky
   - Desaturated for realistic night sky

3. **Particle System**
   - 200 floating particles (mist/dust)
   - Upward drift with sine wave variation
   - Additive blending for ethereal effect
   - Rotates slowly around scene

4. **Post-Processing**
   - **Bloom**: Makes lights and emissive materials glow
   - **Vignette**: Darkens edges for focus
   - Subtle settings to avoid over-processing

5. **Fog System**
   - Matches background color (#050510)
   - 10-50 unit range for depth
   - Creates mysterious atmosphere

6. **Lighting Design**
   - Low ambient (0.15) for darkness
   - Directional moonlight (blue-gray)
   - Central point light (orange) for eerie glow
   - Shadows enabled on key objects

### Environmental Details
1. **Dead Trees**
   - 6 trees around perimeter
   - Twisted branches with multiple segments
   - Swaying animation (wind effect)
   - Dark bark material (#2d2d2d)

2. **Cemetery Fence**
   - Iron fence sections with pointed posts
   - Horizontal bars connecting posts
   - Positioned around edges
   - Weathered metal appearance

3. **Ground Texturing**
   - Dark base ground (#0d0d0d)
   - Circular patches for variation
   - High roughness for dirt appearance
   - Receives shadows from all objects

4. **Grave Details**
   - Dirt mounds at base of each grave
   - Stone base platforms
   - Weathered stone material
   - Text showing repo name and "RIP"

## 🔊 Audio System

### Procedural Sound Generation
1. **Wind Sound**
   - White noise filtered through lowpass
   - Continuous loop with fade-in
   - Adjustable volume (0.15 gain)
   - Creates ambient atmosphere

2. **Creaking Sounds**
   - Random intervals (every 8 seconds, 70% chance)
   - Sawtooth oscillator with frequency sweep
   - Simulates old wood/metal creaking
   - Short duration (0.5s)

3. **Sound Controls**
   - Toggle button (bottom-right)
   - Mute/unmute functionality
   - Visual indicator (🔊/🔇)
   - Persists across interactions

### Audio Implementation
- Web Audio API (no external files needed)
- Starts on user interaction (browser requirement)
- Efficient - no continuous processing
- Cross-browser compatible

## 🎮 User Experience

### Input & Controls
- **Username Input**: Clean, focused input field
- **Submit Button**: Clear call-to-action
- **Loading States**: Visual feedback during API calls
- **Error Messages**: User-friendly error display
- **Instructions Panel**: Always visible guide

### Navigation
- **Mouse Drag**: Rotate camera around cemetery
- **Scroll Wheel**: Zoom in/out
- **Pan**: Shift + drag (optional)
- **Constraints**: 
  - Min distance: 5 units
  - Max distance: 35 units
  - Max polar angle: prevents going underground

### Modal System
- **Smooth Entrance**: Slide + fade animation
- **Detailed Info**: All repo metadata
- **AI Analysis**: Joke, verdict, reasoning
- **Close Button**: Easy dismissal
- **Link to Repo**: Direct GitHub access
- **Loading State**: Shows while AI analyzes

## 🚀 Technical Excellence

### Performance Optimizations
- **Efficient Rendering**: < 100 draw calls
- **Shadow Optimization**: Only key objects cast shadows
- **Geometry Reuse**: Shared geometries where possible
- **Lazy Loading**: Components load on demand
- **60 FPS Target**: Smooth on modern hardware

### Code Quality
- **Component Architecture**: Small, focused components
- **React Hooks**: Modern functional patterns
- **Error Boundaries**: Graceful error handling
- **TypeScript Ready**: Clear prop interfaces
- **Clean Code**: Well-commented and organized

### API Integration
- **GitHub REST API**: Efficient repo fetching
- **Rate Limit Handling**: Token authentication
- **Caching Strategy**: Reduces redundant calls
- **Gemini AI**: Structured prompts for consistent results
- **Fallback Systems**: Works without API keys

## 📊 Statistics

### Scene Complexity
- **Objects**: 50-100+ (depending on repo count)
- **Lights**: 3 (ambient, directional, point)
- **Particles**: 200 floating mist particles
- **Trees**: 6 dead trees with multiple branches
- **Fence Sections**: 6 sections with 30 posts total

### Visual Effects
- **Post-Processing**: 2 effects (Bloom, Vignette)
- **Animations**: 5+ (graves, moon, trees, particles, modal)
- **Materials**: 10+ unique materials
- **Textures**: Procedural (no image files)

### Code Metrics
- **Components**: 12 React components
- **Services**: 2 API services
- **Hooks**: 3 agent hooks
- **Steering Docs**: 3 documentation files
- **Spec Files**: 4 comprehensive specs

## 🏆 Hackathon Category Fit

### Costume Contest (Primary)
✅ **Haunting UI**: Spooky cemetery with atmospheric effects  
✅ **Polished Design**: Professional Three.js implementation  
✅ **Visual Effects**: Bloom, vignette, particles, fog  
✅ **Attention to Detail**: Trees, fence, moon, varied graves  
✅ **Immersive Experience**: Sound, lighting, animations  

### Most Creative (Bonus)
✅ **Unique Concept**: GitHub repos as cemetery graves  
✅ **Novel Interaction**: "Digging up" repos  
✅ **AI Integration**: Humorous resurrection judgments  
✅ **Metaphor**: Death/resurrection for abandoned code  

### Best Startup Project (Bonus)
✅ **Real Value**: Helps developers rediscover old projects  
✅ **Scalable**: Works for any GitHub user  
✅ **Engaging**: Fun way to audit repositories  
✅ **Shareable**: Users will share their graveyards  

## 🎯 Competitive Advantages

1. **Visual Polish**: Professional-grade 3D graphics
2. **Atmospheric Immersion**: Complete sensory experience
3. **AI Integration**: Smart, entertaining analysis
4. **Technical Sophistication**: Advanced Three.js techniques
5. **Kiro Showcase**: Demonstrates all Kiro features
6. **Performance**: Smooth even with many repos
7. **Accessibility**: Works without API keys (fallbacks)
8. **Creativity**: Unique concept with perfect execution
