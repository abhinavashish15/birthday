# 📸 How to Add Your Memory Photos

## Folder Structure

Each memory category has its own folder:

```
public/memories/
├── first-meeting/     - Photos from when you first met
├── first-date/        - Photos from your first date
├── adventures/        - Adventure and travel photos
├── silly-moments/     - Fun and silly photos together
├── late-night/        - Photos from late night moments
├── our-song/          - Photos related to your special song
├── cozy-mornings/     - Morning coffee and cozy moments
└── special-moments/   - Any other special memories
```

## How to Add Photos

### Step 1: Add Your Images

1. Copy your photos to the appropriate folder
2. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
3. Name them simply: `photo1.jpg`, `photo2.jpg`, etc.

### Step 2: Update the Code

Now each memory has its own dedicated page! Open the specific memory page and update the `images` array at the top:

**For First Meeting:** `app/memories/first-meeting/page.tsx`
```typescript
const images: string[] = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'];
```

**For First Date:** `app/memories/first-date/page.tsx`
**For Adventures:** `app/memories/adventures/page.tsx`
**For Silly Moments:** `app/memories/silly-moments/page.tsx`
**For Late Night:** `app/memories/late-night/page.tsx`
**For Our Song:** `app/memories/our-song/page.tsx`
**For Cozy Mornings:** `app/memories/cozy-mornings/page.tsx`
**For Special Moments:** `app/memories/special-moments/page.tsx`

## 🎨 Unique Designs for Each Memory

- **First Meeting** - Polaroid-style gallery with sparkles ✨
- **First Date** - Scrapbook style with heart decorations 💕
- **Adventures** - Adventure map style with pins 🌈
- **Silly Moments** - Comic book style with speech bubbles 🎭
- **Late Night Talks** - Dreamy night theme with stars 🌙
- **Our Song** - Vinyl record album style 🎵
- **Cozy Mornings** - Warm wooden frame style ☕
- **Special Moments** - Magical masonry gallery ✨

## Example

If you have these files:
```
public/memories/first-meeting/
├── us_at_cafe.jpg
├── first_smile.jpg
└── holding_hands.jpg
```

Update `app/memories/first-meeting/page.tsx`:
```typescript
const images: string[] = ['us_at_cafe.jpg', 'first_smile.jpg', 'holding_hands.jpg'];
```

## Tips

- ✅ Use high-quality images for best results
- ✅ Name files clearly so you remember them
- ✅ Keep file sizes reasonable (under 5MB each)
- ✅ Use descriptive names like `beach_sunset.jpg` instead of `IMG_1234.jpg`

Enjoy your beautiful memory gallery! 💕✨

