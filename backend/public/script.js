const search = document.querySelector("#search");
const list = document.querySelector("#auto-complete");
const link = `http://localhost:3000/getdata?name=`;

function getData(searched) {
  fetch(`${link}${searched}`)
    .then((res) => res.json())
    .then((res) => {
      renderList(res);
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
    option.classList.add("the-option");
    option.innerText = `${curr["city"]}, ${curr["country"]}`;
    option.value = curr["name"];
    list.appendChild(option);
  });
}

search.addEventListener("input", (e) => {
  const searched = e.target.value;

  searched.length >= 3 && getData(searched);
  search.value == "" ? (list.innerHTML = "") : null;
});
