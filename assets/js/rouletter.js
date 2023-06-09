var rolLength = 6; // 해당 룰렛 콘텐츠 갯수
var setNum; // 랜덤숫자 담을 변수
var hiddenInput = document.createElement("input");
hiddenInput.className = "hiddenInput";

// 랜덤숫자부여
const rRandom = () => {
    var min = Math.ceil(0);
    var max = Math.floor(rolLength - 1);
    return Math.floor(Math.random() * (max - min)) + min;
};

const rRotate = () => {
    var panel = document.querySelector(".rouletterEl");
    var btn = document.querySelector(".btnRouletter");
    var deg = [];
    // 룰렛 각도 설정(rolLength = 6)
    for (var i = 1, len = rolLength; i <= len; i++) {
        deg.push((360 / len) * i);
    }

    // 랜덤 생성된 숫자를 히든 인풋에 넣기
    var num = 0;
    document.body.append(hiddenInput);
    setNum = hiddenInput.value = rRandom();

    // 애니설정
    var ani = setInterval(() => {
        num++;
        panel.style.transform = "rotate(" + 360 * num + "deg)";
        btn.disabled = true; //button,input
        btn.style.pointerEvents = "none"; //a 태그

        // 총 50에 다달했을때, 즉 마지막 바퀴를 돌고나서
        if (num === 50) {
            clearInterval(ani);
            panel.style.transform = `rotate(${deg[setNum]}deg)`;
        }
    }, 50);
};

// 정해진 alert띄우기, custom modal등
const rLayerPopup = (num) => {
    switch (num) {
        case 1:
            alert("룰렛 상품1이 당첨되었습니다.");
            break;
        case 2:
            alert("룰렛 상품2이 당첨되었습니다.");
            break;
        case 3:
            alert("룰렛 상품3이 당첨되었습니다.");
            break;
        case 3:
            alert("룰렛 상품4이 당첨되었습니다.");
            break;
        case 5:
            alert("룰렛 상품5이 당첨되었습니다.");
            break;
        case 6:
            alert("룰렛 상품6이 당첨되었습니다.");
        //default:
        //    alert("꽝! 다음기회에");
    }
};

// reset
const rReset = (ele) => {
    setTimeout(() => {
        ele.disabled = false;
        ele.style.pointerEvents = "auto";
        rLayerPopup(setNum);
        hiddenInput.remove();
    }, 5500);
};

// 룰렛 이벤트 클릭 버튼
document.addEventListener("click", function (e) {
    var target = e.target;
    if (target.className === "btnRouletter") {
        rRotate();
        rReset(target);
    }
});