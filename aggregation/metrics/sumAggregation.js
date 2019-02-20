const client = require("../../connection/connection");
/** A single-value metrics aggregation that sums up numeric values that are extracted from the aggregated documents.*/
client
  .search({
    index: "movies",
    type: "all",
    body: {
      query: {
        match_all: {}
      },
      aggs: {
        vote_count_sum: {
          sum: {
            field: "vote_count"
          }
        }
      }
    }
  })
  .then(response => console.log(response.aggregations))
  .catch(error => console.log(error));
