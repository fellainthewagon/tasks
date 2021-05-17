const list = document.querySelector(".images"),
  listElems = document.querySelectorAll(".images li"),
  carousel = document.querySelector(".carousel"),
  width = 130;

let position = 0;

carousel.addEventListener("click", (e) => {
  if (e.target.classList.contains("prev")) {
    position += width;
    position = Math.min(position, 0);
    list.style.marginLeft = position + "px";
  }

  if (e.target.classList.contains("next")) {
    position -= width;
    position = Math.max(position, -width * (listElems.length - 3));
    list.style.marginLeft = position + "px";
  }
});
