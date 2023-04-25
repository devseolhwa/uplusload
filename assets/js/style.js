// store slide
let storeSlide = $(".storeSlide");
if (storeSlide.length) {
    storeSlide.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 700,
        adaptiveHeight: true,
        dots: true,
        infinite: true,
        pauseOnHover: false,
        arrows: false
    });
}

// rouletter Slide
let rouletterSlide = $(".rouletterSlide");
if (rouletterSlide.length) {
    rouletterSlide.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 700,
        adaptiveHeight: true,
        dots: false,
        infinite: true,
        pauseOnHover: false,
        arrows: true,
        prevArrow: $(".rouletterArrow .prev"),
        nextArrow: $(".rouletterArrow .next")
    });
}

// ticket Slide
let ticketSlide = $(".ticketSlide");
if (ticketSlide.length) {
    ticketSlide.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
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

// 경품 수령 확인 버튼 check
setInterval(function() { 
    let btnGetProduct = $(".btnGet");
    if (btnGetProduct.length) {
        let btnGetProductIs = btnGetProduct.is(".show");
        if (btnGetProductIs) {
            $(".stampFront").css("margin-top", "300px");
        } else {
            $(".stampFront").css("margin-top", "250px");
        }
    }
});

// popup
function popupOpen(openTarget) {
    $(openTarget).fadeIn("fast").addClass("show");
}
function popupClose(closeTarget) {
    $(closeTarget).fadeOut("fast").removeClass("show");
}