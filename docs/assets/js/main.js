document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.mobile-menu-toggle');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      document.body.classList.toggle('mobile-menu-active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      const sidebar = document.querySelector('.sidebar');
      const isClickInsideSidebar = sidebar && sidebar.contains(e.target);
      const isClickOnToggle = menuToggle.contains(e.target);

      if (!isClickInsideSidebar && !isClickOnToggle &&
          document.body.classList.contains('mobile-menu-active')) {
        document.body.classList.remove('mobile-menu-active');
      }
    });
  }

  // Project media toggle
  const mediaToggles = document.querySelectorAll('.media-toggle');

  mediaToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const targetId = toggle.getAttribute('data-target');
      const mediaContainer = document.getElementById(targetId);

      if (mediaContainer) {
        const isHidden = mediaContainer.classList.contains('hidden');
        mediaContainer.classList.toggle('hidden');
        toggle.textContent = isHidden ? 'Hide Media' : 'View Media';

        if (isHidden) {
          setTimeout(() => {
            mediaContainer.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest'
            });
          }, 100);
        }
      }
    });
  });
});
