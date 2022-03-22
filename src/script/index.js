const $iconEye = document.querySelector(".form-box-icon-eye");
const $checkedBox = document.querySelector(".checked-box");

let view = true;

const viewPassword = () => {
  const $inputPassword = document.querySelector("#input-password");

  if (view) $inputPassword.setAttribute("type", "text");
  if (!view) $inputPassword.setAttribute("type", "password");
  view = !view;
};

$iconEye.addEventListener("click", viewPassword);

let clicked = true;

const checked = () => {
  if (clicked) {
    $checkedBox.classList.add("clicked");
  } else {
    $checkedBox.classList.remove("clicked");
  }
  clicked = !clicked;
};

$checkedBox.addEventListener("click", checked);
