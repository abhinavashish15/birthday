# 🎨 Customization Guide

## Quick Personalization Steps

### 1. 💌 Edit the Love Letter

**File:** `app/letter/page.tsx`

Find the `letterContent` array (around line 14) and replace it with your own message:

```typescript
const letterContent = [
  "My Dearest [Her Name],",
  "",
  "Your personalized message here...",
  // Add more lines...
];
```

### 2. 📸 Add Real Photos to Memory Lane

**File:** `app/memories/page.tsx`

#### Option A: Use External Image URLs
Replace the placeholder emojis in the photo grid section:

```typescript
// Instead of emoji placeholders, use:
<img 
  src="https://your-image-url.com/photo1.jpg" 
  alt="Memory"
  className="w-full h-full object-cover rounded-2xl"
/>
```

#### Option B: Use Local Images
1. Add photos to the `public` folder:
   - `public/photo1.jpg`
   - `public/photo2.jpg`
   - etc.

2. Import Next.js Image component:
```typescript
import Image from 'next/image';
```

3. Replace placeholders:
```typescript
<Image 
  src="/photo1.jpg" 
  alt="Memory"
  width={300} 
  height={300} 
  className="rounded-2xl object-cover"
/>
```

### 3. ✨ Customize Memories

**File:** `app/memories/page.tsx`

Edit the `memories` array (around line 8) to reflect your actual memories:

```typescript
const memories = [
  {
    id: 1,
    emoji: '🎬',  // Change emoji
    title: 'Our First Movie Date',  // Change title
    description: 'We watched [movie name] and...',  // Your story
    color: 'from-pink-400 to-rose-500',
  },
  // Add more memories...
];
```

### 4. 🎁 Add More Wishes

**File:** `app/wishes/page.tsx`

Add to the `wishes` array (around line 7):

```typescript
{
  id: 13,
  icon: '🌹',  // Choose any emoji
  wish: 'Your custom wish here',
  color: 'from-red-400 to-pink-500',
},
```

### 5. 🎂 Customize Cake Wish Message

**File:** `app/cake/page.tsx`

Find the "My Wish For You" section and edit:

```typescript
<p className="text-xl text-gray-700 leading-relaxed">
  Your personalized birthday wish here...
</p>
```

## 🎨 Change Color Schemes

### Gradient Backgrounds
Replace color combinations in any page:

```typescript
// Current
className="bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400"

// Change to your preferred colors
className="bg-gradient-to-br from-blue-300 via-cyan-300 to-teal-400"
```

### Available Tailwind Colors:
- `pink`, `purple`, `indigo`, `blue`, `cyan`, `teal`
- `green`, `yellow`, `orange`, `red`, `rose`
- Shades: `300`, `400`, `500`, `600`, etc.

## 🎵 Add Background Music

1. Add an MP3 file to `public` folder: `public/birthday-song.mp3`

2. Add this to any page:

```typescript
'use client';
import { useEffect, useRef } from 'react';

export default function Page() {
  const audioRef = useRef<HTMLAudioElement>(null);
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/birthday-song.mp3" type="audio/mpeg" />
      </audio>
      {/* Rest of your page */}
    </>
  );
}
```

## 📝 Change Her Name

Replace "To the most amazing person in my life" in:
- `app/page.tsx` (line ~55)

```typescript
<motion.p className="text-2xl md:text-4xl text-white font-semibold mb-12 drop-shadow-lg">
  To [Her Name], the love of my life
</motion.p>
```

## 🌟 Add a Countdown Timer

Add to `app/page.tsx`:

```typescript
const [timeLeft, setTimeLeft] = useState('');

useEffect(() => {
  const birthdayDate = new Date('2025-11-10T00:00:00'); // Set her birthday
  
  const timer = setInterval(() => {
    const now = new Date();
    const difference = birthdayDate.getTime() - now.getTime();
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  }, 1000);
  
  return () => clearInterval(timer);
}, []);

// Display it:
<p className="text-2xl text-white">{timeLeft}</p>
```

## 🚀 Deploy to Vercel

1. Create a GitHub account (if you don't have one)
2. Create a new repository
3. Push your code:
```bash
git init
git add .
git commit -m "Birthday surprise website"
git branch -M main
git remote add origin https://github.com/yourusername/birthday-surprise.git
git push -u origin main
```

4. Go to [vercel.com](https://vercel.com)
5. Sign in with GitHub
6. Click "Import Project"
7. Select your repository
8. Click "Deploy"

You'll get a URL like: `https://birthday-surprise.vercel.app`

## 💡 Pro Tips

1. **Test First**: Always test on your phone before sharing!
2. **Private Repo**: Keep your GitHub repository private
3. **Share Wisely**: Send the link at the perfect moment (midnight?)
4. **Custom Domain**: Buy a domain like `happybirthdaybabe.com` on Vercel
5. **Screenshots**: Take screenshots in case she wants to revisit later

## 🐛 Common Issues

**Images not loading?**
- Make sure they're in the `public` folder
- Use `/photo.jpg` not `public/photo.jpg`

**Animations not working?**
- Clear browser cache
- Try incognito mode

**Deployment failed?**
- Check for TypeScript errors: `npm run build`
- Check for linting errors: `npm run lint`

---

**Need more help?** The code is well-commented and easy to modify! 💖

