// jQuery Based Javascript
// -------------------------
//
/*******************************************
 * Template Name: My Portfolio
 * Updated: Jun 29 2024
 * Author: Naim Zaaraoui
 * PSD Designer: Naim Zaaraoui
 *******************************************/

$(function () {
  /* #Select needed DOM elements
  -----------------------------*/
  const preloader = $("[data-preloader]");

  const header = $("[data-header]");
  const scrollToLinks = $("[data-scrollto]");

  const navToggler = $("[data-nav-toggler]");
  const navCloseBtns = $("[data-nav-close-btn]");

  const sections = $("section");

  const progressWraps = $("[data-reveal]");

  const welcomePopup = $("[data-welcome-popup]");
  const popupCloseBtns = $("[data-popup-close]");

  const backTopBtn = $("[data-back-top-btn]");

  /* #Hide preloader on load
  -----------------------------*/
  preloader.addClass("is-hidden");

  /* #Toggle .is-scrolled. class on <body> element when scroll
  -----------------------------------------------------------*/
  let isBodyScrolled = false;

  function scrollBody() {
    if ($(window).scrollTop() > 100 && !isBodyScrolled) {
      $("body").addClass("is-scrolled");
      isBodyScrolled = true;
    } else if ($(window).scrollTop() < 100 && isBodyScrolled) {
      $("body").removeClass("is-scrolled");
      isBodyScrolled = false;
    }
  }
  scrollBody();
  $(window).on("scroll", scrollBody);

  /* #Toggle .is-active. class on <nav-toggler> element
  ----------------------------------------------------*/
  navToggler.on("click", function () {
    $(this).toggleClass("is-active");
  });
  navCloseBtns.on("click", () => navToggler.removeClass("is-active"));

  /* #Scroll to section with header offset
  ---------------------------------------*/
  const headerOffset = header.innerHeight();

  scrollToLinks.on("click", function (e) {
    e.preventDefault();
    const section = $($(this).data("scrollto"));

    if (section) {
      $(window).scrollTop(section.offset().top - headerOffset + 4);
    }

    if ($(this).hasClass("nav-link")) {
      $(this)
        .addClass("is-active")
        .parent()
        .siblings()
        .find($("[data-scrollto]"))
        .removeClass("is-active");
    }
  });

  /* #Sync navbar links with sections
  ------------------------------------*/
  function asyncLinks() {
    sections.each(function () {
      if ($(window).scrollTop() >= $(this).offset().top - headerOffset + 3) {
        const sectionId = $(this).attr("id");

        scrollToLinks
          .filter(".nav-link")
          .removeClass("is-active")
          .filter(`[data-scrollto="#${sectionId}"]`)
          .addClass("is-active");
      }
    });
  }

  asyncLinks();
  $(window).scroll(() => {
    asyncLinks();
  });
  /* #Skills progress bars animation
  -----------------------------------*/
  const options = {
    root: null, // viewport
    threshold: 0, // 0 - 1
    rootMargin: "-120px 0px -100px 0px", // Grow or shrink view zone
  };

  const interObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const progressBar = entry.target.querySelector(".progress-bar");
      progressBar.style.setProperty(
        "--_progress-height",
        progressBar.dataset.progress
      );

      observer.unobserve(entry.target);
    });
  }, options);

  progressWraps.each(function () {
    interObserver.observe(this);
  });

  /* #Our work filters
  ---------------------*/
  $(".work-list").isotope({
    itemSelector: ".work-item",
  });

  const workFilters = $(".filter-btn");

  workFilters.on("click", function () {
    $(".work-list").isotope({
      filter: $(this).data("filter"),
    });

    workFilters.removeClass("is-active").filter(this).addClass("is-active");
  });

  $(".work-list").on("arrangeComplete", () => AOS.refresh());

  /* #Initialize AOS
  ---------------------*/
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  /* #Hide / Show <welcomePopup>
  -----------------------------*/
  setTimeout(() => welcomePopup.addClass("is-shown"), 5000);
  popupCloseBtns.on("click", () => welcomePopup.removeClass("is-shown"));

  /* #Back to top button
  ----------------------*/
  backTopBtn.on("click", () => $(document).scrollTop(0));
});
