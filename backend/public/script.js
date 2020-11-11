const search = document.querySelector("#search");
const list = document.querySelector("#auto-complete");
const datalisto = document.querySelector(".datalisto");

const local = `http://localhost:3000`;
// const online = `https://fly-webahead.herokuapp.com/getdata?name=`;
// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const mapLink = `http://www.google.com/maps/place/`;
// let globalData;
function getData(searched) {
  fetch(`${local}/getdata?name=${searched}`)
    .then((res) => res.json())
    .then((res) => {
      renderList(res);
      globalData = res;
    })
    .catch((err) => {
      console.log(err);
    });
}

function renderList(arr) {
  console.log(arr);
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
  fetch(`${local}/fruitdata?name=${search.value}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {});
});
