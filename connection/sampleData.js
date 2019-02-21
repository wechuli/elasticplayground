const client = require("./connection");

client
  .search({
    index: "windturbine",
    type: "all",
    body: {
      size: 1,
      query: {
        match_all: {}
      }
    }
  })
  .then(response => console.log(response.hits.hits))
  .catch(error => console.log(error));
