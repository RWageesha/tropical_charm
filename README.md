# Tropical Charm Website

![Tropical Charm Logo](images/logo.png)

**Forever Tropical Style – Your Charm, Our Passion**

## 🌺 About This Project

A beautiful, elegant website for Tropical Charm - a Sri Lankan fashion accessories brand specializing in handpicked tropical-inspired claw clips and accessories.

This website features:
- 🎨 **Sri Lankan tropical design** with Araliya (frangipani) motifs
- 🌴 **Premium brand showcase** for products
- 💬 **Social media integration** for orders (Instagram, WhatsApp, TikTok, Facebook)
- 🎁 **Hidden surprise page system** with QR code access and expiration functionality
- 📱 **Fully responsive** mobile-first design
- ✨ **Elegant animations** and smooth user experience

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js with Express
- **Styling:** Custom CSS with CSS Variables
- **Fonts:** Google Fonts (Cormorant Garamond, Montserrat)

## 📂 Project Structure

```
tropical-charm-website/
│
├── index.html              # Home page
├── products.html           # Products showcase
├── about.html              # Brand story
├── contact.html            # Contact & social links
├── server.js               # Node.js server
├── package.json            # Dependencies
│
├── css/
│   └── styles.css          # Main stylesheet
│
├── js/
│   ├── main.js             # Main JavaScript
│   └── surprise.js         # Surprise page logic
│
├── data/
│   ├── products.json       # Product data
│   └── surprises.json      # Surprise pages configuration
│
├── surprise/
│   └── index.html          # Hidden surprise page template
│
├── images/                 # Images folder (add your images here)
│   ├── logo.png
│   └── products/
│
└── videos/                 # Videos for surprise pages
```

## 🚀 Getting Started

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   ```
   http://localhost:3000
   ```

## 🎁 Surprise Page System

### How it Works

The website includes a special feature for **hidden surprise pages** that customers can access via QR codes on gift cards.

### Creating Surprise Pages

Edit `data/surprises.json`:

```json
{
  "gift-bloom-2026": {
    "enabled": true,
    "expireDate": "2026-04-10",
    "title": "A Little Surprise For You 🌺",
    "message": "Thank you for choosing Tropical Charm!",
    "discountCode": "BLOOM15",
    "discountText": "Use code BLOOM15 for 15% off your next order",
    "video": "/videos/thankyou.mp4"
  }
}
```

### Accessing Surprise Pages

- **URL Format:** `http://yourdomain.com/surprise/gift-bloom-2026`
- **QR Code:** Generate QR codes pointing to these URLs
- **Expiration:** Pages automatically expire based on `expireDate` field
- **Enable/Disable:** Set `enabled: false` to manually disable a surprise

### Managing Surprises

To disable a surprise page:
1. Open `data/surprises.json`
2. Set `"enabled": false` or change `expireDate` to a past date
3. Save the file - changes take effect immediately

## 📝 Customization

### Update Social Media Links

Edit `js/main.js` and update the social media URLs:

```javascript
const links = {
  instagram: 'https://instagram.com/your-username',
  tiktok: 'https://tiktok.com/@your-username',
  facebook: 'https://facebook.com/your-page',
  whatsapp: 'https://wa.me/94XXXXXXXXX'
};
```

### Add Products

Edit `data/products.json`:

```json
{
  "id": "new-product",
  "name": "New Combo Name",
  "price": "LKR 1,500",
  "image": "/images/products/new-product.jpg",
  "description": "Product description here"
}
```

### Color Palette

The website uses these colors (defined in `css/styles.css`):

- **Tropical Green:** `#1a4d2e`
- **Soft Gold:** `#d4af37`
- **Ivory:** `#faf8f3`
- **Sage Green:** `#7a9b76`
- **Light Gold:** `#f4e4c1`

## 📱 Adding Images

1. Add your logo to `images/logo.png`
2. Add product images to `images/products/`
3. Add any decorative images to `images/`

## 🌐 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Build command: (leave empty for static files)
4. Publish directory: `.`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Traditional Hosting

1. Upload all files to your web server
2. Ensure Node.js is installed on the server
3. Run `npm install` on the server
4. Start the server with `npm start` or use PM2 for production

## 📄 Pages Overview

- **Home (`/`)**: Hero section, featured products, brand intro
- **Products (`/products.html`)**: Complete product catalog
- **About (`/about.html`)**: Brand story and values
- **Contact (`/contact.html`)**: Social media links, FAQ, ordering info
- **Surprise (`/surprise/:id`)**: Hidden gift pages (not in navigation)

## 🎨 Design Features

- ✅ Elegant serif + sans-serif typography
- ✅ Tropical color palette (green, gold, ivory)
- ✅ Smooth animations and transitions
- ✅ Responsive mobile design
- ✅ Floating flower decorations
- ✅ Mandala-inspired patterns
- ✅ Premium boutique aesthetic

## 📞 Support

For questions or issues with this website template, please check the code comments or documentation.

## 📜 License

This project is created for Tropical Charm brand. All rights reserved.

---

**Made with 🌺 in Sri Lanka**

*Forever Tropical Style – Your Charm, Our Passion*
