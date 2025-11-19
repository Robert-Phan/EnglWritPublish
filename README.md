# EnglWritPublish

A SvelteKit-based static site generator that converts Markdown files into beautifully formatted HTML pages with automatic table of contents navigation.

## Features

- 📝 Markdown to HTML conversion
- 📑 Automatic table of contents from headings
- 🎨 Beige-themed, readable design with 12pt sans-serif font
- 📱 Responsive layout with sidebar navigation
- 🚀 Automatic deployment to GitHub Pages
- ⚡ Built with SvelteKit and Vite

## Getting Started

### Adding Content

1. Place your Markdown files in the `content/` directory
2. Optionally add frontmatter with a `title` field:

```markdown
---
title: My Page Title
---

# My Page Title

Your content here...
```

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build:pages

# Preview production build
npm run preview
```

### Manual Build

To manually build the site and generate static HTML pages:

```bash
npm run build:pages
```

The built files will be in the `build/` directory.

## Deployment

The site is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Push to the `main` branch to trigger deployment

### Important Configuration

The `svelte.config.js` is configured with the base path `/EnglWritPublish`. If your repository name is different, update this line:

```javascript
paths: {
  base: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME' : ''
}
```

## Project Structure

```
.
├── content/              # Markdown files go here
│   └── example.md
├── src/
│   ├── routes/
│   │   ├── +page.svelte # Home page (lists all pages)
│   │   ├── +page.ts     # Loads list of pages
│   │   └── [slug]/      # Dynamic route for each markdown file
│   │       ├── +page.svelte
│   │       └── +page.ts
├── static/
│   └── .nojekyll        # Prevents Jekyll processing
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment
└── svelte.config.js     # SvelteKit configuration
```

## Styling

- Font: 12pt sans-serif
- Background: Beige (#f5f5dc)
- Sidebar: Fixed on the left with table of contents
- Content: Max-width 900px, centered

## Technologies

- [SvelteKit](https://kit.svelte.dev/) - Web framework
- [Marked](https://marked.js.org/) - Markdown parser
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Frontmatter parser
- [Vite](https://vitejs.dev/) - Build tool

