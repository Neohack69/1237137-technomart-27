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
