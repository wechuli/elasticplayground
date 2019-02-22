const client = require("../../connection/connection");

client
  .search({
    index: "movies",
    type: "all",
    body: {
      size: 0,
      aggs: {
        language: {
          terms: {
            field: "genres"
          }
        }
      }
    }
  })
  .then(response => console.log(response))
  .catch(error => console.log(error));
