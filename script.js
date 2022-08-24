const images = document.querySelectorAll(".photo");
const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".modal-bg");
const modalImg = document.getElementById("modal-img");
const modalImgHolder = document.getElementById("modal-img-holder");

const exitBtn = document.querySelector(".exit-modal");

function exitModal() {
  modal.classList.add("hidden");
}

images.forEach((element) => {
  element.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalImg.innerHTML = `<img src=${element.src} class="modal-img" />`;
  });
});

modalBg.addEventListener("click", (item) => {
  exitModal();
});

exitBtn.addEventListener("click", () => {
  exitModal();
});
