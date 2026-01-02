# Deployment Guide - AI Future Summit 2026

## 🚀 Deploy to Vercel (Recommended)

### Method 1: Via GitHub (Easiest & Best)

#### Step 1: Create a GitHub Repository
1. Go to https://github.com/new
2. Name your repository: `ai-future-summit-2026` or `bca-web`
3. Keep it **Public** or **Private** (your choice)
4. **DO NOT** initialize with README (we already have one)
5. Click "Create repository"

#### Step 2: Push Your Code to GitHub
Run these commands in your terminal (replace `YOUR_USERNAME` with your GitHub username):

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/ai-future-summit-2026.git

# Push your code
git branch -M main
git push -u origin main
```

#### Step 3: Deploy on Vercel
1. Go to https://vercel.com/new
2. Click "**Continue with GitHub**"
3. Authorize Vercel to access your GitHub account
4. Find and select your `ai-future-summit-2026` repository
5. Click "**Import**"
6. Vercel will auto-detect Next.js settings:
   - **Framework Preset**: Next.js ✅
   - **Build Command**: `npm run build` ✅
   - **Output Directory**: `.next` ✅
7. Click "**Deploy**"
8. Wait 2-3 minutes for deployment
9. 🎉 Your site is live!

#### Step 4: Update QR Codes
After deployment, you'll get a URL like: `https://ai-future-summit-2026.vercel.app`

Update the QR code URLs in these files:
- `components/sections/VenueSection.tsx` (line 152)
- `components/FloatingQRButton.tsx` (lines 67 & 75)

Change from:
```typescript
const qrCodeUrl = 'http://localhost:3000#register';
```

To:
```typescript
const qrCodeUrl = 'https://YOUR-PROJECT-NAME.vercel.app#register';
```

Then commit and push:
```bash
git add .
git commit -m "Update QR codes with production URL"
git push
```

Vercel will automatically redeploy! ✨

---

### Method 2: Direct CLI Deployment (Alternative)

If you prefer CLI deployment:

#### Step 1: Login to Vercel
```bash
vercel login
```
- A browser window will open
- Log in with GitHub, Google, or Email
- Authorize the CLI

#### Step 2: Deploy
```bash
vercel --prod
```

Answer the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your username/team
- **Link to existing project?** → No
- **What's your project's name?** → `ai-future-summit-2026`
- **In which directory is your code located?** → `./`
- **Want to modify settings?** → No

Wait for deployment to complete!

---

### Method 3: Vercel Dashboard Upload (No Git Required)

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to https://vercel.com/new
3. Click "**Browse**" or drag-and-drop your project folder
4. Upload the entire `BCA-Web` folder
5. Vercel will detect Next.js and deploy automatically

---

## 📝 Post-Deployment Checklist

After your site is live:

- [ ] Test the website on mobile and desktop
- [ ] Scan the QR codes to verify they work
- [ ] Test the registration form
- [ ] Check all sections load correctly
- [ ] Update QR code URLs to production domain
- [ ] Share the link with your team!

---

## 🔧 Custom Domain (Optional)

To use a custom domain like `summit.darshan.ac.in`:

1. Go to your Vercel project dashboard
2. Click "**Settings**" → "**Domains**"
3. Add your custom domain
4. Update your DNS records as instructed by Vercel
5. Wait for DNS propagation (5-30 minutes)

---

## 🎯 Your Deployment URLs

After deployment, you'll have:
- **Production**: `https://your-project.vercel.app`
- **Preview**: Automatic preview for each Git push
- **Analytics**: Available in Vercel dashboard

---

## 💡 Tips

1. **Automatic Deployments**: Every push to `main` branch auto-deploys
2. **Preview Deployments**: Every PR gets a preview URL
3. **Rollbacks**: Easy one-click rollback in Vercel dashboard
4. **Environment Variables**: Add in Vercel dashboard if needed
5. **Analytics**: Enable Web Analytics in project settings

---

## 🆘 Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure `npm run build` works locally
- Check for TypeScript errors

### QR Codes Not Working
- Verify the URL in the code matches your deployment URL
- Clear browser cache
- Test with a different QR scanner app

### Form Not Submitting
- Check browser console for errors
- Verify form validation logic
- Test with different browsers

---

## 📞 Support

Need help? Check:
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- GitHub Issues: Create an issue in your repository

---

**Ready to deploy? Choose Method 1 (GitHub) for the best experience!** 🚀
