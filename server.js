const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/videos', express.static(path.join(__dirname, 'videos')));
app.use('/data', express.static(path.join(__dirname, 'data')));

// API endpoint to get surprise page data
app.get('/api/surprise/:id', (req, res) => {
  const surpriseId = req.params.id;
  const dataPath = path.join(__dirname, 'data', 'surprises.json');
  
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const surprise = data[surpriseId];
    
    if (!surprise) {
      return res.status(404).json({ error: 'Surprise not found' });
    }
    
    // Check if enabled
    if (!surprise.enabled) {
      return res.json({ expired: true, message: 'Sorry, this surprise has expired.' });
    }
    
    // Check expiration date
    const expireDate = new Date(surprise.expireDate);
    const now = new Date();
    
    if (now > expireDate) {
      return res.json({ expired: true, message: 'Sorry, this surprise has expired.' });
    }
    
    // Return the surprise data
    res.json({ expired: false, ...surprise });
    
  } catch (error) {
    console.error('Error reading surprises:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Serve main pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'products.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/surprise/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'surprise', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🌺 Tropical Charm website running on http://localhost:${PORT}`);
});
