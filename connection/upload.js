const dataset = require("./steam.json");
const client = require("./connection");

dataset.forEach((data, index) => {
  client
    .index({
      index: "windturbine",
      type: "all",
      id: index,
      ignore: [404],
      body: data
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
});

console.log("Records successfully created");
