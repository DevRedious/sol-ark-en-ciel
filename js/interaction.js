(function() {
  'use strict';

  const cursorGlow = document.createElement('div');
  cursorGlow.className = 'cursor-glow';
  document.body.appendChild(cursorGlow);

  let mouseX = 0;
  let mouseY = 0;
  let glowX = 0;
  let glowY = 0;
  let isMouseMoving = false;
  let mouseTimeout;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isMouseMoving) {
      isMouseMoving = true;
      cursorGlow.style.opacity = '1';
    }

    clearTimeout(mouseTimeout);
    mouseTimeout = setTimeout(() => {
      isMouseMoving = false;
      cursorGlow.style.opacity = '0';
    }, 2000);
  });

  function animateCursorGlow() {
    glowX += (mouseX - glowX) * 0.15;
    glowY += (mouseY - glowY) * 0.15;

    cursorGlow.style.transform = `translate(${glowX - 150}px, ${glowY - 150}px)`;

    requestAnimationFrame(animateCursorGlow);
  }

  animateCursorGlow();

  const hoverElements = document.querySelectorAll('.card, .btn, .nav-link, .navbar-brand');
  
  hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursorGlow.style.background = 'radial-gradient(circle, rgba(255, 0, 128, 0.25) 0%, rgba(0, 217, 255, 0.15) 50%, transparent 70%)';
    });

    element.addEventListener('mouseleave', () => {
      cursorGlow.style.background = 'radial-gradient(circle, rgba(255, 0, 128, 0.15) 0%, transparent 70%)';
    });
  });

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, index * 100);
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.card, .alert, h2, .row > div');
  revealElements.forEach(element => {
    element.classList.add('reveal-element');
    revealObserver.observe(element);
  });

  const heroElements = document.querySelectorAll('.hero h1, .hero p, .hero .btn');
  heroElements.forEach(element => {
    element.classList.add('revealed');
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
  });

  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      navbar.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.5)';
    } else {
      navbar.style.boxShadow = '0 2px 16px rgba(0, 0, 0, 0.3)';
    }

    lastScrollTop = scrollTop;
  });

  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        top: ${y}px;
        left: ${x}px;
        pointer-events: none;
        animation: rippleEffect 0.6s ease-out;
      `;

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  const style = document.createElement('style');
  style.textContent = `
    @keyframes rippleEffect {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

})();
