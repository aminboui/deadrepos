# DeadRepos - Design

## Architecture Overview

### System Components
```
┌─────────────┐      ┌──────────────┐      ┌─────────────┐
│   React UI  │─────▶│  GitHub API  │      │  Gemini AI  │
│  (Frontend) │      │   Service    │      │   Service   │
└─────────────┘      └──────────────┘      └─────────────┘
       │                     │                     │
       │                     │                     │
       ▼                     ▼                     ▼
┌─────────────────────────────────────────────────────┐
│              Three.js Cemetery Scene                │
│  (Canvas, Graves, Lighting, Controls)              │
└─────────────────────────────────────────────────────┘
```

## Correctness Properties

### CP-1: Repository Filtering Accuracy
**Maps to:** AC-1  
**Property:** All displayed repos MUST have last_push_at >= 8 months ago  
**Verification:** 
- Calculate: `(Date.now() - new Date(repo.pushed_at)) >= 8 * 30 * 24 * 60 * 60 * 1000`
- Test with repos at 7.9 months (excluded) and 8.1 months (included)

### CP-2: 3D Scene Rendering Integrity
**Maps to:** AC-2  
**Property:** Number of graves rendered === number of abandoned repos  
**Verification:**
- Count Three.js mesh objects in scene
- Assert: `scene.children.filter(isGrave).length === repos.length`

### CP-3: Grave Positioning Algorithm
**Maps to:** AC-2  
**Property:** Graves arranged in circular pattern without overlap  
**Algorithm:**
```javascript
angle = (index / totalRepos) * 2π
radius = 8 + floor(index / 8) * 3
x = cos(angle) * radius
z = sin(angle) * radius
```
**Verification:** No two graves share same (x, z) coordinates

### CP-4: Interactive State Management
**Maps to:** AC-3  
**Property:** Only one grave can be selected at a time  
**Verification:**
- selectedRepo state is null or single repo object
- Modal visibility tied to selectedRepo !== null

### CP-5: AI Response Structure
**Maps to:** AC-4  
**Property:** AI response MUST contain {joke, verdict, reason}  
**Verification:**
- Validate response schema
- Verdict must be "RESURRECT" or "RIP"
- Fallback if API fails

### CP-6: Error Boundary Coverage
**Maps to:** AC-5  
**Property:** All async operations wrapped in try-catch  
**Verification:**
- GitHub API calls handle 404, 403, 500
- Gemini API calls have fallback
- Network errors display user message

## Component Design

### Cemetery Component
**Responsibility:** Orchestrate 3D scene  
**Props:** `repos: Repo[], onGraveClick: (repo) => void`  
**State:** None (stateless)  
**Children:** Ground, Grave[], Lighting, Controls

### Grave Component
**Responsibility:** Render individual grave with interactions  
**Props:** `position: [x,y,z], repo: Repo, onClick: () => void`  
**State:** `hovered: boolean`  
**Animations:** Float on hover, glow effect

### RepoModal Component
**Responsibility:** Display repo details and AI judgment  
**Props:** `repo: Repo, onClose: () => void`  
**State:** `analysis: AIResponse | null, loading: boolean`  
**Effects:** Fetch AI analysis on mount

## API Integration Design

### GitHub Service
```javascript
fetchGitHubRepos(username: string): Promise<Repo[]>
- GET /users/{username}/repos
- Filter by pushed_at date
- Handle rate limiting
- Return abandoned repos only
```

### Gemini Service
```javascript
analyzeRepoWithAI(repo: Repo): Promise<AIResponse>
- Construct prompt with repo metadata
- Call Gemini API
- Parse JSON response
- Fallback to rule-based jokes if API fails
```

## Performance Optimizations

### PO-1: Lazy Loading
- Three.js components load only when needed
- Suspend/lazy for code splitting

### PO-2: Memoization
- Memo grave components to prevent re-renders
- useMemo for grave position calculations

### PO-3: Instanced Rendering
- If repos > 50, use InstancedMesh for graves
- Reduces draw calls from N to 1

## Visual Design

### Color Palette
- Background: `#0a0a0a` (deep black)
- Primary: `#ff4500` (orange-red)
- Secondary: `#8b0000` (dark red)
- Text: `#e0e0e0` (light gray)

### Lighting Setup
- Ambient: Low intensity (0.2) for base visibility
- Directional: Gray-blue (#4a5568) for moonlight effect
- Point: Orange (#ff4500) for eerie glow
- Fog: Matches background, 10-50 units

### Animations
- Grave hover: Float (sin wave), glow (emissive)
- Modal: Slide in from top with fade
- Loading: Pulse opacity
- Header: Flicker text shadow

## Data Models

### Repo Type
```typescript
interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  pushed_at: string;
  language: string | null;
  stargazers_count: number;
}
```

### AIResponse Type
```typescript
interface AIResponse {
  joke: string;
  verdict: "RESURRECT" | "RIP";
  reason: string;
}
```

## Security Considerations

### SC-1: API Key Protection
- Store keys in .env (not committed)
- Use VITE_ prefix for client-side access
- Provide .env.example template

### SC-2: Rate Limiting
- GitHub: Use personal token for 5000 req/hour
- Gemini: Implement request throttling
- Cache responses where possible

### SC-3: Input Validation
- Sanitize username input
- Validate API responses
- Handle malformed data gracefully
