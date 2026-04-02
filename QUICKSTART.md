# Quick Deployment Guide

## Step 1: Prepare Your Files

Before uploading, you need to add two files:

1. **Profile Photo**
   - Location: `assets/images/profile.jpg`
   - Size: 500x500px or larger (square)
   - Format: JPG or PNG

2. **CV PDF**
   - Location: `assets/CV_Sreehari_March_2026.pdf`
   - Your latest CV in PDF format

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `yourusername.github.io` (replace `yourusername` with YOUR GitHub username)
3. Make it **Public**
4. Do NOT initialize with README
5. Click "Create repository"

## Step 3: Update Configuration

Edit `_config.yml` and update:
- Line 7: `url: "https://yourusername.github.io"` (use YOUR username)
- Line 8-10: Add your social media handles (optional)

## Step 4: Upload to GitHub

### Option A: Using GitHub Web Interface (Easiest)

1. Go to your new repository
2. Click "uploading an existing file"
3. Drag and drop ALL files from this folder
4. Scroll down and click "Commit changes"

### Option B: Using Git Command Line

```bash
# In the sreehari-website folder, run:
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/YOURUSERNAME.github.io.git
git push -u origin main
```

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in left sidebar
4. Under "Build and deployment":
   - Source: "GitHub Actions"
5. Click "Save"

## Step 6: Wait and Visit

1. Go to "Actions" tab
2. Wait for the green checkmark (usually 1-2 minutes)
3. Visit: `https://yourusername.github.io`

## Troubleshooting

**Site not appearing?**
- Check Actions tab for errors
- Ensure repository is public
- Ensure repository name is exactly `yourusername.github.io`
- Wait 5 minutes and try again

**Layout looks broken?**
- Check that `_config.yml` url is correct
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**Want to test locally first?**
```bash
# Install Ruby first (ruby-lang.org)
# Then run:
gem install bundler jekyll
bundle install
bundle exec jekyll serve

# Visit: http://localhost:4000
```

## Next Steps

### Customize Your Site

1. **Update social links** in `_config.yml`
2. **Edit pages:**
   - `index.md` - Home page
   - `research.md` - Research interests
   - `publications.md` - Your papers
   - `teaching.md` - Teaching experience
   - `cv.md` - CV summary

3. **Add blog posts** (optional):
   Create files in `_posts/` folder:
   ```
   _posts/2026-04-02-my-first-post.md
   ```

4. **Customize colors** in `assets/css/style.css`

### Keep It Updated

To update your site:
1. Edit files in your local copy
2. Commit and push to GitHub
3. Site updates automatically in 1-2 minutes

## Need Help?

- Jekyll docs: https://jekyllrb.com/docs/
- GitHub Pages: https://docs.github.com/en/pages
- Email me: suhas.sreehari@ieee.org
