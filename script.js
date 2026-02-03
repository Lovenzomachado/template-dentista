document.addEventListener('DOMContentLoaded', () => {
  // Initialize Icons
  lucide.createIcons();

  // Blur Fade Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Run once
      }
    });
  }, observerOptions);

  document.querySelectorAll('.blur-fade').forEach(el => observer.observe(el));

  // Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Horizontal Scroll Logic
  const stickySection = document.querySelector('.h-scroll-section');
  const stickyWrapper = document.querySelector('.h-scroll-sticky');
  const track = document.querySelector('.h-scroll-track');

  if (stickySection && track) {
    window.addEventListener('scroll', () => {
      const rect = stickySection.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how far we are into the section
      // When sectionTop is 0, we are at start.
      // When sectionTop is -(sectionHeight - windowHeight), we are at end.
      
      const scrollDistance = sectionHeight - windowHeight;
      let scrolled = -sectionTop;
      
      // Clamp value between 0 and scrollDistance
      scrolled = Math.max(0, Math.min(scrolled, scrollDistance));
      
      // Calculate progress 0 to 1
      const progress = scrolled / scrollDistance;
      
      // Determine how far to move the track
      // We want to move it enough to show all cards.
      // Total width of track - window width (or a portion of it)
      const trackWidth = track.scrollWidth;
      const availableWidth = window.innerWidth;
      
      // On mobile/desktop adjustment
      // Let's scroll until the end of track is visible
      const moveAmount = -(trackWidth - availableWidth + 100) * progress; // +100 for padding
      
      // Only transform if we are engaging with the section or within bounds
      // Actually, we can just apply it based on progress always, 
      // but typically we wait until the section hits top.
      // CSS sticky handles the "fixing", JS handles the "moving".
      
      track.style.transform = `translateX(${moveAmount}px)`;
    });
  }
});
