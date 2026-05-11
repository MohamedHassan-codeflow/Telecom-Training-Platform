const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");
const courseCards = document.querySelectorAll(".course-card");
const faqItems = document.querySelectorAll(".faq-item");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

function filterCourses() {
  const activeCategory = document.querySelector(".category-btn.active").dataset.category;
  const searchTerm = searchInput.value.toLowerCase().trim();

  courseCards.forEach((card) => {
    const cardCategory = card.dataset.category;
    const cardTitle = card.dataset.title;

    const matchesCategory =
      activeCategory === "all" ||
      cardCategory === activeCategory;

    const matchesSearch =
      cardTitle.includes(searchTerm) ||
      card.innerText.toLowerCase().includes(searchTerm);

    card.classList.toggle("hidden", !(matchesCategory && matchesSearch));
  });
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    filterCourses();
  });
});

searchInput.addEventListener("input", filterCourses);

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});
