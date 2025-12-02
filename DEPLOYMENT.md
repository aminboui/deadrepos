# 🚀 Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended)
Vercel is perfect for React + Vite apps with zero configuration.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: deadrepos
# - Directory: ./
# - Build command: npm run build
# - Output directory: dist
```

**Environment Variables:**
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add:
   - `VITE_GITHUB_TOKEN` = your_github_token
   - `VITE_GEMINI_API_KEY` = your_gemini_api_key
3. Redeploy: `vercel --prod`

**Custom Domain (Optional):**
- Vercel Dashboard → Domains → Add Domain
- Follow DNS configuration steps

### Option 2: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod

# Follow prompts:
# - Publish directory: dist
```

**Environment Variables:**
1. Netlify Dashboard → Site Settings → Environment Variables
2. Add same variables as above
3. Trigger redeploy

### Option 3: GitHub Pages

```bash
# Install gh-pages
npm i -D gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

**Note:** Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/deadrepos/', // Your repo name
  plugins: [react()],
});
```

**Environment Variables:**
- GitHub Pages doesn't support server-side env vars
- Use GitHub Secrets for Actions if using CI/CD
- Or hardcode fallback mode (not recommended for production)

## Pre-Deployment Checklist

### 1. Test Production Build Locally
```bash
npm run build
npm run preview
```
Visit http://localhost:4173 and test:
- [ ] Cemetery loads correctly
- [ ] Graves render properly
- [ ] API calls work
- [ ] AI analysis functions
- [ ] Sounds play
- [ ] No console errors

### 2. Verify Environment Variables
- [ ] GitHub token is valid (test at https://api.github.com/user)
- [ ] Gemini API key is active
- [ ] Both keys added to hosting platform
- [ ] Keys are prefixed with `VITE_`

### 3. Check .gitignore
- [ ] `.env` is ignored
- [ ] `.kiro/` is NOT ignored (required for hackathon!)
- [ ] `node_modules/` is ignored
- [ ] `dist/` is ignored

### 4. Optimize Assets
```bash
# Check bundle size
npm run build

# Should see:
# dist/assets/index-[hash].js  ~500-800kb (includes Three.js)
# dist/assets/index-[hash].css ~10-20kb
```

If bundle is too large:
- Three.js is the largest dependency (expected)
- Consider code splitting if needed
- Gzip compression happens automatically on most hosts

### 5. Test on Multiple Devices
- [ ] Desktop Chrome
- [ ] Desktop Firefox
- [ ] Desktop Safari
- [ ] Mobile Chrome (touch controls)
- [ ] Mobile Safari

### 6. Performance Check
Open DevTools → Performance:
- [ ] FPS stays above 50 with 20+ graves
- [ ] No memory leaks (check over 2 minutes)
- [ ] Smooth animations

## Post-Deployment

### 1. Update README
Add deployment URL:
```markdown
## 🌐 Live Demo
[https://deadrepos.vercel.app](https://deadrepos.vercel.app)
```

### 2. Test Live Site
- [ ] Enter various GitHub usernames
- [ ] Test error cases (invalid username)
- [ ] Verify AI responses
- [ ] Check sound toggle
- [ ] Test on mobile

### 3. Record Demo Video
Now that it's live, record your 3-minute demo:
- Use the live URL in the video
- Show real GitHub usernames
- Demonstrate all atmospheric effects
- Highlight AI judgments

### 4. Prepare Submission

**Required Links:**
- ✅ GitHub Repository: `https://github.com/[username]/deadrepos`
- ✅ Live Demo: `https://deadrepos.vercel.app`
- ✅ Demo Video: `https://youtube.com/watch?v=...`

**Submission Text:**
```
# DeadRepos

## Category
Primary: Costume Contest
Bonus: Most Creative, Best Startup Project

## Description
A spooky Three.js web application that visualizes abandoned GitHub 
repositories as graves in a haunted 3D cemetery. Features include 
AI-powered resurrection judgments, atmospheric effects (moon, stars, 
particles, fog), procedural audio, and interactive grave digging.

## Links
- Repository: [your-github-url]
- Live Demo: [your-deployment-url]
- Demo Video: [your-youtube-url]

## Kiro Usage
Comprehensive use of all Kiro features:
- Vibe coding for rapid prototyping
- Spec-driven development with 31 tasks
- 3 agent hooks for automation
- 3 steering docs for quality
See .kiro/specs/github-graveyard/kiro-usage.md for details.

## Tech Stack
React, Three.js, React Three Fiber, GitHub API, Google Gemini AI, 
Web Audio API, Post-processing effects

## Highlights
- Professional 3D graphics with 200 particles, 6 trees, moon, stars
- Procedural audio (wind, creaking)
- AI-generated jokes and verdicts
- Two grave variants (cross, tombstone)
- Bloom and vignette post-processing
- 60 FPS performance
```

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Environment Variables Not Working
- Ensure they're prefixed with `VITE_`
- Restart dev server after adding
- Check hosting platform dashboard
- Redeploy after adding variables

### Three.js Not Rendering
- Check WebGL support: https://get.webgl.org/
- Check browser console for errors
- Verify Canvas element exists
- Check if GPU is available

### API Rate Limits
- GitHub: 60 req/hour without token, 5000 with token
- Gemini: Check your quota at https://makersuite.google.com/
- Implement caching if needed

### Performance Issues
- Reduce particle count (200 → 100)
- Disable shadows on some objects
- Lower shadow map size
- Reduce post-processing intensity

## Monitoring

### After Launch
- Check Vercel/Netlify analytics
- Monitor error logs
- Watch for API quota usage
- Collect user feedback

### Metrics to Track
- Page load time
- API success rate
- Average session duration
- Most viewed repos
- Error rate

## Updates

### Hot Fixes
```bash
# Make changes
git add .
git commit -m "fix: description"
git push

# Vercel/Netlify auto-deploys
# Or manually: vercel --prod
```

### Feature Additions
- Create new branch
- Test locally
- Deploy to preview
- Merge to main

## Support

If you encounter issues:
1. Check browser console
2. Verify API keys
3. Test in incognito mode
4. Check hosting platform logs
5. Review GitHub Issues

Good luck with your deployment! 🎃
