// gnb
$(document).on("click", "#btnGnbOpen", function () {
     $("#gnb").fadeIn("400").addClass("active");
     return false;
}).on("click", "#btnGnbClose", function () {
    $("#gnb").removeClass("active");
    return false;
});

// scroll
const header = document.querySelector("header");
const btnTop = document.querySelector("#btnTop");

window.addEventListener("scroll", () => {
    if (window.scrollY) {
        header.classList.add("fixed");
        btnTop.classList.add("show");
    } else {
        header.classList.remove("fixed");
        btnTop.classList.remove("show");
    }
});
window.addEventListener("load", function() {
    window.addEventListener("scroll", function() {
    var wintop = window.pageYOffset || document.documentElement.scrollTop,
        docheight = document.querySelector("body").offsetHeight,
        winheight = window.innerHeight;

    var totalScroll = (wintop / (docheight - winheight)) * 100;

    document.querySelector(".bar").style.width = totalScroll + "%";
    });
});

// 상단으로
const scrollToTop = () => {
    $("html, body").animate({scrollTop:0}, 500);
}
$("#btnTop").click(() => {
    scrollToTop();
    return false;
});