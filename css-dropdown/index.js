let accordionHeaders = Array.from(document.querySelectorAll(".accordion-header"));

accordionHeaders.map((header) =>
  header.addEventListener("click", () => {
    toggleAccordion(header);
  })
);

function toggleAccordion(currentTarget) {
  accordionHeaders.map((header) => {
    const accordionContent = header.nextElementSibling;
    const togglerBtn = header.firstElementChild;

    if (currentTarget !== header) {
      togglerBtn.classList.remove("active");
      accordionContent.classList.remove("active-content");
    } else {
      togglerBtn.classList.toggle("active");
      accordionContent.classList.toggle("active-content");
    }
  });
}
