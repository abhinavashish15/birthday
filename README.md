# 🎉 Birthday Surprise Website

A beautiful, interactive birthday surprise website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **🏠 Home Page**: Animated landing page with floating hearts and navigation cards
- **💌 Love Letter**: A heartfelt birthday letter with rose petal animations
- **📸 Memory Lane**: Photo gallery section to showcase your favorite moments together
- **🎂 Birthday Cake**: Interactive cake with clickable candles and confetti celebration
- **🎁 Birthday Wishes**: 12 gift boxes with special wishes to unwrap

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd birthday-surprise
```

2. Install dependencies (already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 🎨 Customization

### 1. Personalize the Love Letter

Edit `app/letter/page.tsx` and modify the `letterContent` array to write your own heartfelt message.

### 2. Add Your Photos

To add real photos to the Memory Lane section:

1. Place your photos in the `public` folder (e.g., `public/photo1.jpg`, `public/photo2.jpg`)
2. Edit `app/memories/page.tsx`
3. Replace the emoji placeholders with `<Image>` components:

```tsx
import Image from 'next/image';

// Replace the emoji div with:
<Image 
  src="/photo1.jpg" 
  alt="Memory" 
  width={300} 
  height={300} 
  className="rounded-2xl object-cover"
/>
```

### 3. Customize Colors

The website uses Tailwind CSS. You can change color schemes throughout the pages:
- `from-pink-400` → `from-blue-400`
- `to-purple-500` → `to-green-500`

### 4. Add More Wishes

Edit `app/wishes/page.tsx` and add more objects to the `wishes` array with your custom wishes.

## 📱 Mobile Responsive

The website is fully responsive and works beautifully on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Desktops

## 🎯 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click!

Your girlfriend can access the website from anywhere with the Vercel URL.

## 🎁 Pro Tips

- **Timing**: Share the link at midnight on her birthday for maximum surprise!
- **Personal Touch**: Record yourself reading the letter and add an audio player
- **Custom Domain**: Get a custom domain like `happybirthday[hername].com`
- **Analytics**: Add analytics to see when she visits each page

## 💖 Made With Love

Built with:
- ⚡ Next.js 15
- 🎨 Tailwind CSS
- 🎬 Framer Motion
- 💙 TypeScript

---

**Happy Birthday to your special someone! 🎂🎉**

