function a() {
  let link = document.getElementById('formOpen');

  link.addEventListener('click', function (event) {
    event.preventDefault();
    let forma = document.getElementsByClassName("feedback");
    console.log(forma.classList.contains("visuallyHidden"));
    forma.classList.remove("visuallyHidden");

  });
}


