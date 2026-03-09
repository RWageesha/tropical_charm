// =======================================
// TROPICAL CHARM - Main JavaScript
// =======================================

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add active class to current page nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage || 
        (currentPage === '' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // Fade in animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.product-card, .contact-card, .about-content').forEach(el => {
    observer.observe(el);
  });
});

// Load products dynamically
async function loadProducts(limit = null) {
  try {
    const response = await fetch('./data/products.json');
    const products = await response.json();
    const productsToShow = limit ? products.slice(0, limit) : products;
    return productsToShow;
  } catch (error) {
    console.error('Error loading products:', error);
    return [];
  }
}

// Render products
function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = products.map(product => `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;background:#f5f5f5;color:#888;\'>🌺 ${product.name}</div>'">
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <p class="product-description">${product.description}</p>
        <button class="product-button" onclick="orderProduct('${product.name}')">
          Order via WhatsApp
        </button>
      </div>
    </div>
  `).join('');
}

// Order product via WhatsApp
function orderProduct(productName) {
  const message = encodeURIComponent(`Hi! I'm interested in ordering the ${productName}. Can you provide more details?`);
  const whatsappNumber = '94XXXXXXXXX'; // Replace with actual number
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}

// Social media links
function openSocialMedia(platform) {
  const links = {
    instagram: 'https://instagram.com/tropicalcharm',
    tiktok: 'https://tiktok.com/@tropicalcharm',
    facebook: 'https://facebook.com/tropicalcharm',
    whatsapp: 'https://wa.me/94XXXXXXXXX'
  };
  
  if (links[platform]) {
    window.open(links[platform], '_blank');
  }
}
