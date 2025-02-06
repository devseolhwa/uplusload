// gnb
$(document).on("click", "#btnGnbOpen", function () {
    $("#gnb").fadeIn("400").addClass("active").focus();
    $(".mWrap").on("scroll touchmove mousewheel", function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
    return false;
}).on("click", "#btnGnbClose", function () {
    $("#gnb").removeClass("active");
    $(".mWrap").off("scroll touchmove mousewheel");
    return false;   
});

// scroll
let header = document.querySelector("header"),
    btnTop = document.querySelector("#btnTop"),
    contents = document.querySelector("#contents"), //쿠폰받기추가
    storeDetails = document.querySelectorAll(".storeDetails"),
    headerH = 70;

window.addEventListener("scroll", () => {
    let btnGetCoupon = document.querySelector(".btnGetCoupon"); //쿠폰받기추가
    if (window.scrollY > headerH) {
        header.classList.add("fixed");
        btnTop.classList.add("show");
        btnGetCoupon?.classList.add("show"); //쿠폰받기추가
    } else {
        header.classList.remove("fixed");
        btnTop.classList.remove("show");
        btnGetCoupon?.classList.remove("show"); //쿠폰받기추가
    }
});
window.addEventListener("load", function() {
    // storeview 페이지에만 progress 삽입
    if (storeDetails.length) {
        let progressHtml = "<div class='progress'><div class='bar'></div></div>";
        let couponHtml = "<button type='button' class='btnGetCoupon' onclick='window.open(`https://bit.ly/41oHPYv`)'>쿠폰 받기</button>"; //쿠폰받기추가
        header.insertAdjacentHTML("beforeend", progressHtml);
        contents.insertAdjacentHTML("beforeend", couponHtml); //쿠폰받기추가
        btnTop.style["bottom"] = "90px"; //쿠폰받기추가
    }
    window.addEventListener("scroll", function() {
        var wintop = window.pageYOffset || document.documentElement.scrollTop,
            docheight = document.querySelector("body").offsetHeight,
            winheight = window.innerHeight;

        let totalScroll = (wintop / (docheight - winheight)) * 100;
        if (storeDetails.length) {
            document.querySelector(".bar").style.width = totalScroll + "%";
        }
    });
});

// 상단으로
let scrollToTop = () => {
    $("html, body").animate({scrollTop:0}, 500);
}
$("#btnTop").click(() => {
    scrollToTop();
    return false;
});
