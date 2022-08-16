const images = document.querySelectorAll(".photo");
const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".modal-bg");
const modalImgHolder = document.getElementById("modal-img-holder");

function escapeModal() {
  modal.classList.add("hidden");
}

images.forEach((element) => {
  element.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalImgHolder.innerHTML = `<img src=${element.src} class="modal-img" />`;

    console.log(element);
  });
});

modalBg.addEventListener("click", (item) => {
  modal.classList.add("hidden");
  console.log("target: ", item.target);
});

console.log(modal);
