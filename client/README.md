# LuxeCart - E-commerce Platform

## 🚀 Deploy to Vercel

### Method 1: Vercel Dashboard (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com/new)
3. Click **"Import Project"**
4. Select your GitHub repository
5. **Important Settings:**
   - **Root Directory**: `client`
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
6. Click **"Deploy"**

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Go to client folder
cd client

# Deploy
vercel

# For production
vercel --prod
```

## 🎯 Features

- ✅ Next.js 16 with App Router
- ✅ Built-in API Routes (serverless)
- ✅ In-memory data storage
- ✅ No database needed
- ✅ Fully responsive design
- ✅ Ready for Vercel deployment

## 🛠️ Local Development

```bash
cd client
npm install
npm run dev
```

Visit http://localhost:3000

## 📝 Notes

- Data resets on each deployment (in-memory storage)
- Perfect for demos and assignments
- No environment variables needed
