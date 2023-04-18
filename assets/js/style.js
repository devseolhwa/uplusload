$(function(){

    storeSlide(); // store Slide
    
    // store Slide
    function storeSlide() {
        $(".storeSlide").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 700,
            dots: true,
            infinite: true,
            pauseOnHover: false,
            arrows: false
        });
    }

});