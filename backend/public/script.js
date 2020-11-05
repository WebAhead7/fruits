const search = document.querySelector("#search");
const list = document.querySelector("#auto-complete");

const local = `http://localhost:3000/getdata?name=`;
const online = `https://fly-webahead.herokuapp.com/getdata?name=`;
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const mapLink = `http://www.google.com/maps/place/`;

let globalData;

function getData(searched) {
  fetch(`${local}${searched}`)
    .then((res) => res.json())
    .then((res) => {
      renderList(res);
      globalData = res[0];
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
    option.innerText = `${curr["city"]}, ${curr["country"]}`;
    option.value = curr["name"];
    if (curr["name"] == "cannotfind") {
      option.innerText = `${search.value}`;
      option.value = `${search.value}`;
      list.appendChild(option);
    }
    list.appendChild(option);
  });
}

search.addEventListener("input", (e) => {
  const searched = e.target.value;

  searched.length >= 3 && getData(searched);
  search.value == "" ? (list.innerHTML = "") : null;
});

searchBtn.addEventListener("click", (e) => {
  // console.log(globalData);
  info.innerHTML = generateElement(globalData);
});
