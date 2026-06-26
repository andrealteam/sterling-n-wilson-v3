document.addEventListener("DOMContentLoaded", (event) => {
  new WOW().init();

  gsap.config({ trialWarn: false });
  console.clear();

  gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1,
    effects: true,
    smoothTouch: 0.1
  });
  gsap.from(".text-anim", {
    y: 40,
    opacity: 0,
    stagger: 0.12,
    duration: 1,
    ease: "power3.out"
  });
  gsap.from(".chairman-box", {
    scale: 0.96,
    opacity: 0,
    duration: 1.4,
    ease: "power3.out"
  }); gsap.from(".hero-heading", {
    filter: "blur(15px)",
    opacity: 0,
    y: 50,
    duration: 1.4,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".hero-heading",
      start: "top 80%",
      once: true
    }
  }); gsap.from(".research-point img", {
    opacity: 0,
    scale: 0.9,
    duration: 1.2,
    ease: "expo.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".research-points",
      start: "top 75%",
      once: true
    }
  });
  gsap.registerPlugin(ScrollToPlugin);

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the target element
      const target = document.querySelector(this.getAttribute("href"));

      // Adjust the offset, here I assume the navbar is 70px tall, you can adjust this based on your navbar height
      const offset = 70; // Adjust this value to match your navbar height

      // Disable the default browser behavior of jumping to the section
      history.pushState(null, null, this.getAttribute("href"));  // Update the URL without jumping

      // Scroll to the target position, accounting for the offset
      gsap.to(window, {
        scrollTo: {
          y: target.offsetTop - offset,  // Scroll to the target minus the navbar height
          autoKill: false                // Prevent auto-kill (helps with sticky headers)
        },
        duration: 1,                      // Smooth scroll duration
        ease: "power2.out"
      });
    });
  });

});
$(".navbar-toggler").on("click", function (e) {
  e.preventDefault();
  $(".header-overlay ").toggleClass("show");
});
$(".header-overlay").on("click", function () {
  $(".header-overlay").removeClass("show");
  $(".side-menu").collapse("hide");
});
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const scrollThreshold = 150;

  function checkScroll() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("sticky-header");
    } else {
      header.classList.remove("sticky-header");
    }
  }

  // Check on page load in case already scrolled
  checkScroll();

  // Listen for scroll events
  window.addEventListener("scroll", checkScroll);
}); $(".pop-video").magnificPopup({ type: "iframe" });
$(".gallery-text").magnificPopup({
  type: "image",
  image: {
    titleSrc: 'title'
  },
  gallery: {
    enabled: true,
  },
});

const swiper = new Swiper(".journeySwiper", {
  slidesPerView: 7,
  centeredSlides: true,
  slideToClickedSlide: true,

  spaceBetween: 80,
  // loop: true,
  speed: 700,
  autoplay: {
    delay: 3000
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 7,
    },

    1200: {
      slidesPerView: 5,
    },
    1700: {
      slidesPerView: 5,
    },
    1800: {
      slidesPerView: 7,
    },
  },
}); const testimonialSwiper = new Swiper(".testimonialSwiper", {

  slidesPerView: 1.2,

  centeredSlides: true,

  // loop: true,

  speed: 700,

  spaceBetween: 30,

  // autoplay: {
  //   delay: 4000
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {

    768: {
      slidesPerView: 2
    },

    1200: {
      slidesPerView: 2.6
    }
  }
}); const awardsSwiper = new Swiper(".awards-swiper", {

  slidesPerView: 3,

  loop: true,

  speed: 700,

  spaceBetween: 30,

  // autoplay: {
  //   delay: 3000
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

}); const bankerSwiper = new Swiper(".banker-swiper", {

  slidesPerView: 7,

  loop: true,

  speed: 700,

  spaceBetween: 30,

  autoplay: {
    delay: 3000
  }, pagination: {
    el: '.swiper-pagination',
    clickable: true
  },


});
