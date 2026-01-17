# Deploy to Vercel

## ✅ Your app is ready to deploy!

### Quick Deploy

1. **Install Vercel CLI** (if not installed):
   ```bash
   npm install -g vercel
   ```

2. **Deploy from client folder**:
   ```bash
   cd client
   vercel
   ```

3. **Follow prompts**:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **luxecart** (or your choice)
   - Directory? **./client** 
   - Override settings? **N**

4. **Production deployment**:
   ```bash
   vercel --prod
   ```

### Via Vercel Dashboard (Alternative)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. **Root Directory**: Set to `client`
5. **Framework Preset**: Next.js (auto-detected)
6. Click **"Deploy"**

---

## What's included:

✅ **Frontend**: Next.js app  
✅ **Backend API**: Built-in serverless functions at `/api/items`  
✅ **Database**: In-memory storage (data resets on redeploy - perfect for demos)  
✅ **No environment variables needed**  

## Test locally:

```bash
cd client
npm run dev
```

Visit: http://localhost:3000

API endpoint: http://localhost:3000/api/items
