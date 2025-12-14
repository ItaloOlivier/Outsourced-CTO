# Outsourced CTO Website

The official website for Outsourced CTO - Your Partner In IT Innovation.

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Railway

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Deploying to Railway

### Method 1: Railway Dashboard

1. Go to [Railway](https://railway.app) and sign in
2. Click "New Project" → "Deploy from GitHub repo"
3. Select this repository
4. Railway will auto-detect Next.js and configure the build

### Method 2: Railway CLI

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init

# Deploy
railway up
```

### Custom Domain Setup

After deploying to Railway:

1. Go to your project settings in Railway dashboard
2. Navigate to "Settings" → "Domains"
3. Add your custom domain: `www.outsourcedcto.co.za`
4. Railway will provide DNS records to configure

### DNS Configuration

At your domain registrar, add these records:

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `<your-railway-app>.up.railway.app`

**For apex domain (outsourcedcto.co.za):**
- Type: `A`
- Name: `@`
- Value: Railway's provided IP address

Or use a `CNAME` flattening service if your registrar supports it.

## Environment Variables

No environment variables are required for basic deployment.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Homepage component
│   └── globals.css     # Global styles & Tailwind
├── public/             # Static assets
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind configuration
├── railway.json        # Railway deployment config
└── package.json        # Dependencies & scripts
```

## License

© 2024 Outsourced CTO. All rights reserved.
