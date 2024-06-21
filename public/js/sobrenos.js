const frames = document.querySelectorAll(".icon-frame");
function moveImage(e) {
  const images = document.querySelectorAll(".hover-pic");
  e.target.matches(".next") && frames[0].append(images[0]);
  e.target.matches(".prev") &&
    frames[frames.length - 1].prepend(images[images.length - 1]);
}
document.addEventListener("click", moveImage, false);