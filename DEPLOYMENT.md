# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Option 1: Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Import `openclaw503/soul-panther-landing`
5. Click "Deploy"
6. Done! Vercel will auto-deploy on every push to `master`

### Option 2: Vercel CLI

```bash
cd ~/.openclaw/workspace/soul-panther-landing
vercel login
vercel --prod
```

## Custom Domain Setup

After deployment:

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add custom domain: `soul-panther.com`
4. Update DNS records at your domain registrar:
   - Add CNAME record pointing to your Vercel deployment
   - Or use Vercel's nameservers for automatic DNS management

## Environment Variables

Currently none required. If you add backend functionality later:

1. Go to Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables

## Automatic Deployments

Every push to `master` branch will trigger a new deployment automatically.

Preview deployments are created for pull requests.

## Build Status

✓ Build tested and working
✓ All pages render correctly
✓ Responsive design verified
✓ Production-ready

---

**Live Site:** Will be available at your Vercel URL after deployment
**GitHub Repo:** https://github.com/openclaw503/soul-panther-landing
