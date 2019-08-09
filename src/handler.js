const fetch = require("node-fetch");
let i = 0;
while (i < 1000) {
  fetch("http://localhost:3000")
    .then(result => result.json())
    .then(result => console.log(result))
    .catch(error => console.error);
  i++;
}
