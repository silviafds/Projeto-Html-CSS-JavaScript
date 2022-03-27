function slide1() {
    document.getElementById("id").src="./images/carrosselImages/minimalismo-1-640px-360px.jpg";
    setTimeout("slide2()", 2000)
}

function slide2() {
    document.getElementById("id").src="./images/carrosselImages/minimalismo-2-640px-360px.jpg";
    setTimeout("slide3()", 2000)
}

function slide3() {
    document.getElementById("id").src="./images/carrosselImages/minimalismo-3-640px-360px.jpg";
    setTimeout("slide4()", 2000)
}

function slide4() {
    document.getElementById("id").src="./images/carrosselImages/minimalismo-4-640px-360px.jpg";
    setTimeout("slide1()", 2000)
}

function bigImg(x) {
    x.style.height = "353px";
    x.style.width = "520px";
}

function normalImg(x) {
    x.style.height = "";
    x.style.width = "";
}