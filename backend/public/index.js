const search = document.querySelector("#search");
const searchBtn = document.querySelector("#search-btn");
const info = document.querySelector(".fruits");
const list = document.querySelector("#auto-complete");
const datalist = document.querySelector(".the-datalist");

const local = `http://localhost:3000`;
const online = `https://fruitsdata.herokuapp.com`;

const API_URL = local;

function getData(searched) {
  fetch(`${API_URL}/getdata?name=${searched}`)
    .then((res) => res.json())
    .then((res) => {
      renderList(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

function renderList(arr) {
  list.innerHTML = "";
  arr.forEach((curr) => {
    const option = document.createElement("option");
    option.innerText = `${curr}`;
    if (curr == "not found") {
      option.innerText = curr;
      option.value = `${search.value}`;
      list.appendChild(option);
    } else {
      option.value = curr;
      list.appendChild(option);
    }
  });
}

search.addEventListener("input", (e) => {
  const searched = e.target.value;

  searched.length >= 0 && getData(searched);
  search.value == "" ? (list.innerHTML = "") : null;
});

searchBtn.addEventListener("click", (e) => {
  fetch(`${API_URL}/fruitdata?name=${search.value}`)
    .then((res) => res.json())
    .then((res) => {
      generateImage(res);
    })

    .catch((err) => {
      console.log("Error", err);
    });
});

function generateImage(img) {
  const giphyContainer = document.querySelector("#giphyContainer");
  giphyContainer.innerHTML = "";
  const giphy = document.createElement("img");
  giphy.setAttribute("src", img);
  giphyContainer.appendChild(giphy);
}
