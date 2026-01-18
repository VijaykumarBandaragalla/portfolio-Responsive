function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// More effective animations
document.addEventListener('DOMContentLoaded', () => {
  // Add fade-in classes to all sections
  const sections = document.querySelectorAll('section');
  const containers = document.querySelectorAll('.details-container');
  const articles = document.querySelectorAll('article');
  
  // Add fade-in class to elements
  [...sections, ...containers, ...articles].forEach(el => {
    el.classList.add('fade-in');
  });
  
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  // Observe all fade-in elements
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
  
  // Staggered animation for articles
  articles.forEach((article, index) => {
    article.style.transitionDelay = `${index * 0.1}s`;
  });
  
  // Skill bar animation trigger
  const skillBars = document.querySelectorAll('.skill-progress');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  });
  
  skillBars.forEach(bar => {
    bar.style.animationPlayState = 'paused';
    skillObserver.observe(bar);
  });
});
// Add more dynamic colorful effects
document.addEventListener('DOMContentLoaded', () => {
  // Existing code...
  
  // Random color particles
  function createColorParticles() {
    const colors = ['#87ceeb', '#4a90e2', '#6bb6ff', '#87ceeb', '#4a90e2'];
    
    setInterval(() => {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        left: ${Math.random() * window.innerWidth}px;
        top: ${window.innerHeight}px;
        animation: floatUp 4s linear forwards;
      `;
      
      document.body.appendChild(particle);
      
      setTimeout(() => particle.remove(), 4000);
    }, 2000);
  }
  
  // Add floating particles animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes floatUp {
      to {
        transform: translateY(-${window.innerHeight + 100}px) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  
  createColorParticles();
  
  // Color-changing navigation on scroll
  let colorIndex = 0;
  const navColors = ['#87ceeb', '#4a90e2', '#6bb6ff', '#87ceeb', '#4a90e2'];
  
  window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const nav = document.querySelector('nav');
    
    if (nav) {
      nav.style.background = `linear-gradient(90deg, ${navColors[Math.floor(scrollPercent * navColors.length)]}, rgba(255,255,255,0.9))`;
      nav.style.backdropFilter = 'blur(10px)';
    }
  });
  
  // Interactive skill bars
  document.querySelectorAll('.skill-progress').forEach(bar => {
    bar.addEventListener('mouseenter', () => {
      bar.style.transform = 'scaleY(2)';
      bar.style.filter = 'brightness(1.3)';
    });
    
    bar.addEventListener('mouseleave', () => {
      bar.style.transform = 'scaleY(1)';
      bar.style.filter = 'brightness(1)';
    });
  });
});
// Modal functionality for project details
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}