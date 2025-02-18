const freddy = document.querySelector(".freddy");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  freddy.classList.toggle("animate");
});
