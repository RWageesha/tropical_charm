// =======================================
// SURPRISE PAGE - Dynamic Content Loader
// =======================================

document.addEventListener('DOMContentLoaded', async () => {
  // Get surprise ID from URL
  const pathParts = window.location.pathname.split('/');
  const surpriseId = pathParts[pathParts.length - 1] || pathParts[pathParts.length - 2];
  
  if (!surpriseId || surpriseId === 'index.html') {
    showExpiredMessage('Invalid surprise link');
    return;
  }
  
  try {
    // Fetch surprise data from API
    const response = await fetch(`/api/surprise/${surpriseId}`);
    const data = await response.json();
    
    if (data.expired) {
      showExpiredMessage(data.message);
    } else {
      showSurprise(data);
    }
  } catch (error) {
    console.error('Error loading surprise:', error);
    showExpiredMessage('Sorry, something went wrong. Please try again later.');
  }
});

function showSurprise(data) {
  const container = document.getElementById('surprise-content');
  
  container.innerHTML = `
    <div class="surprise-icon">🎁</div>
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
    
    <div style="margin-top: 2rem;">
      <a href="/" class="surprise-home-link">Visit Our Collection</a>
    </div>
  `;
  
  // Trigger confetti animation
  createConfetti();
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
