let main = document.querySelector("#main");
let cusrsor = document.querySelector(".cursor");

main.addEventListener("mousemove", function (get) {
  cusrsor.style.left = get.x + "px";
  cusrsor.style.top = get.y + "px";
});
