const images = document.querySelectorAll(".photo");
const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".modal-bg");
const modalImg = document.getElementById("modal-img");
const modalImgHolder = document.getElementById("modal-img-holder");

const exitBtn = document.querySelector(".exit-modal");

const arrowNext = document.getElementById("arrow-forward");
const arrowPrev = document.getElementById("arrow-back");

let slides = [
  "./images/0.jpg",
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
  "./images/6.jpg",
  "./images/7.jpg",
  "./images/8.jpg",
  "./images/9.jpg",
  "./images/10.jpg",
  "./images/11.jpg",
];

function exitModal() {
  modal.classList.add("hidden");
}
function nextImage() {
  let index = findIndex();
  index++;

  if (index >= slides.length) {
    index = 0;
  }

  modalImg.innerHTML = `<img src=${slides[index]} class="modal-img" />`;
}

function prevImage() {
  let index = findIndex();
  index--;

  if (index < 0) {
    index = slides.length - 1;
  }
  modalImg.innerHTML = `<img src=${slides[index]} class="modal-img" />`;
}
function findIndex() {
  let index;
  if (modalImg.innerHTML.length === 44) {
    index = modalImg.innerHTML.slice(19, 20);
  } else {
    index = modalImg.innerHTML.slice(19, 21);
  }
  return index;
}

images.forEach((element, index) => {
  element.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalImg.innerHTML = `<img src=${slides[index]} class="modal-img" />`;
  });
});

modalBg.addEventListener("click", (item) => {
  exitModal();
});

exitBtn.addEventListener("click", () => {
  exitModal();
});

arrowNext.addEventListener("click", () => {
  nextImage();
});

arrowPrev.addEventListener("click", () => {
  prevImage();
});
