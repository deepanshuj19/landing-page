// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Responsive Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // Smooth Scrolling
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
  
          // Close the navigation menu on mobile after clicking a link
          if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
          }
        }
      });
    });
  
    // Active Link Highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links li a');
  
    window.addEventListener('scroll', () => {
      let current = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });
  
      navItems.forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href') === `#${current}`) {
          li.classList.add('active');
        }
      });
    });
  });
  