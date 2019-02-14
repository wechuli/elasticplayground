const client = require("../connection/connection");

client
  .search({
    index: "manual",
    // index: "movies",
    type: "all",
    body: {
      size: 0,
      aggs: {
        avg_grade: {
          avg: {
            // field: "vote_average"
            field: "temp"
          }
        }
      }
    }
  })
  .then(response => console.log(response))
  .catch(err => console.log(err));
