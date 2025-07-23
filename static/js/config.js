/**
 * Premium Website Configuration
 * Centralized configuration for the enhanced AI Beyond Sight website
 */

const SITE_CONFIG = {
  // Theme Configuration
  theme: {
    default: 'dark',
    storage_key: 'ai-beyond-sight-theme',
    auto_detect: true // Detect user's system preference
  },

  // Animation Configuration
  animations: {
    enabled: true,
    duration: {
      fast: 150,
      normal: 300,
      slow: 500
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    },
    reduce_motion_query: '(prefers-reduced-motion: reduce)'
  },

  // Performance Configuration
  performance: {
    lazy_loading: true,
    intersection_threshold: 0.1,
    intersection_margin: '0px 0px -50px 0px',
    throttle_scroll: 16, // 60fps
    debounce_resize: 250,
    cache_version: 'v1.0.0'
  },

  // Typography Configuration
  typography: {
    fonts: {
      primary: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      heading: 'Inter, SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
      mono: 'JetBrains Mono, SF Mono, Consolas, monospace'
    },
    scales: {
      mobile: 0.875,
      tablet: 1,
      desktop: 1.125
    }
  },

  // Layout Configuration
  layout: {
    max_width: 1200,
    breakpoints: {
      mobile: 480,
      tablet: 768,
      desktop: 1024,
      wide: 1200
    },
    spacing: {
      base: 16, // 1rem = 16px
      scale: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 6, 8]
    }
  },

  // Form Configuration
  forms: {
    validation: {
      email_pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone_pattern: /^[\+]?[1-9][\d]{0,15}$/,
      url_pattern: /^https?:\/\/.+$/
    },
    messages: {
      required: 'This field is required',
      email: 'Please enter a valid email address',
      phone: 'Please enter a valid phone number',
      url: 'Please enter a valid URL',
      min_length: 'Minimum {min} characters required',
      max_length: 'Maximum {max} characters allowed'
    }
  },

  // Notification Configuration
  notifications: {
    position: 'top-right',
    duration: 3000,
    max_visible: 5,
    types: {
      success: { icon: '✓', color: '#10b981' },
      error: { icon: '✕', color: '#ef4444' },
      warning: { icon: '⚠', color: '#f59e0b' },
      info: { icon: 'ℹ', color: '#3b82f6' }
    }
  },

  // API Configuration
  api: {
    base_url: window.location.origin,
    endpoints: {
      submit_dream: '/submit',
      get_dreams: '/api/dreams',
      analytics: '/api/analytics'
    },
    timeout: 10000,
    retry_attempts: 3
  },

  // SEO Configuration
  seo: {
    title_template: '{title} | AI Beyond Sight',
    description: 'Transforming dreams into digital realities through advanced AI, VR, and immersive technologies',
    keywords: ['AI', 'Artificial Intelligence', 'VR', 'AR', 'Generative AI', 'Digital Reality'],
    og_image: '/static/media/logo.png',
    twitter_handle: '@aibeyondsight'
  },

  // Analytics Configuration
  analytics: {
    enabled: false, // Set to true when ready
    google_analytics_id: 'GA_MEASUREMENT_ID',
    events: {
      page_view: 'page_view',
      button_click: 'button_click',
      form_submit: 'form_submit',
      scroll_depth: 'scroll_depth'
    }
  },

  // Accessibility Configuration
  accessibility: {
    skip_link_target: '#main-content',
    high_contrast: false,
    large_text: false,
    reduced_motion: false,
    screen_reader_alerts: true
  },

  // Feature Flags
  features: {
    dark_mode_toggle: true,
    service_worker: true,
    push_notifications: false,
    offline_support: true,
    lazy_loading: true,
    infinite_scroll: false,
    search: false,
    comments: false
  },

  // Error Configuration
  errors: {
    retry_button: true,
    contact_support: true,
    error_boundary: true,
    logging: {
      enabled: true,
      level: 'error', // 'debug', 'info', 'warn', 'error'
      send_to_server: false
    }
  }
};

// Export for ES6 modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}

// Global access
window.SITE_CONFIG = SITE_CONFIG;
