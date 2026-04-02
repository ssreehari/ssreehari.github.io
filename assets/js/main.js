// Dark/Light mode toggle
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', currentTheme);
  updateToggleIcon(currentTheme);
  
  themeToggle.addEventListener('click', function() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
  });
  
  function updateToggleIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
      icon.className = 'fa-solid fa-sun';
    } else {
      icon.className = 'fa-solid fa-moon';
    }
  }

  // Smooth scrolling for anchor links
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

  // Photo gallery lightbox (simple implementation)
  const photoItems = document.querySelectorAll('.photo-item img');
  photoItems.forEach(img => {
    img.addEventListener('click', function() {
      // Create lightbox overlay
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        cursor: pointer;
      `;
      
      const enlargedImg = document.createElement('img');
      enlargedImg.src = this.src;
      enlargedImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
      `;
      
      overlay.appendChild(enlargedImg);
      document.body.appendChild(overlay);
      
      // Close on click
      overlay.addEventListener('click', function() {
        document.body.removeChild(overlay);
      });
      
      // Close on ESC key
      document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
          if (document.body.contains(overlay)) {
            document.body.removeChild(overlay);
          }
          document.removeEventListener('keydown', escHandler);
        }
      });
    });
  });
});
