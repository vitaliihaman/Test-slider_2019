var wrapper,
    image,
    namesImg,
    src,
    prevButton,
    nextButton;

wrapper = document.getElementById("wrapper");
image = document.getElementById("image");
namesImg = ['usa','usa_nyc','brasil','japan','china','australia','france','egypt','england'];
prevButton = document.getElementById("previous");
nextButton = document.getElementById("next");
src = 0;

prevButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);

function renderImg(src) {
    image.setAttribute("src","assets/images/" + namesImg[src] + ".png");
    //console.log(image.getAttribute('src'));
}

function previous() {
    var count = (src > 0) ?  src--  : src = namesImg.length-1;
    renderImg(src);
}

function next() {
    var count = (src < namesImg.length-1) ?  src++  : src = 0;
    renderImg(src);
}

renderImg(src);

