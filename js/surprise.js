// =======================================
// SURPRISE PAGE - Dynamic Content Loader
// =======================================

document.addEventListener('DOMContentLoaded', async () => {
  // Get surprise ID from URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const surpriseId = urlParams.get('id');
  
  if (!surpriseId) {
    showExpiredMessage('Invalid surprise link. Please check your URL.');
    return;
  }
  
  try {
    // For GitHub Pages static hosting, load from JSON file
    const response = await fetch('../data/surprises.json');
    const allSurprises = await response.json();
    const data = allSurprises[surpriseId];
    
    if (!data || data.expired || !data.enabled) {
      showExpiredMessage(data?.message || 'This surprise link has expired or is no longer available.');
    } else {
      // Check if expired by date
      if (data.expireDate) {
        const expireDate = new Date(data.expireDate);
        const today = new Date();
        if (today > expireDate) {
          showExpiredMessage('This surprise has expired.');
          return;
        }
      }
      showSurprise(data);
    }
  } catch (error) {
    console.error('Error loading surprise:', error);
    showExpiredMessage('Sorry, something went wrong. Please try again later.');
  }
});

function showSurprise(data) {
  const container = document.getElementById('surprise-content');
  
  // Check if it's an anniversary page
  const isAnniversary = data.title.toLowerCase().includes('anniversary');
  
  // Determine icon based on type
  const icon = isAnniversary ? '💕' : '🎁';
  
  // Add special class for anniversary pages
  if (isAnniversary) {
    document.querySelector('.surprise-container').classList.add('anniversary-page');
  }
  
  container.innerHTML = `
    <div class="surprise-icon">${icon}</div>
    <h1 class="surprise-title">${data.title}</h1>
    <p class="surprise-message">${data.message}</p>
    
    ${data.video ? `
      <video class="surprise-video" controls autoplay muted>
        <source src="${data.video}" type="video/mp4">
      </video>
    ` : ''}
    
    ${data.discountCode ? `
      <div class="discount-section">
        <div class="discount-code">${data.discountCode}</div>
        <p class="discount-text">${data.discountText}</p>
      </div>
    ` : ''}
    
    <div style="margin-top: 3rem;">
      <a href="/" class="surprise-home-link">View Tropical Charm Collection</a>
    </div>
  `;
  
  // Trigger appropriate animation
  if (isAnniversary) {
    createRomanticEffects();
  } else {
    createConfetti();
  }
}

function showExpiredMessage(message) {
  const container = document.getElementById('surprise-content');
  
  container.innerHTML = `
    <div class="surprise-expired">
      <div class="surprise-expired-icon">🌺</div>
      <p class="surprise-expired-message">${message}</p>
      <a href="/" class="surprise-home-link">Return to Home</a>
    </div>
  `;
}

// Simple confetti effect
function createConfetti() {
  const colors = ['#d4af37', '#1a4d2e', '#ffd8d8', '#7a9b76'];
  const confettiCount = 50;
  
  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.width = '10px';
      confetti.style.height = '10px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.top = '-10px';
      confetti.style.borderRadius = '50%';
      confetti.style.opacity = '0.8';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '1000';
      
      document.body.appendChild(confetti);
      
      const duration = 2000 + Math.random() * 2000;
      const xMovement = (Math.random() - 0.5) * 200;
      
      confetti.animate([
        { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 0.8 },
        { transform: `translateY(${window.innerHeight + 20}px) translateX(${xMovement}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
      ], {
        duration: duration,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      });
      
      setTimeout(() => confetti.remove(), duration);
    }, i * 50);
  }
}

// Romantic effects for anniversary pages
function createRomanticEffects() {
  // Create highly visible, beautiful animations
  createFloatingHearts();
  createFloatingFlowers();
  createSparkleStars();
  createGentleParticles();
}

// Floating Hearts Animation - Clearly Visible
function createFloatingHearts() {
  const hearts = ['❤️', '💕', '💖', '💗', '💝', '💞'];
  
  // Create continuous stream of hearts
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'float-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    
    const duration = 6 + Math.random() * 3; // 6-9 seconds (faster to reach top)
    heart.style.animation = `heartFloat ${duration}s linear forwards`;
    
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), duration * 1000);
  }, 1500); // New heart every 1.5 seconds
}

// Floating Flowers Animation - Clearly Visible
function createFloatingFlowers() {
  const flowers = ['🌸', '🌺', '🌼', '🌻', '🌷', '💐', '🏵️'];
  
  // Create continuous stream of flowers
  setInterval(() => {
    const flower = document.createElement('div');
    flower.className = 'float-flower';
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.left = Math.random() * 100 + '%';
    
    const duration = 7 + Math.random() * 3; // 7-10 seconds (faster to reach top)
    flower.style.animation = `flowerFloat ${duration}s linear forwards`;
    
    document.body.appendChild(flower);
    
    setTimeout(() => flower.remove(), duration * 1000);
  }, 2000); // New flower every 2 seconds
}

// Sparkle Stars - Twinkling Effect
function createSparkleStars() {
  // Create fewer stars - reduced from 25 to 12
  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      const star = document.createElement('div');
      star.className = 'sparkle-star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      
      const duration = 2 + Math.random() * 2; // 2-4 seconds
      star.style.animation = `starTwinkle ${duration}s ease-in-out infinite`;
      star.style.animationDelay = Math.random() * 3 + 's';
      
      document.body.appendChild(star);
    }, i * 100);
  }
}

// Gentle Particles - Drifting Effect
function createGentleParticles() {
  const colors = [
    'rgba(255, 182, 193, 0.85)',
    'rgba(255, 192, 203, 0.85)',
    'rgba(255, 218, 224, 0.8)',
    'rgba(212, 175, 55, 0.75)',
    'rgba(255, 228, 225, 0.85)'
  ];
  
  // Create particles continuously
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const particle = document.createElement('div');
      particle.className = 'gentle-particle';
      particle.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, transparent)`;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      
      // Random drift direction
      const driftX = (Math.random() - 0.5) * 200;
      const driftY = (Math.random() - 0.5) * 200;
      particle.style.setProperty('--drift-x', driftX + 'px');
      particle.style.setProperty('--drift-y', driftY + 'px');
      
      const duration = 8 + Math.random() * 8; // 8-16 seconds
      particle.style.animation = `particleDrift ${duration}s ease-in-out infinite`;
      particle.style.animationDelay = Math.random() * 5 + 's';
      
      document.body.appendChild(particle);
    }, i * 150);
  }
}
