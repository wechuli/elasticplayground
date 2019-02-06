const client = require("../connection/connection");

client
  .search({
    index: "movies",
    type: "all",
    body: {
      query: {
        match_phrase: { overview: "Love Story" }
      }
    }
  })
  .then(data => console.log(data.hits.hits))
  .catch(error => console.log(error));
