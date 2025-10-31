document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".product").forEach((product) => {
    const video = product.querySelector("video");
    if (!video) return; // safety

    product.addEventListener("mouseenter", () => {
      video.currentTime = 0;
      video.play();
      product.classList.add("playing");
    });

    product.addEventListener("mouseleave", () => {
      video.pause();
      video.load();
      product.classList.remove("playing");
    });
  });


  Promise.all([
    fetch("/header & footer/header.html").then((res) => res.text()),
    fetch("/header & footer/footer.html").then((res) => res.text())
  ]).then(([headerContent, footerContent]) => {
    document.querySelector("header").innerHTML = headerContent;
    document.querySelector("footer").innerHTML = footerContent;

   
    attachHeaderEvents();
  });
});

function attachHeaderEvents() {

  const searchInput = document.querySelector(".bx-search-icon");
  const searchText = document.querySelector(".search-text");
  const searchBox = document.querySelector(".search-input");

  function toggleSearch() {
    searchBox.classList.toggle("active");
    if (searchBox.classList.contains("active")) {
      searchBox.focus();
    }
  }

  searchInput?.addEventListener("click", toggleSearch);
  searchText?.addEventListener("click", toggleSearch);
  searchBox?.addEventListener("blur", () => {
    searchBox.classList.remove("active");
  });

  const loginBtn = document.querySelector(".dropdown-login .login");
  const dropdown = document.querySelector(".dropdown-content-login");

  if (loginBtn && dropdown) {
    loginBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", () => {
      dropdown.style.display = "none";
    });
  }
}


const container = document.querySelector(".all-logs-container");
const arrowLeft = document.querySelector(".arrow1");
const arrowRight = document.querySelector(".arrow2");

let scrollAmount = 0;
const cardWidth = 420; 
const totalCards = document.querySelectorAll(".logs-container").length;
const visibleCards = Math.floor(container.parentElement.offsetWidth / cardWidth);


const maxScroll = -(cardWidth * (totalCards - visibleCards));

arrowRight.addEventListener("click", () => {
  scrollAmount -= cardWidth;
  if (scrollAmount < maxScroll) scrollAmount = maxScroll;
  container.style.transform = `translateX(${scrollAmount}px)`;
});

arrowLeft.addEventListener("click", () => {
  scrollAmount += cardWidth;
  if (scrollAmount > 0) scrollAmount = 0; 
  container.style.transform = `translateX(${scrollAmount}px)`;
});


