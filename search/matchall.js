const client = require("../connection/connection");

client
  .search({
    index: "movies",
    body: {
      size: 2000, //we can tell elasticsearch the number of documents we want
      query: {
        match_all: {}
      }
    }
  })
  .then(data => console.log(data.hits.hits.length))
  .catch(error => console.log(error));
