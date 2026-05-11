// ============================= 
// Smooth Scroll for Navigation Links
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============================= 
// Dropdown Menu Handler
// =============================

const navDropdown = document.querySelector('.nav-dropdown');
const dropdownBtn = document.querySelector('.nav-dropdown-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (dropdownBtn) {
    // Toggle dropdown on click (mobile)
    dropdownBtn.addEventListener('click', function (e) {
        e.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close dropdown when clicking on a link
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', function () {
            dropdownMenu.style.display = 'none';
        });
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', function (e) {
    if (navDropdown && !navDropdown.contains(e.target)) {
        if (dropdownMenu) {
            dropdownMenu.style.display = 'none';
        }
    }
});

// Contact Form Handler
// =============================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  const phoneInput = contactForm.querySelector('input[type="tel"]');
  const savedPhone = localStorage.getItem('contact_phone');
  if (savedPhone && phoneInput) {
    phoneInput.value = savedPhone;
  }

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const phone = phoneInput.value.trim();

    localStorage.setItem('contact_phone', phone);

    alert(`Obrigado! Entraremos em contato pelo número: ${phone}`);
    this.reset();
  });
}


// =============================
// Recomendados
// =============================
(function () {
    const track = document.getElementById('recTrack');
    const dots  = document.querySelectorAll('.rec-dot');
    let current = 0;
    const pages = dots.length;

    function goTo(page) {
        current = (page + pages) % pages;
        const card      = track.querySelector('.rec-item');
        const gap       = 24; // 1.5rem
        const cardWidth = card.offsetWidth + gap;
        const visible   = Math.round(track.parentElement.offsetWidth / cardWidth);
        track.style.transform = `translateX(-${current * visible * cardWidth}px)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    window.slideRec = (dir) => goTo(current + dir);
    dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
})();

// ============================= 
// Add to Cart Handler
// =============================

const addToCartButtons = document.querySelectorAll('.btn-add');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        const productName = this.closest('.product-card').querySelector('h3').textContent;
        const price = this.closest('.product-card').querySelector('.price').textContent;
        alert(`${productName} (${price}) foi adicionado ao carrinho!`);
    });
});

// ============================= 
// Navbar Shadow on Scroll
// =============================

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// ============================= 
// Featured Carousel
// =============================

class FeaturedSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.querySelector('.slider-btn-prev');
        this.nextBtn = document.querySelector('.slider-btn-next');

        if (this.slides.length > 0) {
            this.init();
        }
    }

    init() {
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Auto-advance slides every 8 seconds
        setInterval(() => this.nextSlide(), 8000);
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlide();
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlide();
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlide();
    }

    updateSlide() {
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));

        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
    }
}

// Initialize carousel
new FeaturedSlider();

// ============================= 
// Login Button Handler
// =============================

const loginBtn = document.querySelector('.login-btn');
if (loginBtn) {
    loginBtn.addEventListener('click', function (e) {
        e.preventDefault();
        alert('Funcionalidade de login será implementada em breve!');
    });
}

// ============================= 
// Scroll Animation for Elements
// =============================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply observer to collection items and tips
document.querySelectorAll('.collection-item, .tip-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ============================= 
// Active Navigation Link
// =============================

window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});


// ============================= 
// Responsive Menu Toggle
// =============================

// This would be used if implementing a hamburger menu
// for mobile devices in the future

console.log('D/A Veste Ai - Website loaded successfully!');
