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


// Cookies
// function setCookie(name, value, days) {
//   const date = new Date();
//   date.setTime(date.getTime() + (days*24*60*60*1000));
//   const expires = "expires=" + date.toUTCString();
//   document.cookie = name + "=" + value + ";" + expires + ";path=/;SameSite=Lax";
// }

// function getCookie(name) {
//   const decodedCookie = decodeURIComponent(document.cookie);
//   const cookies = decodedCookie.split(';');
//   const nameEQ = name + "=";
//   for (let c of cookies) {
//     while (c.charAt(0) === ' ') c = c.substring(1);
//     if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
//   }
//   return null;
// }

// function eraseCookie(name) {
//   document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;SameSite=Lax";
// }

// window.addEventListener("load", function() {
//   const choice = getCookie("cookiesChoice");
//   const banner = document.getElementById("cookie-banner");

//   if (!choice) {
//     banner.style.display = "block";
//   }

//   document.getElementById("accept-cookies").addEventListener("click", function() {
//     setCookie("cookiesChoice", "accepted", 365);
//     banner.style.display = "none";
//   });

//   document.getElementById("decline-cookies").addEventListener("click", function() {
//     setCookie("cookiesChoice", "declined", 365);
//     eraseCookie("cookiesAccepted");
//     banner.style.display = "none";
//   });
// });



// для Vercel
function setConsent(value) {
  const date = new Date();
  date.setTime(date.getTime() + (365*24*60*60*1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = "cookiesChoice=" + value + ";" + expires + ";path=/;SameSite=Lax;Secure";

  localStorage.setItem("cookiesChoice", value);
}

function getConsent() {
  const local = localStorage.getItem("cookiesChoice");
  if (local) return local;

  const nameEQ = "cookiesChoice=";
  const ca = document.cookie.split(';');
  for (let c of ca) {
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
  }
  return null;
}

window.addEventListener("load", function() {
  const choice = getConsent();
  const banner = document.getElementById("cookie-banner");

  if (!choice) {
    banner.style.display = "block";
  }

  document.getElementById("accept-cookies").addEventListener("click", function() {
    setConsent("accepted");
    banner.style.display = "none";
  });

  document.getElementById("decline-cookies").addEventListener("click", function() {
    setConsent("declined");
    banner.style.display = "none";
  });
});