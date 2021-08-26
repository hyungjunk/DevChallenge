const faqContainers = document.querySelectorAll(".faq-container");
faqContainers.forEach((c) => {
  c.addEventListener("click", () => {
    c.querySelector("div").classList.toggle("active");
  });
});
