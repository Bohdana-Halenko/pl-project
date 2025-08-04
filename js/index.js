// FAQ

document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    const isOpen = faqItem.classList.contains("open");

    if (isOpen) {
      faqItem.classList.remove("open");
      question.querySelector(".faq-icon").textContent = "+";
    } else {
      document.querySelectorAll(".faq-item.open").forEach((openItem) => {
        openItem.classList.remove("open");
        openItem.querySelector(".faq-icon").textContent = "+";
      });

      faqItem.classList.add("open");
      question.querySelector(".faq-icon").textContent = "−";
    }
  });
});


// Burger
const tocBtn = document.querySelector(".toc-toggle");
const tocList = document.querySelector(".toc-list");

tocBtn.addEventListener("click", () => {
  tocList.classList.toggle("open");
});



// Demo-modal
const openBtn = document.getElementById("open-demo");
const modal = document.getElementById("demoModal");
const closeBtn = modal.querySelector(".close");

const iframeSrc =
  "https://demo.bgaming-network.com/games/Plinko/FUN?play_token=6d2447d4-5ed7-40f8-973d-5e8ab6890cc4";
const iframe = modal.querySelector("iframe");

openBtn.addEventListener("click", function (e) {
  e.preventDefault();
  iframe.src = iframeSrc;
  modal.style.display = "flex";
});

function closeModal() {
  modal.style.display = "none";
  iframe.src = "";
}

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});





// Slider
const reviews = document.querySelectorAll(".review");
const dots = document.querySelectorAll(".dot");
let current = 0;

function showReview(index) {
  reviews.forEach((review, i) => {
    review.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
}

function nextReview() {
  current = (current + 1) % reviews.length;
  showReview(current);
}

setInterval(nextReview, 2500);