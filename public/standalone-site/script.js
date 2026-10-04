/**
 * Janvi Cleaning Services - Ghaziabad
 * Standalone Vanilla JavaScript for GitHub Pages
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // HERO SLIDER DATA & LOGIC
  // ==========================================
  const slidesData = [
    {
      category: 'Full Home Deep Cleaning',
      title: 'Professional Cleaning for a Healthier Home',
      subtitle: 'Trusted, reliable & eco-friendly deep cleaning services across Ghaziabad tailored to your family needs.',
      image: './images/home_clean.jpg',
      serviceVal: 'Home Deep Cleaning (₹1,499)',
    },
    {
      category: 'Kitchen & Chimney Degreasing',
      title: 'Sparkling Clean Kitchens & Oil-Free Chimneys',
      subtitle: 'Tough oil, carbon & grease removal from exhaust fans, tiles, cabinets and countertops using food-safe products.',
      image: './images/kitchen_clean.jpg',
      serviceVal: 'Kitchen Cleaning (₹799)',
    },
    {
      category: 'Bathroom & Tile Sanitization',
      title: '100% Germ-Free Bathrooms & Descaled Tiles',
      subtitle: 'Hard water scale removal, acid-free tile scrubbing, sanitized commode, fixtures and crystal clear mirrors.',
      image: './images/bathroom_clean.jpg',
      serviceVal: 'Bathroom Deep Sanitization (₹599)',
    },
    {
      category: 'Sofa & Carpet Shampooing',
      title: 'Deep Fabric Care & Dust-Mite Extraction',
      subtitle: 'German high-suction extraction & organic shampooing removes stubborn stains, odors and dust allergens.',
      image: './images/sofa_clean.jpg',
      serviceVal: 'Carpet & Sofa Shampooing (₹499)',
    },
    {
      category: 'Office & Commercial Cleaning',
      title: 'Spotless Workspaces That Inspire Productivity',
      subtitle: 'Complete corporate floor scrubbing, desk disinfection, conference rooms, pantry and glass facade sanitization.',
      image: './images/home_clean.jpg',
      serviceVal: 'Office & Commercial Cleaning (₹2,499)',
    },
  ];

  let currentSlide = 0;
  let slideInterval = null;
  const slideItems = document.querySelectorAll('.slide-item');
  const dots = document.querySelectorAll('.dot');
  const heroBadge = document.getElementById('heroBadgeText');
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const sliderContainer = document.querySelector('.slider-container');

  function showSlide(index) {
    currentSlide = (index + slidesData.length) % slidesData.length;

    // Update images
    slideItems.forEach((item, i) => {
      item.classList.toggle('active', i === currentSlide);
    });

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });

    // Update text with quick transition
    const data = slidesData[currentSlide];
    if (heroBadge) heroBadge.textContent = data.category;
    if (heroTitle) heroTitle.textContent = data.title;
    if (heroSubtitle) heroSubtitle.textContent = data.subtitle;
  }

  function startSlider() {
    stopSlider();
    slideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
  }

  function stopSlider() {
    if (slideInterval) clearInterval(slideInterval);
  }

  // Next / Prev buttons
  const prevBtn = document.getElementById('prevSlideBtn');
  const nextBtn = document.getElementById('nextSlideBtn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(currentSlide - 1);
      startSlider();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentSlide + 1);
      startSlider();
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      startSlider();
    });
  });

  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopSlider);
    sliderContainer.addEventListener('mouseleave', startSlider);
  }

  startSlider();

  // ==========================================
  // SMOOTH SCROLL TO ENQUIRY FORM & PRE-FILL
  // ==========================================
  window.scrollToEnquiry = function(serviceName) {
    const formSection = document.getElementById('enquiry-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }

    if (serviceName) {
      const selectElement = document.getElementById('serviceSelect');
      if (selectElement) {
        for (let i = 0; i < selectElement.options.length; i++) {
          if (selectElement.options[i].text.toLowerCase().includes(serviceName.toLowerCase())) {
            selectElement.selectedIndex = i;
            break;
          }
        }
      }
    }
  };

  // ==========================================
  // ENQUIRY FORM SUBMISSION -> valmikivikash824@gmail.com
  // ==========================================
  const bookingForm = document.getElementById('bookingForm');
  const successBox = document.getElementById('successBox');
  const formFields = document.getElementById('formFields');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('fullName').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim() || 'Not provided';
      const service = document.getElementById('serviceSelect').value;
      const property = document.getElementById('propertyType').value;
      const locality = document.getElementById('locality').value;
      const date = document.getElementById('prefDate').value || 'Immediate';
      const time = document.getElementById('prefTime').value;
      const notes = document.getElementById('specialNotes').value.trim() || 'None';

      const refCode = 'JC-' + Math.floor(100000 + Math.random() * 900000);

      // Show success box
      if (formFields && successBox) {
        formFields.style.display = 'none';
        successBox.style.display = 'block';
        document.getElementById('displayRef').textContent = refCode;
        document.getElementById('displayName').textContent = name;
        document.getElementById('displayPhone').textContent = phone;
      }

      // WhatsApp link setup
      const waBtn = document.getElementById('whatsappConfirmBtn');
      if (waBtn) {
        const waMsg = encodeURIComponent(
          `*New Janvi Cleaning Booking*\nRef: ${refCode}\nName: ${name}\nPhone: ${phone}\nService: ${service}\nProperty: ${property}\nLocality: ${locality}, Ghaziabad\nDate/Time: ${date} (${time})\nNotes: ${notes}`
        );
        waBtn.href = `https://wa.me/919289385933?text=${waMsg}`;
      }

      // Prepare mailto link to valmikivikash824@gmail.com
      const mailSubject = encodeURIComponent(`New Cleaning Booking [${refCode}] - ${name} (Ghaziabad)`);
      const mailBody = encodeURIComponent(
        `Hello Janvi Cleaning Team,\n\n` +
        `New enquiry details:\n` +
        `Booking Ref: ${refCode}\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email}\n` +
        `Service: ${service}\n` +
        `Property: ${property}\n` +
        `Locality: ${locality}, Ghaziabad\n` +
        `Preferred Date: ${date}\n` +
        `Preferred Slot: ${time}\n` +
        `Notes: ${notes}\n\n` +
        `-- Sent via Janvi Cleaning Website`
      );

      // Trigger mailto client
      window.location.href = `mailto:valmikivikash824@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    });
  }

  // ==========================================
  // MOBILE MENU TOGGLE
  // ==========================================
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNavDrawer');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = mobileNav.style.display === 'block';
      mobileNav.style.display = isVisible ? 'none' : 'block';
    });
  }
});
