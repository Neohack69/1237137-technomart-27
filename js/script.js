var link = document.querySelector("#formOpen");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  var form = document.querySelector(".feedback");
  form.classList.remove("visuallyHidden");
});
var close = document.querySelector(".modalClose");
close.addEventListener("click", function () {
  var form = document.querySelector(".feedback");
  form.classList.add("visuallyHidden");
});

var popup = document.querySelector(".location");
popup.addEventListener("click", function (evt) {
  evt.preventDefault();
  var map = document.querySelector(".popupWindow");
  map.classList.remove("visuallyHidden");
});
var mapclose = document.querySelector(".popupClose");
mapclose.addEventListener("click", function () {
  var close = document.querySelector(".popupWindow");
  close.classList.add("visuallyHidden");
});
