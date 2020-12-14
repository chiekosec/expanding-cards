var container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  if (e.target != e.currentTarget) {
    for (var i = 0; i < container.children.length; i++) {
      container.children[i].classList.remove("active");
    }
    e.target.classList.add("active");
  }
});
