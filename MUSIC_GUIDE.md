# 🎵 How to Add Music to Your Birthday Surprise

Your birthday surprise page now has background music support! Follow these simple steps to add your favorite song.

## 📝 Quick Steps

### Option 1: Add Your Own Music File (Recommended)

1. **Choose your music file** - Pick a sweet birthday song or romantic music
   - Supported formats: `.mp3`, `.wav`, `.ogg`
   - Recommended: Use MP3 for best compatibility

2. **Rename your file** to `birthday-music.mp3`

3. **Copy the file** to the `public` folder:
   ```
   birthday-surprise/
   └── public/
       └── birthday-music.mp3  ← Put your file here
   ```

4. **That's it!** The music will automatically play when they click "Let's Go! ✨"

### Option 2: Use a Different Filename

If you want to keep your original filename:

1. Add your music file to the `public` folder (e.g., `my-song.mp3`)

2. Update `app/page.tsx` line 21:
   ```typescript
   const audio = new Audio('/birthday-music.mp3');
   ```
   Change to:
   ```typescript
   const audio = new Audio('/my-song.mp3');
   ```

### Option 3: Use an Online URL

You can also use music from a URL:

```typescript
const audio = new Audio('https://example.com/your-music.mp3');
```

## 🎼 Recommended Birthday Songs

Here are some popular choices:

- **Happy Birthday (Instrumental)** - Classic choice
- **A Thousand Years - Christina Perri (Instrumental)**
- **All of Me - John Legend (Instrumental)**
- **Perfect - Ed Sheeran (Instrumental)**
- **La Vie en Rose (Instrumental)**
- **Canon in D - Pachelbel**

## 🎛️ Music Control Features

The page includes a beautiful music control button in the top-right corner:

- **🎵 Music Note** - Shows when music is playing (rotates continuously)
- **🔇 Muted** - Shows when music is paused
- **Click to toggle** - Play/pause the music anytime
- **Auto-starts** - Music begins when visitor clicks "Let's Go! ✨"
- **Loops forever** - The music repeats automatically
- **Volume set to 40%** - Perfect background level (adjust in code if needed)

## ⚙️ Adjust Volume

To change the music volume, edit line 23 in `app/page.tsx`:

```typescript
audio.volume = 0.4;  // 0.0 (silent) to 1.0 (full volume)
```

Recommended settings:
- Background music: `0.3` - `0.5`
- Foreground music: `0.6` - `0.8`

## 📱 Mobile Compatibility

Note: On iOS devices, audio autoplay is restricted. The music will start when the user:
1. Clicks the "Let's Go! ✨" button, or
2. Manually clicks the music control button

## 🎨 Customize the Music Button

The music button location and style can be customized in `app/page.tsx` around line 64-108.

Current position: `top-6 right-6` (top-right corner)

Change to:
- Bottom-right: `bottom-6 right-6`
- Top-left: `top-6 left-6`
- Bottom-left: `bottom-6 left-6`

---

## 🔗 Where to Get Free Music

**Royalty-Free Music Sources:**
- [Pixabay Music](https://pixabay.com/music/)
- [Free Music Archive](https://freemusicarchive.org/)
- [YouTube Audio Library](https://www.youtube.com/audiolibrary)
- [Incompetech](https://incompetech.com/music/)
- [Bensound](https://www.bensound.com/)

**Important:** Always check the license and give credit if required!

---

Enjoy your musical birthday surprise! 🎉🎵✨

