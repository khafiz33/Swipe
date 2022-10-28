const imgs = document.getElementById('imgs');
const left = document.getElementById('left');
const right = document.getElementById('right');

const texts = document.getElementById('texts');
const left2 = document.getElementById('left2');
const right2 = document.getElementById('right2');

const boxs = document.getElementById('boxs');
const left3 = document.getElementById('left3');
const right3 = document.getElementById('right3');

const img = document.querySelectorAll('#imgs ul');
const text = document.querySelectorAll('#texts p');
const box = document.querySelectorAll('#boxs div');

let idx = 0;
let idx2 = 0;
let idx3 = 0;

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1
  }
  imgs.style.transform = `translateX(${-idx * 1220}px)`;
}

right.addEventListener('click', function change() {
  idx++;
  changeImage()
});

left.addEventListener('click', function change() {
  idx--;
  changeImage()
});

function changeImage2() {
  if (idx2 > text.length - 1) {
    idx2 = 0;
  } else if (idx2 < 0) {
    idx2 = text.length - 1
  }
  texts.style.transform = `translateX(${-idx2 * 822}px)`;
}

right2.addEventListener('click', function change2() {
  idx2++;
  changeImage2()
});

left2.addEventListener('click', function change2() {
  idx2--;
  changeImage2()
});

function changeImage3() {
  if (idx3 > box.length - 1) {
    idx3 = 0;
  } else if (idx3 < 0) {
    idx3 = box.length - 1
  }
  boxs.style.transform = `translateX(${-idx3 * 822}px)`;
}

right3.addEventListener('click', function change3() {
  idx3++;
  changeImage3()
});

left3.addEventListener('click', function change3() {
  idx3--;
  changeImage3()
});

var elHeader = document.querySelector("#header");
var elHeaderBtn = document.querySelector("#header_btn");

elHeaderBtn.addEventListener("click", () => {
  elHeader.classList.toggle("header--active")
})