// sidebar action
const sidebar = document.querySelector(".sidebar");
const btnList = document.getElementById("btnList");
const btnClose = document.getElementById("btnClose");

btnList.addEventListener("click", function () {
  sidebar.style.right = "0";
});

btnClose.addEventListener("click", function () {
  sidebar.style.right = "-300px";
});
// end of sidebar action

// slider action
const slides = [
  {
    title: "Flexible Chair",
    desc: "Lorem ipsum dolor sit amet...",
    img: "image/6.png",
    id: 1,
  },
  {
    title: "Modern Table",
    desc: "Lorem ipsum dolor sit amet...",
    img: "image/7.png",
    id: 2,
  },
  {
    title: "Luxury Sofa",
    desc: "Lorem ipsum dolor sit amet...",
    img: "image/home-img-2.png",
    id: 3,
  },
  {
    title: "Cozy Armchair",
    desc: "Lorem ipsum dolor sit amet...",
    img: "image/home-img-4.png",
    id: 4,
  },
];

let activeIndex = 0;

const slideTitle = document.getElementById("slideTitle");
const slideDesc = document.getElementById("slideDesc");
const slideImage = document.getElementById("slideImage");

function displaySlide() {
  const slide = document.getElementById("currentSlide");
  slide.style.animation = "none";
  slide.offsetWidth;
  slide.style.animation = "zoomIn 0.5s ease";
  slideTitle.textContent = slides[activeIndex].title;
  slideDesc.textContent = slides[activeIndex].desc;
  slideImage.setAttribute("src", slides[activeIndex].img);
}

document.querySelector(".arrowRight").addEventListener("click", function () {
  activeIndex = (activeIndex + 1) % slides.length;
  displaySlide();
});

document.querySelector(".arrowLeft").addEventListener("click", function () {
  activeIndex = (activeIndex - 1 + slides.length) % slides.length;

  displaySlide();
});

displaySlide();
// end of slider action

// popup action
const gridPhotos = document.querySelectorAll(".gridphotos img");

const popupDiv = document.getElementById("popupDiv");
const popupImage = document.getElementById("popupImage");
const popupDesc = document.getElementById("popupDesc");
const popupTitle = document.getElementById("popupTitle");
const closeBtn = document.querySelector(".closeBtn");
const popupContent = document.querySelector(".popupContent");

const data = [
  { title: "Photo 1", desc: "Lorem ipsum dolor sit amet" },
  { title: "Photo 2", desc: "Lorem ipsum dolor sit amet" },
  { title: "Photo 3", desc: "Lorem ipsum dolor sit amet" },
  { title: "Photo 4", desc: "Lorem ipsum dolor sit amet" },
  { title: "Photo 5", desc: "Lorem ipsum dolor sit amet" },
  { title: "Photo 6", desc: "Lorem ipsum dolor sit amet" },
  { title: "Photo 7", desc: "Lorem ipsum dolor sit amet" },
  { title: "Photo 8", desc: "Lorem ipsum dolor sit amet" },
  { title: "Photo 9", desc: "Lorem ipsum dolor sit amet" },
];

for (let i = 0; i < gridPhotos.length; i++) {
  gridPhotos[i].addEventListener("click", function () {
    popupDiv.style.display = "block";
    popupImage.src = gridPhotos[i].src;
    popupTitle.textContent = data[i].title;
    popupDesc.textContent = data[i].desc;
  });
}

closeBtn.addEventListener("click", function () {
  popupDiv.style.display = "none";
});

// كنت بلعب وظبطت الانيمشن دي
addEventListener("click", function () {
  popupContent.style.animation = "zoomIn 0.5s ease";
});
