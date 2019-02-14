const client = require("../connection/connection");

client
  .search({
    index: "manual",
    // index: "movies",
    type: "all",
    body: {
      query: {
        match_all: {}
      },
      size: 1,
      aggs: {
        avg_temp: {
          avg: {
            // field: "vote_average"
            field: "temp"
          }
        },
        avg_humid: {
          avg: {
            // field: "vote_average"
            field: "humid"
          }
        }
      }
    }
  })
  .then(response => console.log(response))
  .catch(err => console.log(err));
