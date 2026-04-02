# Academic Website for Suhas Sreehari

A professional academic website built with Jekyll and hosted on GitHub Pages.

## Quick Start

### Prerequisites

- Ruby (version 2.7 or higher)
- RubyGems
- Git

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Run locally:**
   ```bash
   bundle exec jekyll serve
   ```

4. **View in browser:**
   Open http://localhost:4000 in your web browser

### Deployment to GitHub Pages

1. **Create a GitHub repository:**
   - Go to github.com and create a new repository
   - Name it: `yourusername.github.io` (replace `yourusername` with your GitHub username)
   - Make it public

2. **Initialize and push:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Under "Source", select "main" branch
   - Click Save

4. **Wait a few minutes** and your site will be live at:
   `https://yourusername.github.io`

## Customization

### Update Configuration

Edit `_config.yml`:
- Replace `yourusername` with your GitHub username
- Add your social media handles
- Update contact information

### Add Your Photo

1. Add your profile photo to `assets/images/`
2. Name it `profile.jpg` (or update the reference in `index.md`)

### Add Your CV PDF

1. Copy your CV PDF to `assets/`
2. Name it `CV_Sreehari_March_2026.pdf` (or update the links in `cv.md`)

### Update Content

- **Home page:** Edit `index.md`
- **Research:** Edit `research.md`
- **Publications:** Edit `publications.md`
- **Teaching:** Edit `teaching.md`
- **CV:** Edit `cv.md`

### Customize Styling

Edit `assets/css/style.css` to modify:
- Colors
- Fonts
- Layout
- Spacing

## Structure

```
.
├── _config.yml          # Site configuration
├── Gemfile              # Ruby dependencies
├── index.md             # Home page
├── research.md          # Research page
├── publications.md      # Publications page
├── teaching.md          # Teaching page
├── cv.md                # CV page
├── assets/
│   ├── css/
│   │   └── style.css    # Custom styles
│   ├── images/
│   │   └── profile.jpg  # Your photo (add this)
│   └── CV_Sreehari_March_2026.pdf  # Your CV PDF (add this)
└── README.md            # This file
```

## Adding Content

### Blog Posts

Create a new file in `_posts/` directory:
```
_posts/2026-04-02-my-post-title.md
```

With front matter:
```yaml
---
layout: post
title: "My Post Title"
date: 2026-04-02
categories: research
---

Your content here...
```

### Research Projects

Create files in `_projects/` directory with similar structure.

## Troubleshooting

### Bundle install fails
```bash
gem install bundler
bundle update
```

### Jekyll serve fails
```bash
bundle update jekyll
```

### GitHub Pages not updating
- Check repository Settings → Pages
- Ensure main branch is selected
- Check Actions tab for build errors
- Changes can take 1-5 minutes to appear

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)

## License

This template is free to use and modify for academic purposes.

## Contact

For questions about this website template:
- Email: suhas.sreehari@ieee.org
