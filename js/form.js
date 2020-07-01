var popup = document.querySelector(".form-close"); 

if (popup) {
  popup.classList.toggle("form-show");
}

var button = document.querySelector(".button-search");

var checkin = popup.querySelector("[name=checkin]");
var checkout = popup.querySelector("[name=checkout]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");
var form = popup.querySelector(".search-hotel-form");

button.addEventListener("click", function (evt) {

    evt.preventDefault();
    popup.classList.toggle("form-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!checkin.value || !checkout.value || !adults.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      form.offsetWidth = form.offsetWidth;
      popup.classList.add("modal-error")
  }
}
);