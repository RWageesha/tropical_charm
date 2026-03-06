# 🎁 How to Use Surprise Pages

## Overview

Surprise pages are hidden gift pages that customers can access via QR codes. They're perfect for:
- Thank you messages
- Exclusive discount codes
- Special video messages
- Limited-time offers

## Creating a Surprise Page

### Step 1: Add to surprises.json

Open `data/surprises.json` and add a new surprise:

```json
{
  "your-unique-id": {
    "enabled": true,
    "expireDate": "2026-12-31",
    "title": "A Little Surprise For You 🌺",
    "message": "Thank you for choosing Tropical Charm!",
    "discountCode": "BLOOM15",
    "discountText": "Use code BLOOM15 for 15% off your next order",
    "video": ""
  }
}
```

### Step 2: Choose a Unique ID

The ID should be:
- Unique for each surprise
- URL-friendly (no spaces or special characters)
- Descriptive (e.g., "summer-gift-2026")

### Step 3: Set Expiration Date

Set `expireDate` in YYYY-MM-DD format:
- Example: "2026-04-10" = April 10, 2026
- The surprise will automatically expire after this date

### Step 4: Generate QR Code

The surprise page URL will be:
```
https://yourdomain.com/surprise/your-unique-id
```

Generate a QR code for this URL using:
- QR Code Generator websites (qr-code-generator.com)
- Canva QR code tool
- Any QR code creation tool

### Step 5: Print on Gift Cards

Add the QR code to your gift cards or thank you cards.

## Managing Surprises

### Disable a Surprise

To immediately disable a surprise without deleting it:

```json
{
  "old-surprise": {
    "enabled": false,
    ...
  }
}
```

### Extend Expiration

Simply update the `expireDate`:

```json
{
  "my-surprise": {
    "enabled": true,
    "expireDate": "2027-01-31",
    ...
  }
}
```

### Add Video

Place your video in the `videos/` folder and reference it:

```json
{
  "video-surprise": {
    "enabled": true,
    "expireDate": "2026-12-31",
    "title": "Special Thank You!",
    "message": "Watch this special message from us!",
    "discountCode": "",
    "discountText": "",
    "video": "/videos/thankyou.mp4"
  }
}
```

## Example Surprises

### 1. Discount Code Only

```json
{
  "new-customer-2026": {
    "enabled": true,
    "expireDate": "2026-06-30",
    "title": "Welcome to Tropical Charm! 🌴",
    "message": "As a thank you for your first order, here's a special gift!",
    "discountCode": "WELCOME20",
    "discountText": "Get 20% off your next purchase with code WELCOME20",
    "video": ""
  }
}
```

### 2. Thank You Message

```json
{
  "thank-you-march": {
    "enabled": true,
    "expireDate": "2026-04-15",
    "title": "Thank You! 💚",
    "message": "Your support means everything to us. We're grateful to have you as part of the Tropical Charm family!",
    "discountCode": "",
    "discountText": "",
    "video": ""
  }
}
```

### 3. Video Message with Code

```json
{
  "birthday-special": {
    "enabled": true,
    "expireDate": "2026-12-31",
    "title": "Happy Birthday! 🎉",
    "message": "We made something special for you!",
    "discountCode": "BIRTHDAY25",
    "discountText": "Birthday treat: 25% off with code BIRTHDAY25",
    "video": "/videos/birthday.mp4"
  }
}
```

## Best Practices

### Timing
- Create surprises 2-3 weeks in advance
- Set expiration dates 2-4 weeks after distribution
- Review and disable expired surprises monthly

### IDs
Use descriptive IDs:
- ✅ Good: "summer-sale-2026", "thank-you-march"
- ❌ Bad: "s1", "surprise123"

### Messages
Keep them:
- Personal and warm
- Short and sweet
- Aligned with your brand voice

### Discount Codes
- Make them memorable (BLOOM15, SUNSHINE20)
- Avoid confusion with similar codes
- Track usage in your order system

## Testing

Before distributing:

1. Visit the URL in your browser
2. Scan the QR code with your phone
3. Check that all content displays correctly
4. Verify the expiration date is correct
5. Test on both mobile and desktop

## Sample Gift Card Message

```
Dear Valued Customer,

Thank you for choosing Tropical Charm! 
We've included a special surprise just for you.

Scan the QR code below to reveal your gift 🎁

[QR CODE HERE]

With love,
Tropical Charm Team
```

## Tracking

To track surprise page views, add analytics:

```javascript
// In js/surprise.js, add:
function trackSurpriseView(surpriseId) {
  // Add your analytics code here
  // Google Analytics, Facebook Pixel, etc.
}
```

## FAQ

**Q: Can customers access surprise pages without QR codes?**
A: Yes, if they have the direct URL. The pages are "hidden" (not linked from navigation) but not password-protected.

**Q: What happens when a surprise expires?**
A: Visitors see a friendly message: "Sorry, this surprise has expired" with a link back to the home page.

**Q: Can I reuse a surprise ID?**
A: Yes, but only after the previous one expires or is deleted.

**Q: How do I delete a surprise?**
A: Simply remove it from `surprises.json` or set `enabled: false`.

---

Need help? Check the main README.md or server.js code comments! 🌺
