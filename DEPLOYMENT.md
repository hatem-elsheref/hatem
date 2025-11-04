# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## Method 1: Using GitHub Actions (Recommended)

### Step 1: Update Repository Name
1. Make sure your repository name is `hatem-codes-showcase` (or update `vite.config.ts` and `App.tsx` base paths)
2. If your repository has a different name:
   - Update the `base` path in `vite.config.ts`:
     ```typescript
     base: process.env.NODE_ENV === "production" ? "/your-repo-name/" : "/",
     ```
   - Update the `basename` in `App.tsx`:
     ```typescript
     <BrowserRouter basename="/your-repo-name">
     ```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### Step 3: Push to GitHub
```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

The GitHub Actions workflow will automatically:
- Build your project
- Deploy to GitHub Pages
- Make your site available at: `https://hatem-elsheref.github.io/hatem-codes-showcase/`

**Note:** The first deployment might take a few minutes. You can check the progress in the **Actions** tab of your repository.

---

## Method 2: Using gh-pages Package (Alternative)

### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 2: Update vite.config.ts
The base path is already configured. Make sure it matches your repository name:
```typescript
base: process.env.NODE_ENV === "production" ? "/hatem-codes-showcase/" : "/",
```

### Step 3: Deploy
```bash
npm run deploy
```

This will:
- Build your project
- Deploy the `dist` folder to the `gh-pages` branch
- Make your site available at: `https://hatem-elsheref.github.io/hatem-codes-showcase/`

### Step 4: Configure GitHub Pages
1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Select branch: `gh-pages` and folder: `/ (root)`
4. Click **Save**

---

## Important Notes

### 1. Update Base Path
If your repository name is different, update the `base` in `vite.config.ts`:
```typescript
base: process.env.NODE_ENV === "production" ? "/your-repo-name/" : "/",
```

### 2. React Router Configuration
If you're using React Router, make sure your routes work correctly. The current setup should work fine.

### 3. Custom Domain (Optional)
If you want to use a custom domain:
1. Add a `CNAME` file in the `public` folder with your domain
2. Update DNS settings as per GitHub Pages instructions

### 4. Environment Variables
Make sure any environment variables are properly set in your GitHub Actions workflow if needed.

---

## Troubleshooting

### Issue: 404 on page refresh
- This is normal for React Router on GitHub Pages
- Consider using HashRouter instead of BrowserRouter for simpler deployment

### Issue: Assets not loading
- Check that the `base` path in `vite.config.ts` matches your repository name
- Ensure all asset paths use relative paths or the base path

### Issue: Build fails
- Check GitHub Actions logs for specific errors
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

---

## After Deployment

Your site will be available at:
**https://hatem-elsheref.github.io/hatem-codes-showcase/**

Update the portfolio URL in your README.md and social links!

