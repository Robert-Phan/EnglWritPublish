# GitHub Pages Deployment Checklist

## Prerequisites
- [x] Project built successfully with `npm run build:pages`
- [x] GitHub Actions workflow created at `.github/workflows/deploy.yml`
- [x] Static adapter configured in `svelte.config.js`
- [x] Base path configured correctly

## Steps to Enable GitHub Pages

### 1. Push to GitHub
```bash
git add .
git commit -m "Set up markdown to HTML conversion with GitHub Pages deployment"
git push origin main
```

### 2. Configure GitHub Pages Settings
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
5. Click **Save**

### 3. Monitor Deployment
1. Go to the **Actions** tab in your repository
2. Wait for the "Deploy to GitHub Pages" workflow to complete
3. Once complete, your site will be available at:
   `https://[your-username].github.io/EnglWritPublish/`

### 4. Verify Deployment
- Visit the URL to see your home page
- Click on the markdown pages to verify they render correctly
- Test the sidebar navigation

## Troubleshooting

### If the base path is incorrect
Update `svelte.config.js`:
```javascript
paths: {
  base: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME' : ''
}
```

### If Actions fail
- Check the Actions tab for error messages
- Ensure repository has Actions enabled
- Verify workflow permissions (Settings > Actions > General > Workflow permissions)

### If pages don't load
- Verify `.nojekyll` file exists in the `static/` directory
- Check that GitHub Pages source is set to "GitHub Actions"
- Wait a few minutes - initial deployment can take time

## Adding New Content
After the initial setup, simply:
1. Add new `.md` files to the `content/` directory
2. Commit and push to the `main` branch
3. GitHub Actions will automatically rebuild and redeploy
