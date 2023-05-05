window.onload = function () {
  const allElements = document.querySelectorAll("*");

  allElements.forEach(element => {
    element.style.userSelect = "text";
  });
}