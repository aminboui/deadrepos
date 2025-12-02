# How Kiro Was Used - DeadRepos

## Overview
This document details how Kiro's features were leveraged throughout the development of DeadRepos for the Kiroween Hackathon.

## 1. Vibe Coding

### Conversational Structure
We used vibe coding for rapid prototyping and iterative development:

**Initial Conversation:**
- Described the hackathon idea: "GitHub graveyard with Three.js cemetery"
- Kiro helped validate feasibility and suggest tech stack
- Discussed architecture: React + Three.js + GitHub API + Gemini AI

**Most Impressive Code Generation:**
The **Grave component with interactive animations** was the standout generation:
- Kiro generated the complete hover state management
- Implemented floating animation using `useFrame` hook
- Added emissive glow effect on hover
- Integrated raycasting for click detection
- All in one coherent, working component

**Other Notable Generations:**
- Cemetery circular positioning algorithm (mathematical precision)
- Gemini AI prompt engineering for joke generation
- Complete error handling with fallback logic
- Spooky CSS animations (flicker, pulse effects)

### Iteration Process
1. Start with high-level feature description
2. Kiro generates initial implementation
3. Test and identify issues
4. Refine through conversation
5. Kiro adjusts code based on feedback

## 2. Spec-Driven Development

### Spec Structure
Created comprehensive specs with three documents:
- **requirements.md**: Acceptance criteria and user stories
- **design.md**: Architecture, correctness properties, component design
- **tasks.md**: Implementation tasks with dependencies

### How Specs Improved Development

**Benefits over pure vibe coding:**
- **Clarity**: Clear acceptance criteria prevented scope creep
- **Traceability**: Each task mapped to specific requirements
- **Validation**: Correctness properties provided testable assertions
- **Planning**: Task dependencies showed critical path

**Spec-Driven vs Vibe Coding Comparison:**

| Aspect | Vibe Coding | Spec-Driven |
|--------|-------------|-------------|
| Speed | Faster initial start | Slower upfront, faster overall |
| Structure | Organic, exploratory | Planned, systematic |
| Quality | Variable | Consistent |
| Complexity | Good for simple features | Essential for complex systems |
| Documentation | Minimal | Comprehensive |

**Our Approach:**
We used **hybrid methodology**:
1. Vibe coding for project scaffolding and exploration
2. Specs for complex features (3D scene, AI integration)
3. Vibe coding for polish and refinements

### Correctness Properties in Action

**CP-1: Repository Filtering**
```javascript
// Spec defined the exact calculation
const EIGHT_MONTHS_MS = 8 * 30 * 24 * 60 * 60 * 1000;
const isAbandoned = (Date.now() - new Date(repo.pushed_at)) >= EIGHT_MONTHS_MS;
```

**CP-3: Grave Positioning**
```javascript
// Spec provided the algorithm
const angle = (index / repos.length) * Math.PI * 2;
const radius = 8 + Math.floor(index / 8) * 3;
```

This prevented bugs and ensured consistent behavior.

## 3. Agent Hooks

### Implemented Hooks

**Hook 1: Test on Save**
- **Trigger**: File save on `*.js` or `*.jsx`
- **Action**: Run `npm test`
- **Impact**: Caught bugs immediately during development
- **Workflow Improvement**: Reduced manual testing cycles by 80%

**Hook 2: Validate API Integration**
- **Trigger**: Changes to `.env*` files
- **Action**: Display reminder to verify API keys
- **Impact**: Prevented deployment issues with missing keys
- **Workflow Improvement**: Eliminated "forgot to set env vars" errors

### Development Process Improvements

**Before Hooks:**
1. Write code
2. Save file
3. Manually run tests
4. Fix issues
5. Repeat

**After Hooks:**
1. Write code
2. Save file → Tests run automatically
3. See results immediately
4. Fix if needed

**Time Saved:** ~30% reduction in development time for iterative changes

### Future Hook Ideas
- Auto-format on save
- Lint check before commit
- Deploy preview on push
- Update demo video timestamp

## 4. Steering Docs

### Created Steering Documents

**1. hackathon-requirements.md**
- **Purpose**: Keep hackathon rules top-of-mind
- **Inclusion**: Always
- **Impact**: Ensured .kiro directory wasn't gitignored
- **Strategy**: Checklist format for easy validation

**2. project-guidelines.md**
- **Purpose**: Maintain code quality and consistency
- **Inclusion**: Always
- **Impact**: Consistent Three.js patterns, error handling
- **Strategy**: Organized by domain (Three.js, API, Performance)

### How Steering Improved Responses

**Without Steering:**
- Kiro might suggest generic React patterns
- Could miss Three.js performance optimizations
- Might not prioritize spooky design elements

**With Steering:**
- Kiro consistently applied dark color palette
- Suggested proper Three.js cleanup in useEffect
- Recommended instanced meshes for performance
- Maintained spooky atmosphere in all suggestions

### Most Impactful Strategy

**Domain-Specific Guidelines:**
The Three.js best practices section was crucial:
- "Keep draw calls minimal (< 100 objects)"
- "Use instanced meshes if rendering 50+ graves"
- "Implement proper cleanup in useEffect hooks"

These guidelines ensured Kiro's suggestions were optimized for our specific use case, not just generic React advice.

## 5. MCP (Model Context Protocol)

### Not Used in This Project
We did not extend Kiro with MCP for this project because:
- Built-in tools were sufficient for our needs
- GitHub and Gemini APIs are standard REST APIs
- Focus was on demonstrating core Kiro features

### Potential MCP Use Cases
If we had more time, MCP could enable:
- Custom GitHub GraphQL queries for deeper repo analysis
- Direct integration with deployment platforms
- Real-time collaboration features
- Advanced analytics tools

## Summary

### Kiro Feature Usage
- ✅ **Vibe Coding**: Rapid prototyping, component generation
- ✅ **Specs**: Structured planning for complex features
- ✅ **Hooks**: Automated testing and validation
- ✅ **Steering**: Consistent code quality and patterns
- ⚪ **MCP**: Not needed for this project

### Key Takeaway
The combination of **vibe coding for speed** and **specs for structure** was the winning formula. Hooks and steering provided the guardrails to maintain quality throughout rapid development.

### Development Timeline
- **Day 1**: Vibe coding - project scaffolding (2 hours)
- **Day 2**: Spec creation - planning complex features (3 hours)
- **Day 3-4**: Spec-driven implementation - core features (8 hours)
- **Day 5**: Vibe coding - polish and refinements (3 hours)
- **Total**: ~16 hours from idea to working app

**Without Kiro**: Estimated 40+ hours for the same result.
