const initSlider = () => {
  const imageList = document.querySelector(".shared-story-cont .img-list");
  const slideButtons = document.querySelectorAll(
    ".shared-story-cont .slide-button"
  );
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleSlideButtons = () => {
    slideButtons[0].style.display =
      imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display =
      imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  };

  imageList.addEventListener("scroll", () => handleSlideButtons());
};

window.addEventListener("load", initSlider);

document.addEventListener("DOMContentLoaded", function () {
  var innerContainer = document.querySelector(".scrollable-content");
  innerContainer.scrollTop = 1; // Forces the container to scroll
});
