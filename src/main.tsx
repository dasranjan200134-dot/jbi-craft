import './index.css';

// Ensure application scripts are loaded if not already present
const ensureScripts = () => {
  const scripts = [
    '/assets/supabase-client.js',
    '/assets/translator.js',
    '/assets/theme-switcher.js',
    '/assets/index-v2-aboutphotos.js'
  ];

  scripts.forEach(src => {
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement('script');
      s.src = src;
      document.body.appendChild(s);
    }
  });
};

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', ensureScripts);
  } else {
    ensureScripts();
  }
}
