# Tropical Charm Website - Deployment Guide

## 🚀 Quick Start

```bash
npm install
npm start
```

Visit: http://localhost:3000

## 🌐 Deployment Options

### Option 1: Netlify (Recommended for Static + Functions)

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Initialize and deploy:
   ```bash
   netlify init
   netlify deploy --prod
   ```

4. Configure serverless functions if needed

### Option 2: Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow prompts to complete deployment

### Option 3: Traditional VPS/Hosting

1. Upload all files via FTP/SFTP
2. SSH into your server
3. Install Node.js if not already installed
4. Navigate to project directory
5. Run:
   ```bash
   npm install
   npm start
   ```

6. For production, use PM2:
   ```bash
   npm install -g pm2
   pm2 start server.js --name tropical-charm
   pm2 save
   pm2 startup
   ```

### Option 4: Heroku

1. Create `Procfile`:
   ```
   web: node server.js
   ```

2. Deploy:
   ```bash
   heroku login
   heroku create tropical-charm
   git push heroku main
   ```

## 🔧 Environment Variables

For production, set these variables:

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Set to "production"

## 📱 Social Media Setup

Before deploying, update social media links in:

`js/main.js` - Update the `openSocialMedia()` function:

```javascript
const links = {
  instagram: 'https://instagram.com/YOUR_USERNAME',
  tiktok: 'https://tiktok.com/@YOUR_USERNAME',
  facebook: 'https://facebook.com/YOUR_PAGE',
  whatsapp: 'https://wa.me/94XXXXXXXXX'
};
```

## 🎁 Managing Surprise Pages

### To add a new surprise page:

1. Edit `data/surprises.json`
2. Add new entry:
   ```json
   "your-surprise-id": {
     "enabled": true,
     "expireDate": "2026-12-31",
     "title": "Your Title",
     "message": "Your message",
     "discountCode": "CODE123",
     "discountText": "Get 10% off with CODE123"
   }
   ```

3. Generate QR code pointing to:
   `https://yourdomain.com/surprise/your-surprise-id`

### To disable a surprise page:

Set `"enabled": false` in `data/surprises.json`

## 🖼️ Adding Images

1. **Logo**: Add your logo to `images/logo.png`
2. **Products**: Add product images to `images/products/`
3. **Videos**: Add surprise videos to `videos/`

## 🔒 Security Notes

- Surprise pages are "hidden" but not password-protected
- QR codes provide security through obscurity
- For sensitive content, consider adding authentication

## 📊 Analytics

To add Google Analytics:

Add this to the `<head>` of each HTML file:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎨 Customization

### Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
  --tropical-green: #1a4d2e;
  --soft-gold: #d4af37;
  --ivory: #faf8f3;
}
```

### Fonts

Current fonts: Cormorant Garamond & Montserrat

To change, update the `@import` in `css/styles.css`

## 🐛 Troubleshooting

### Server won't start
- Check if port 3000 is in use
- Run: `PORT=3001 npm start` to use a different port

### Surprise pages not loading
- Check `data/surprises.json` syntax
- Verify the surprise ID matches the URL
- Check server logs for errors

### Images not showing
- Verify image paths are correct
- Check file names match exactly (case-sensitive)
- Ensure images are in the correct folders

## 📞 Support Checklist

Before going live:

- [ ] Update all social media links
- [ ] Add your logo image
- [ ] Add product images
- [ ] Update WhatsApp number
- [ ] Test on mobile devices
- [ ] Test surprise page system
- [ ] Set up analytics
- [ ] Configure domain name
- [ ] Enable HTTPS/SSL

---

Ready to charm the world! 🌺
