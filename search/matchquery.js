const client = require("../connection/connection");

//match queries accept text/numerics/dates. analyzes them and contructs a query

client
  .search({
    index: "movies",
    type: "all",
    body: {
      query: {
        match: {
          original_title: {
            query: "Thirty Two Short Films",
            // operator: "and", //if the words should be or or and
            minimum_should_match:2 //How many words should match the query
          }
        }
      }
    }
  })
  .then(data => console.log(data.hits.hits))
  .catch(error => console.log(error));
