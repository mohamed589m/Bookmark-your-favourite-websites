const NameInput = document.querySelector("#name");
const URLInput = document.querySelector("#url");
const submit = document.querySelector("#submit");

let links;
if (localStorage.object != null) {
  links = JSON.parse(localStorage.object);
} else {
  links = [];
}

submit.onclick = function (e) {
  e.preventDefault();
  let newObj = {
    name: NameInput.value,
    url: URLInput.value,
  };
  console.log(this.name);

  if (NameInput.value !== "" && URLInput.value !== "") {
    links.push(newObj);
  }
  console.log(links);

  clearInputs();
  //save to localstorage
  localStorage.setItem("object", JSON.stringify(links));
  showData();
};

function clearInputs() {
  (NameInput.value = ""), (URLInput.value = "");
}

function showData() {
  let table = "";
  for (let i = 0; i < links.length; i++) {
    table += `
        <tr>
          <td>${i + 1}</td>
          <td>${links[i].name}</td>
          <td><a href=${links[i].url} target="_blank">visit</a></td>

          <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr> 
    `;
  }

  document.getElementById("tbody").innerHTML = table;
}
showData();

function deleteData(i) {
  links.splice(i, 1);
  localStorage.object = JSON.stringify(links);
  showData();
}
