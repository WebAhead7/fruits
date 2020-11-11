const searchBtn = document.querySelector("#search-btn");
const info = document.querySelector(".fruits");

function generateElement(fruits) {
  info.innerHTML = "";
  let newDom = `<div class="fruits-info"><h1>${fruits}</h1></div>`;

  return newDom;
}
