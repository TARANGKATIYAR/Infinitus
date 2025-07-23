// ====== PREMIUM ENHANCED SCRIPT ======

class PremiumWebsite {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initializeAnimations();
    this.setupScrollEffects();
    this.initializeTypedText();
    this.setupThemeToggle();
    this.initializeVantaEffect();
    this.setupIntersectionObserver();
    this.setupSmoothScrolling();
    this.setupNavbarEffects();
    this.triggerInitialAnimations();
  }

  // ====== TRIGGER INITIAL ANIMATIONS ======
  triggerInitialAnimations() {
    // Trigger animations for elements in the hero section immediately
    setTimeout(() => {
      const heroElements = document.querySelectorAll('.hero .fade-in');
      heroElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('visible');
        }, index * 200);
      });
    }, 500); // Wait for page to load
  }

  setupEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
      this.setupMobileNavigation();
      this.setupButtonAnimations();
      this.setupFormValidation();
    });

    window.addEventListener('scroll', this.throttle(() => {
      this.handleScroll();
    }, 16)); // 60fps

    window.addEventListener('resize', this.debounce(() => {
      this.handleResize();
    }, 250));
  }

  // ====== SCROLL EFFECTS SETUP ======
  setupScrollEffects() {
    // This method sets up scroll-related effects
    // The actual scroll handling is done in handleScroll() which is called by the event listener
    console.log('Scroll effects initialized');
  }

  // ====== UTILITY FUNCTIONS ======
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  debounce(func, wait, immediate) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // ====== SCROLL EFFECTS ======
  handleScroll() {
    const scrollY = window.scrollY;
    this.updateNavbar(scrollY);
    this.updateParallax(scrollY);
    this.updateScrollProgress(scrollY);
  }

  updateNavbar(scrollY) {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    if (scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  updateParallax(scrollY) {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
      const speed = 0.5;
      heroBackground.style.transform = `translateY(${scrollY * speed}px)`;
    }
  }

  updateScrollProgress(scrollY) {
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const progress = scrollY / (docHeight - winHeight);
    
    // Update any progress indicators
    const progressBars = document.querySelectorAll('.scroll-progress');
    progressBars.forEach(bar => {
      bar.style.transform = `scaleX(${progress})`;
    });
  }

  // ====== SIMPLIFIED INTERSECTION OBSERVER FOR ANIMATIONS ======
  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add staggered animation for child elements
          if (entry.target.classList.contains('stagger-children')) {
            const children = entry.target.querySelectorAll('.animate-child');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('visible');
              }, index * 100);
            });
          }
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .stagger-children').forEach(el => {
      observer.observe(el);
    });
  }

  // ====== TYPED TEXT ANIMATION ======
  initializeTypedText() {
    const typedElement = document.getElementById('typed-text');
    if (typedElement && typeof Typed !== 'undefined') {
      new Typed('#typed-text', {
        strings: [
          'Transforming Dreams into Digital Realities',
          'Where AI Meets Human Imagination',
          'Beyond the Boundaries of Perception',
          'Creating Tomorrow\'s Experiences Today'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '_',
        smartBackspace: true
      });
    }
  }

  // ====== VANTA.JS ENHANCED EFFECTS ======
  initializeVantaEffect() {
    if (typeof VANTA !== 'undefined' && VANTA.NET) {
      const vantaElement = document.getElementById('vanta-overlay') || document.querySelector('.hero-background');
      
      if (vantaElement) {
        this.vantaEffect = VANTA.NET({
          el: vantaElement,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x8b5cf6, // Purple
          backgroundColor: 0x0f0f0f, // Dark background
          points: 15.0,
          maxDistance: 25.0,
          spacing: 18.0,
          showDots: true
        });
      }
    }
  }

  // ====== MOBILE NAVIGATION ======
  setupMobileNavigation() {
    const navToggle = document.querySelector('.navbar-toggle');
    const navMenu = document.querySelector('.navbar-nav');
    
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = navToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
          span.style.transform = navToggle.classList.contains('active') 
            ? `rotate(${index === 0 ? 45 : index === 1 ? 0 : -45}deg) translateY(${index === 1 ? 0 : index === 0 ? 6 : -6}px)`
            : 'none';
          span.style.opacity = index === 1 && navToggle.classList.contains('active') ? '0' : '1';
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
          navMenu.classList.remove('active');
          navToggle.classList.remove('active');
        }
      });
    }
  }

  // ====== BUTTON ANIMATIONS ======
  setupButtonAnimations() {
    document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('click', function(e) {
        // Ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });

    // Add ripple animation keyframes
    if (!document.querySelector('#ripple-styles')) {
      const style = document.createElement('style');
      style.id = 'ripple-styles';
      style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        .btn {
          position: relative;
          overflow: hidden;
        }
      `;
      document.head.appendChild(style);
    }
  }

  // ====== SMOOTH SCROLLING ======
  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const offsetTop = target.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    // Scroll indicator click
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      scrollIndicator.addEventListener('click', () => {
        const nextSection = document.querySelector('.section');
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  // ====== THEME TOGGLE ======
  setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update Vanta effect colors based on theme
        if (this.vantaEffect) {
          this.vantaEffect.setOptions({
            backgroundColor: newTheme === 'dark' ? 0x0f0f0f : 0xffffff,
            color: newTheme === 'dark' ? 0x8b5cf6 : 0x3b82f6
          });
        }
      });
    }
  }

  // ====== NAVBAR EFFECTS ======
  setupNavbarEffects() {
    const navLinks = document.querySelectorAll('.navbar-link');
    
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
      });
      
      link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  }

  // ====== FORM VALIDATION (for future forms) ======
  setupFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        if (!this.validateForm(form)) {
          e.preventDefault();
        }
      });
    });
  }

  validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        this.showFieldError(input, 'This field is required');
        isValid = false;
      } else {
        this.clearFieldError(input);
      }
    });
    
    return isValid;
  }

  showFieldError(field, message) {
    field.classList.add('error');
    let errorElement = field.parentNode.querySelector('.field-error');
    
    if (!errorElement) {
      errorElement = document.createElement('span');
      errorElement.className = 'field-error';
      field.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
  }

  clearFieldError(field) {
    field.classList.remove('error');
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
      errorElement.remove();
    }
  }

  // ====== RESIZE HANDLER ======
  handleResize() {
    // Update Vanta effect on resize
    if (this.vantaEffect) {
      this.vantaEffect.resize();
    }
    
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
      const navMenu = document.querySelector('.navbar-nav');
      const navToggle = document.querySelector('.navbar-toggle');
      
      if (navMenu && navToggle) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    }
  }

  // ====== PERFORMANCE OPTIMIZATIONS ======
  setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  // ====== SIMPLIFIED ANIMATIONS ======
  initializeAnimations() {
    // Add CSS for animations
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
      /* Hero badge floating animation */
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
      
      .hero-badge {
        animation: float 3s ease-in-out infinite;
      }
      
      /* Scroll indicator bounce */
      @keyframes bounce {
        0%, 100% { transform: translateX(-50%) translateY(0); }
        50% { transform: translateX(-50%) translateY(-8px); }
      }
      
      .scroll-indicator {
        animation: bounce 2s infinite;
      }
      
      .field-error {
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: block;
      }
      
      input.error, textarea.error {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
      }
    `;
    document.head.appendChild(animationStyles);
  }
}

// ====== POST CARD FUNCTIONALITY (Enhanced) ======
class PostManager {
  constructor() {
    this.postGrid = document.querySelector('.post-grid');
    this.setupEventListeners();
    this.loadStoredPosts();
  }

  setupEventListeners() {
    const submitForm = document.querySelector('#dream-form');
    if (submitForm) {
      submitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSubmit(e);
      });
    }
  }

  handleSubmit(e) {
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const description = formData.get('description');
    const name = formData.get('name');

    if (this.validatePost(title, description, name)) {
      this.createPostCard(title, description, name);
      e.target.reset();
      this.showSuccess('Post created successfully!');
    }
  }

  validatePost(title, description, name) {
    if (!title.trim() || !description.trim() || !name.trim()) {
      this.showError('All fields are required');
      return false;
    }
    return true;
  }

  createPostCard(title, description, name, saveToStorage = true) {
    if (!this.postGrid) return;

    const card = document.createElement('div');
    card.className = 'post-card card animate-on-scroll';
    
    card.innerHTML = `
      <div class="post-header">
        <h3 class="card-title">${this.escapeHTML(title)}</h3>
        <button class="delete-btn btn-ghost" title="Delete post" aria-label="Delete post">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
        </button>
      </div>
      <p class="card-description">${this.escapeHTML(description)}</p>
      <div class="post-author">— ${this.escapeHTML(name)}</div>
    `;

    // Add card to top of grid with animation
    this.postGrid.prepend(card);
    
    // Trigger animation
    setTimeout(() => {
      card.classList.add('animate-in');
    }, 10);

    // Delete post on click
    card.querySelector('.delete-btn').addEventListener('click', () => {
      this.deletePost(card, title, description, name);
    });

    if (saveToStorage) {
      this.saveToStorage(title, description, name);
    }
  }

  deletePost(card, title, description, name) {
    card.style.animation = 'fadeOut 0.3s ease forwards';
    setTimeout(() => {
      card.remove();
      this.deleteFromStorage(title, description, name);
    }, 300);
  }

  saveToStorage(title, description, name) {
    const currentPosts = JSON.parse(localStorage.getItem('dreamPosts')) || [];
    currentPosts.unshift({ title, description, name, timestamp: Date.now() });
    localStorage.setItem('dreamPosts', JSON.stringify(currentPosts));
  }

  deleteFromStorage(title, description, name) {
    let posts = JSON.parse(localStorage.getItem('dreamPosts')) || [];
    posts = posts.filter(
      post => post.title !== title || post.description !== description || post.name !== name
    );
    localStorage.setItem('dreamPosts', JSON.stringify(posts));
  }

  loadStoredPosts() {
    const posts = JSON.parse(localStorage.getItem('dreamPosts')) || [];
    posts.forEach(post => {
      this.createPostCard(post.title, post.description, post.name, false);
    });
  }

  escapeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  showSuccess(message) {
    this.showNotification(message, 'success');
  }

  showError(message) {
    this.showNotification(message, 'error');
  }

  showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// ====== INITIALIZE ======
document.addEventListener('DOMContentLoaded', () => {
  new PremiumWebsite();
  new PostManager();
});

// ====== PERFORMANCE MONITORING ======
if ('performance' in window) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      console.log(`Page loaded in ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
    }, 0);
  });
}
