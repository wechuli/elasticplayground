const client = require("../connection/connection");
/* A single value metrics aggregation that calculates an approximate count of distinct values */
client
  .search({
    index: "movies",
    type: "all",
    body: {
      query: {
        match_all: {}
      },
      size: 0,
      aggs: {
        type_count: {
          cardinality: {
            field: "vote_average"
          }
        }
      }
    }
  })
  .then(response => console.log(response))
  .catch(err => console.log(err));
