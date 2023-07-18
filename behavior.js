document.addEventListener("DOMContentLoaded", function (event) {
  const thumbnailElement = document.getElementById("smart_thumbnail");
  let isBigger = false;

  thumbnailElement.addEventListener("click", function () {
    if (!isBigger) {
      thumbnailElement.classList.add("small");
    } else {
      thumbnailElement.classList.remove("small");
    }

    isBigger = !isBigger;
  });

});
