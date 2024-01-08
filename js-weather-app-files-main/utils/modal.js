const modal = document.getElementById("modal");
const modalText = document.querySelector(".modal__text");
const modalButton = document.querySelector(".modal__button");
const showModal = (text, type) => {
  modalText.innerText = text;
  modal.style.display = "flex";
  if (type === "error") {
    modalButton.innerText = "❌";
  } else {
    modalButton.innerText = "✅";
  }
  setTimeout((text) => {
    modal.style.display = "none";
  }, 4000);
};

export default showModal;
