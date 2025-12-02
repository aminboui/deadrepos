# 🚀 GitHub Deployment Guide - DeadRepos

## Step-by-Step Guide to Upload Your Project to GitHub

### Prerequisites ✅

Before you start, make sure you have:
- [ ] Git installed on your computer
- [ ] A GitHub account (create one at https://github.com/signup)
- [ ] Your project files ready
- [ ] Terminal/Command Prompt access

---

## Part 1: Prepare Your Project 📦

### Step 1: Verify .gitignore
Make sure your `.gitignore` file is correct (it should already be set up):

```bash
# Check if .gitignore exists
ls -la | grep .gitignore
```

Your `.gitignore` should include:
```
node_modules/
.env
.env.local
dist/
build/
*.log
.DS_Store
```

**IMPORTANT**: Make sure `.kiro/` is NOT in `.gitignore` (it's required for the hackathon!)

### Step 2: Create .env.example (if not exists)
Your `.env.example` should look like this:
```
VITE_GITHUB_TOKEN=your_github_token_here
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### Step 3: Test Your Build
```bash
# Make sure everything builds correctly
npm run build
```

If you see errors, fix them before proceeding.

---

## Part 2: Initialize Git Repository 🎯

### Step 4: Open Terminal
Navigate to your project folder:
```bash
cd /path/to/deadrepos
```

### Step 5: Initialize Git
```bash
# Initialize a new Git repository
git init
```

You should see: `Initialized empty Git repository in...`

### Step 6: Add All Files
```bash
# Add all files to staging
git add .
```

### Step 7: Create First Commit
```bash
# Commit with a message
git commit -m "Initial commit: DeadRepos - Kiroween Hackathon 2025"
```

You should see a summary of files added.

---

## Part 3: Create GitHub Repository 🌐

### Step 8: Go to GitHub
1. Open your browser
2. Go to https://github.com
3. Log in to your account

### Step 9: Create New Repository
1. Click the **"+"** icon in the top-right corner
2. Select **"New repository"**

### Step 10: Configure Repository
Fill in the details:

**Repository name**: `deadrepos`

**Description**: 
```
💀 DeadRepos - A spooky 3D cemetery for abandoned GitHub repositories. Built with Kiro for Kiroween Hackathon 2025. Walk through your forgotten code and let AI judge if it deserves resurrection!
```

**Visibility**: 
- ✅ **Public** (required for hackathon)

**Initialize repository**:
- ❌ Do NOT check "Add a README file"
- ❌ Do NOT add .gitignore
- ❌ Do NOT choose a license
(We already have these files!)

### Step 11: Click "Create repository"

---

## Part 4: Connect Local to GitHub 🔗

### Step 12: Copy Repository URL
After creating the repository, you'll see a page with commands. Copy the repository URL:
```
https://github.com/YOUR_USERNAME/deadrepos.git
```

### Step 13: Add Remote Origin
In your terminal, run:
```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/deadrepos.git
```

### Step 14: Verify Remote
```bash
# Check if remote was added correctly
git remote -v
```

You should see:
```
origin  https://github.com/YOUR_USERNAME/deadrepos.git (fetch)
origin  https://github.com/YOUR_USERNAME/deadrepos.git (push)
```

---

## Part 5: Push to GitHub ⬆️

### Step 15: Rename Branch to Main
```bash
# Rename master to main (GitHub's default)
git branch -M main
```

### Step 16: Push Your Code
```bash
# Push to GitHub
git push -u origin main
```

You might be asked to authenticate:
- **Username**: Your GitHub username
- **Password**: Use a Personal Access Token (not your password!)

### Step 17: Create Personal Access Token (if needed)
If you don't have a token:

1. Go to https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: `DeadRepos Deployment`
4. Select scopes: ✅ **repo** (all checkboxes under repo)
5. Click **"Generate token"**
6. **COPY THE TOKEN** (you won't see it again!)
7. Use this token as your password when pushing

### Step 18: Verify Upload
1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/deadrepos`
2. You should see all your files!
3. Check that `.kiro/` directory is visible

---

## Part 6: Verify Hackathon Requirements ✅

### Step 19: Check Required Files
Make sure these are visible on GitHub:

- ✅ `README.md` - Project description
- ✅ `LICENSE` - MIT License
- ✅ `.kiro/` directory - **CRITICAL FOR HACKATHON**
  - ✅ `.kiro/specs/github-graveyard/`
  - ✅ `.kiro/hooks/`
  - ✅ `.kiro/steering/`
- ✅ `package.json` - Dependencies
- ✅ `src/` directory - Source code
- ✅ `public/` directory - Assets (if you have sound files)

### Step 20: Update README with GitHub URL
Edit your `README.md` and add:
```markdown
## 🌐 Live Demo
[Coming Soon - Will be deployed to Vercel]

## 📦 GitHub Repository
https://github.com/YOUR_USERNAME/deadrepos
```

Then commit and push:
```bash
git add README.md
git commit -m "docs: Add GitHub repository link"
git push
```

---

## Part 7: Deploy to Vercel (Optional but Recommended) 🚀

### Step 21: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 22: Login to Vercel
```bash
vercel login
```

Follow the prompts to authenticate.

### Step 23: Deploy
```bash
# Deploy to Vercel
vercel
```

Answer the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No
- **Project name?** → deadrepos
- **Directory?** → ./
- **Override settings?** → No

### Step 24: Add Environment Variables
```bash
# Add GitHub token
vercel env add VITE_GITHUB_TOKEN

# Add Gemini API key
vercel env add VITE_GEMINI_API_KEY
```

Paste your actual keys when prompted.

### Step 25: Deploy to Production
```bash
vercel --prod
```

You'll get a URL like: `https://deadrepos.vercel.app`

### Step 26: Update README with Live URL
```bash
# Edit README.md and add your Vercel URL
git add README.md
git commit -m "docs: Add live demo URL"
git push
```

---

## Part 8: Final Verification 🎯

### Step 27: Test Everything

**On GitHub:**
- [ ] Repository is public
- [ ] All files are visible
- [ ] `.kiro/` directory is present
- [ ] README looks good
- [ ] LICENSE is MIT

**On Vercel (if deployed):**
- [ ] Site loads correctly
- [ ] Can enter GitHub username
- [ ] Cemetery renders
- [ ] Graves are interactive
- [ ] AI analysis works
- [ ] Sounds play

### Step 28: Get Your Links Ready

For hackathon submission, you'll need:

1. **GitHub Repository**: 
   ```
   https://github.com/YOUR_USERNAME/deadrepos
   ```

2. **Live Demo**: 
   ```
   https://deadrepos.vercel.app
   ```

3. **Demo Video**: 
   ```
   https://youtube.com/watch?v=YOUR_VIDEO_ID
   ```

---

## Troubleshooting 🔧

### Problem: "Permission denied (publickey)"
**Solution**: Use HTTPS instead of SSH, or set up SSH keys:
```bash
# Use HTTPS URL
git remote set-url origin https://github.com/YOUR_USERNAME/deadrepos.git
```

### Problem: ".kiro directory not showing on GitHub"
**Solution**: Check your `.gitignore`:
```bash
# Make sure .kiro/ is NOT in .gitignore
cat .gitignore | grep .kiro
```

If it's there, remove it:
```bash
# Edit .gitignore and remove the .kiro/ line
# Then:
git add .kiro/
git commit -m "fix: Include .kiro directory for hackathon"
git push
```

### Problem: "Build fails on Vercel"
**Solution**: 
1. Check build locally: `npm run build`
2. Make sure all dependencies are in `package.json`
3. Check Vercel logs for specific errors

### Problem: "Environment variables not working"
**Solution**:
1. Make sure they're prefixed with `VITE_`
2. Redeploy after adding variables: `vercel --prod`
3. Check Vercel dashboard → Settings → Environment Variables

### Problem: "Large files won't upload"
**Solution**:
```bash
# Check file sizes
du -sh public/sounds/*

# If sound files are too large (>100MB), compress them
# Or use Git LFS (Large File Storage)
```

---

## Quick Reference Commands 📝

### Daily Git Workflow
```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "feat: Add new feature"

# Push to GitHub
git push

# Pull latest changes
git pull
```

### Commit Message Conventions
```bash
git commit -m "feat: Add new feature"      # New feature
git commit -m "fix: Fix bug in graves"     # Bug fix
git commit -m "docs: Update README"        # Documentation
git commit -m "style: Improve CSS"         # Styling
git commit -m "refactor: Clean up code"    # Code refactoring
git commit -m "perf: Optimize rendering"   # Performance
git commit -m "test: Add tests"            # Tests
```

---

## Next Steps 🎬

After deploying to GitHub:

1. ✅ **Record Demo Video** (3 minutes)
2. ✅ **Upload to YouTube/Vimeo**
3. ✅ **Submit to Hackathon** with all three links
4. ✅ **Share on Social Media** (#Kiroween)
5. ✅ **Write Blog Post** (bonus prize!)

---

## Support 💬

If you get stuck:
- **GitHub Docs**: https://docs.github.com
- **Vercel Docs**: https://vercel.com/docs
- **Git Basics**: https://git-scm.com/book/en/v2

---

## Checklist Before Submission ✅

- [ ] Code pushed to GitHub
- [ ] Repository is public
- [ ] `.kiro/` directory is visible
- [ ] README has description and links
- [ ] LICENSE file is present (MIT)
- [ ] Live demo is deployed and working
- [ ] Demo video is recorded and uploaded
- [ ] All three URLs are ready for submission

---

**You're ready to submit! Good luck with the hackathon! 🎃🏆**

*Built with Kiro for Kiroween 2025* 💀
