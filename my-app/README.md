### 📺 Streambox (Next.js 14 + TMDB)

A lightweight Netflix-style streaming dashboard built with Next.js 14 (App Router), TypeScript, and Tailwind CSS, fetching real-time movie data from The Movie Database (TMDB).

This project includes:

Hero banner

Popular movies row

Movie detail page

Responsive UI

API route abstraction

Clean component structure

### 🚀 Features

Server-side movie fetching using TMDB API

Dynamic routing (/movie/[id])

Hero banner with backdrop image

Horizontal movie rows

Client-side loading for additional categories

Optimized images with Next.js Image component

Responsive & mobile-ready

### 🛠 Tech Stack

Next.js 14 (App Router)

React 19

TypeScript

Tailwind CSS 4

TMDB API

Node.js 18/20

Deployed on Vercel

### 📦 Installation

Clone the repo:

git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO


### Install dependencies:

npm install

### 🔐 Environment Variables

Create a .env.local file in the project root:

TMDB_API_KEY=YOUR_TMDB_KEY_HERE


Your TMDB key must be active and generated from:

👉 https://www.themoviedb.org/settings/api


### ⚠ IMPORTANT for Windows + Jio Hotspot Users

If you use Windows + Jio hotspot, Node.js cannot reach TMDB due to ISP blocking.
Browser & Postman work, but Node fetch fails.

This results in:

TypeError: fetch failed
ETIMEDOUT connect 49.44.79.236:443

### ✔ Solutions:

Use a VPN (Cloudflare Warp / ProtonVPN works 100%)

Or use a different network (Airtel/Vodafone, home WiFi)

Or use USB tethering (not hotspot)

Or disable ISP-level filtering

This is not a code error — it’s a network restriction.

▶️ Running the Project

### Start development server:

npm run dev


### Build for production:

npm run build
npm run start

### Project folder structure ###
my-streaming-dashboard/
│
├── app/
│   ├── api/
│   │   └── tmdb/
│   │       ├── popular/
│   │       │   └── route.ts
│   │       ├── topRated/
│   │       │   └── route.ts
│   │       └── nowPlaying/
│   │           └── route.ts
│   │
│   ├── movie/
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── HeroBanner.tsx
│   │   ├── MovieCard.tsx
│   │   ├── MovieRow.tsx
│   │   ├── PopularMovies.tsx
│   │   
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── lib/
│   └── tmdb.ts
│
├── types/
│   └── movie.ts
│
├── public/
│   └── (assets like icons, logos if any)
│
├── .env.local
│
├── next.config.ts
├── tailwind.config.ts
├── package.json
└── README.md


### 🌐 Image Optimization Configuration

next.config.ts includes:

images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "image.tmdb.org",
      pathname: "/t/p/**"
    }
  ]
}


This allows TMDB image loading through Next.js Image.

### 📄 Scripts (package.json)
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}

### 🧪 API Testing

You can test the backend connection:

curl https://api.themoviedb.org/3/movie/popular?api_key=YOUR_KEY


If curl works but Node fetch fails → your network is blocking Node traffic.



