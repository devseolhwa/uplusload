// store slide
let storeSlide = $(".storeSlide");
if (storeSlide.length) {
    storeSlide.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 700,
        adaptiveHeight: true,
        dots: true,
        infinite: true,
        pauseOnHover: false,
        arrows: false
    });
}

// prize Slide
let prizeSlide = $(".prizeSlide");
if (prizeSlide.length) {
    prizeSlide.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 700,
        adaptiveHeight: true,
        dots: true,
        infinite: true,
        pauseOnHover: false,
        arrows: false
    });
}

// text scroll
document.querySelectorAll(".scrollLeft").forEach(function(item){
    let $scrollLeftItem = item;

    gsap.to($scrollLeftItem, {
        scrollTrigger: {
            trigger: $scrollLeftItem,
            end: "bottom top",
            scrub: 0.6
        },
        xPercent: -100,
        duration: 3,
        ease: "linear"
    });
});

// store click event
$(document).on("click", ".btnStoreView", function () {
    $(this).parent(".storeItem").addClass("on").siblings().removeClass("on");
    return false;
});