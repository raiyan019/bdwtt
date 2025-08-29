const images = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg",
  "images/photo6.jpg",
  "images/photo7.jpg",
];

let current = 0;

function startSlideshow() {
  document.getElementById("candleScene").classList.add("hidden");
  document.getElementById("slideshowScene").classList.remove("hidden");
  showImage();
}

function showImage() {
  const img = document.getElementById("slideshowImage");
  img.classList.remove("show");
  img.src = images[current];
  setTimeout(() => img.classList.add("show"), 100);
  current++;

  if (current < images.length) {
    setTimeout(showImage, 2000);
  } else {
    setTimeout(() => {
      document.getElementById("slideshowScene").classList.add("hidden");
      document.getElementById("finalScene").classList.remove("hidden");
    }, 2000);
  }
}

function showMessage() {
  const name = document.getElementById("name").value;
  if (name.trim() === "") return;

  document.getElementById("userName").innerText = name;
  document.querySelector(".container").style.display = "none";
  document.getElementById("cardSection").style.display = "block";
}
