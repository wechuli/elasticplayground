const client = require("../connection/connection");

client
  .search({
    // index: "manual",
    index: "movies",
    type: "all",
    size:0, //we just want the aggregations, we don't need any document back from the query
    body: {
      query: {
        match_all: {}
      },
      size: 1,
      aggs: {
        avg_vote_average: {
          avg: {
            field: "vote_average"
            // field: "temp"
          }
        },
        avg_revenue: {
          avg: {
            field: "revenue"
            // field: "humid"
          }
        }
      }
    }
  })
  .then(response => console.log(response))
  .catch(err => console.log(err));
