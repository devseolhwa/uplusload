$(function(){
    let storeSlideCheck = $(".storeSlide");
    if (storeSlideCheck.length) {
        storeSlide(); // store Slide
    }
    // store Slide
    function storeSlide() {
        storeSlideCheck.slick({
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
});