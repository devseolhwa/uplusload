$(function(){

    // store slide
    let storeSlide = $(".storeSlide");
    if (storeSlide.length) {
        storeSlide.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 700,
            adaptiveHeigh: true,
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

});