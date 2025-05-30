
    var swiper = new Swiper(".slide-swp", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullests:true,
      },
      autoplay:{
        delay:2500,
      },
      loop:true,
    });