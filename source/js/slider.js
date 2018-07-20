var slider = {};

slider.sliderElements = document.querySelectorAll(".price__color");

for (var i = 0; i < slider.sliderElements.length; i++) {
  slider.sliderElements[i].addEventListener("click", function(event){
    selected(this);
  });
}

function selected(element) {
  var activeItems = document.querySelectorAll(".price__color-active");
  for (var i = 0; i < activeItems.length; i++) {
    activeItems[i].classList.remove("price__color-active");
  }
  element.classList.add("price__color-active");

  var elementProductName = document.querySelector(".price__product-name");
  elementProductName.innerText = element.getAttribute("data-description");
  elementProductName.parentElement.children[0].setAttribute("src", element.getAttribute("data-filePath"));
}
