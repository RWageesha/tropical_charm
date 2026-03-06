# 🌺 Tropical Charm Website - Quick Start Guide

## ⚡ Installation (5 minutes)

### Step 1: Install Node.js
If you don't have Node.js installed:
- Download from https://nodejs.org
- Install the LTS version
- Verify: Open terminal and run `node --version`

### Step 2: Install Dependencies
```bash
cd "d:\Recovery\Tropical Charm Web site\tropical_charm"
npm install
```

### Step 3: Start the Website
```bash
npm start
```

### Step 4: Open in Browser
Visit: **http://localhost:3000**

✅ You should see the Tropical Charm homepage!

---

## 🎨 First Customizations (10 minutes)

### 1. Update Social Media Links

Edit `js/main.js` (around line 50):

```javascript
const links = {
  instagram: 'https://instagram.com/YOUR_ACTUAL_USERNAME',
  tiktok: 'https://tiktok.com/@YOUR_ACTUAL_USERNAME',
  facebook: 'https://facebook.com/YOUR_PAGE_NAME',
  whatsapp: 'https://wa.me/94XXXXXXXXX'  // Your actual WhatsApp number
};
```

### 2. Add Your Logo

Replace `images/logo.png` with your actual logo image.

Recommended size: 500x300 pixels (PNG with transparent background)

### 3. Test Your First Surprise Page

Visit in your browser:
```
http://localhost:3000/surprise/gift-bloom-2026
```

You should see a surprise page with confetti! 🎉

---

## 🎁 Create Your First Custom Surprise (5 minutes)

### Edit `data/surprises.json`:

Add your own surprise:

```json
{
  "gift-bloom-2026": { ... existing ... },
  
  "my-first-surprise": {
    "enabled": true,
    "expireDate": "2026-12-31",
    "title": "Welcome! 🌺",
    "message": "Thank you for being amazing!",
    "discountCode": "WELCOME10",
    "discountText": "Enjoy 10% off with code WELCOME10",
    "video": ""
  }
}
```

### Test it:
```
http://localhost:3000/surprise/my-first-surprise
```

### Generate QR Code:

1. Open `qr-generator.html` in your browser
2. Enter:
   - Domain: `localhost:3000` (or your actual domain)
   - Surprise ID: `my-first-surprise`
3. Click "Generate QR Code"
4. Download and test with your phone!

---

## 📱 Add Product Images (Optional)

1. Create folder: `images/products/`
2. Add images named after your products:
   - `crystal-bloom.jpg`
   - `ocean-blue.jpg`
   - `tropical-forest.jpg`
   - etc.

3. Update `data/products.json` with actual image paths

---

## 🚀 Deploy to Internet (When Ready)

### Option A: Netlify (Free)

1. Push code to GitHub
2. Go to netlify.com
3. "New site from Git"
4. Connect your repository
5. Deploy!

### Option B: Vercel (Free)

```bash
npm install -g vercel
vercel
```

Follow the prompts - done!

See **DEPLOYMENT.md** for detailed instructions.

---

## 📋 Daily Workflow

### To start the website:
```bash
npm start
```

### To stop the website:
Press `Ctrl + C` in the terminal

### To make changes:
1. Edit files
2. Save
3. Refresh browser (most changes)
4. Restart server for JS changes (Ctrl+C, then npm start)

---

## 🆘 Troubleshooting

### "npm: command not found"
→ Install Node.js from https://nodejs.org

### "Port 3000 already in use"
→ Stop other programs using port 3000, or use:
```bash
PORT=3001 npm start
```

### "Cannot find module"
→ Run:
```bash
npm install
```

### Pages show "Cannot GET"
→ Make sure server is running (`npm start`)

### QR code doesn't work
→ Check that:
- Server is running
- Surprise ID matches surprises.json
- Surprise is enabled and not expired

---

## ✅ Pre-Launch Checklist

Before showing to customers:

- [ ] Updated all social media links
- [ ] Added your logo
- [ ] Updated WhatsApp number
- [ ] Tested on mobile phone
- [ ] Created and tested a surprise page
- [ ] Generated QR code and tested it
- [ ] Checked all pages load correctly
- [ ] Reviewed product information

---

## 📚 More Help

- **Full documentation**: README.md
- **Surprise pages guide**: SURPRISE_PAGES_GUIDE.md
- **Deployment guide**: DEPLOYMENT.md

---

## 🎉 You're All Set!

Your Tropical Charm website is ready to charm the world! 🌺

**Questions?** Check the guides above or review the code comments.

---

*Forever Tropical Style – Your Charm, Our Passion* 💚
