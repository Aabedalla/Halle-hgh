// -----------السلايدر الأول ---------------
function scrollSlider(direction) {
    const slider = document.getElementById('slider');
    const scrollAmount = 320; 
    slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }

// -----------السلايدر الثاني ---------------

  const slider = document.getElementById('slider2');
    const cardWidth = 360; 

    function scrollSlider2(direction) {
        slider.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
    }


    setInterval(() => {
 
      
        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            scrollSlider2(1);
        }
    }, 4000);   

  // -----------السلايدر الثالث ---------------

    function scrollSlider3(direction) {
    const slider = document.getElementById('slider3');
    const scrollAmount = 320;
    slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }

// -----------سلايدر الخدمات الجديد (سلايد واحد فقط)---------------
let currentServiceSlide = 0;
const totalServiceSlides = 5;

function showServiceSlide(idx) {
    const slides = document.querySelectorAll('#serviceSliderNew [data-slide]');
    slides.forEach((slide, i) => {
        if (i === idx) {
            slide.style.opacity = '1';
            slide.style.zIndex = '2';
            slide.style.pointerEvents = 'auto';
        } else {
            slide.style.opacity = '0';
            slide.style.zIndex = '1';
            slide.style.pointerEvents = 'none';
        }
    });
}

function moveServiceSlide(direction) {
    currentServiceSlide += direction;
    if (currentServiceSlide < 0) currentServiceSlide = totalServiceSlides - 1;
    if (currentServiceSlide >= totalServiceSlides) currentServiceSlide = 0;
    showServiceSlide(currentServiceSlide);
}

    const serviceSlider = document.getElementById('serviceSliderFlex');
    const cardWidt = 350; 

    function moveServiceFlex(direction) {
        serviceSlider.scrollBy({ left: direction * cardWidt, behavior: 'smooth' });
    }

    
    setInterval(() => {
       
      
        if (serviceSlider.scrollLeft + serviceSlider.offsetWidth >= serviceSlider.scrollWidth - 1) {
            serviceSlider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            moveServiceFlex(1);
        }
    }, 4000); 


window.addEventListener('DOMContentLoaded', function() {
    showServiceSlide(currentServiceSlide);
});

//   --------------تحديد لعدد الاحرف------------

// function cardId(cardid){
//   const element = document.getElementById(cardid);
//   const fullText = element.innerText;
//   const maxLength = 120;

//   if (fullText.length > maxLength) {
//     element.innerText = fullText.substring(0, maxLength) + '...';
//   }
// }
// cardId('trimmed-text')

// -----------سلايدر الخدمات المرن (3 بطاقات أو واحدة للجوال)---------------
let currentServiceFlex = 0;

function updateServiceSliderFlex() {
    const slider = document.getElementById('serviceSliderFlex');
    const slides = slider.querySelectorAll('.service-slide');
    const btns = document.getElementById('serviceSliderBtns');
    let slidesToShow = 3;
    if (window.innerWidth < 768) slidesToShow = 1;
    const maxIndex = slides.length - slidesToShow;
    if (currentServiceFlex < 0) currentServiceFlex = 0;
    if (currentServiceFlex > maxIndex) currentServiceFlex = maxIndex;
    const slideWidth = slides[0].offsetWidth + 30; // 40 = gap-10
    slider.style.transform = `translateX(-${currentServiceFlex * slideWidth}px)`;
    // إظهار/إخفاء الأزرار حسب عدد البطاقات
    if (slides.length <= slidesToShow) {
        btns.style.display = 'none';
    } else {
        btns.style.display = 'flex';
    }
}

function moveServiceFlex(direction) {
    const slider = document.getElementById('serviceSliderFlex');
    const slides = slider.querySelectorAll('.service-slide');
    let slidesToShow = 3;
    if (window.innerWidth < 768) slidesToShow = 1;
    const maxIndex = slides.length - slidesToShow;
    currentServiceFlex += direction;
    if (currentServiceFlex < 0) currentServiceFlex = 0;
    if (currentServiceFlex > maxIndex) currentServiceFlex = maxIndex;
    updateServiceSliderFlex();
}

window.addEventListener('DOMContentLoaded', updateServiceSliderFlex);
window.addEventListener('resize', function() {
    currentServiceFlex = 0;
    updateServiceSliderFlex();
});


    // عند السكرول: أضف تغبيش وشفافية للهيدر
    window.addEventListener('scroll', function() {
        var header = document.getElementById('mainHeader');
        if (window.scrollY > 100) {
            header.classList.add('backdrop-blur-xl', 'bg-white/70', 'shadow-lg');
            header.classList.remove('bg-white');
        } else {
            header.classList.remove('backdrop-blur-xl', 'bg-white/70', 'shadow-lg');
            header.classList.add('bg-white');
        }
    });


    // -----------اخفاء القائمة في شاشة الجوال -------------

    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = mobileMenu.querySelectorAll('a, button');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });



    const testimonialSlider = document.getElementById('testimonialSlider');
  const testimonialCardWidth = 370;

  function moveTestimonialSlider(direction) {
    testimonialSlider.scrollBy({ left: direction * testimonialCardWidth, behavior: 'smooth' });
  }

  
  let autoScrollTestimonials = setInterval(() => {
    if (testimonialSlider.scrollLeft + testimonialSlider.offsetWidth >= testimonialSlider.scrollWidth - 1) {
      testimonialSlider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      moveTestimonialSlider(1);
    }
  }, 5000); 

  testimonialSlider.addEventListener('mouseenter', () => clearInterval(autoScrollTestimonials));
  testimonialSlider.addEventListener('mouseleave', () => {
    autoScrollTestimonials = setInterval(() => {
      if (testimonialSlider.scrollLeft + testimonialSlider.offsetWidth >= testimonialSlider.scrollWidth - 1) {
        testimonialSlider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        moveTestimonialSlider(1);
      }
    }, 5000);
  });