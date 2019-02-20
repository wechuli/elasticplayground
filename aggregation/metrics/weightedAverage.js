const client = require("../../connection/connection");
/*weighted average is a single-value metrics aggregation that computes the weighted average of numeric values
that are extracted from the aggregated documents*/
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
        weighted_avg_run_time: {
          weighted_avg: {
            //below is a fake aggregation and doesn't provide any useful information, just needed to see the syntax
            value: {
              field: "revenue"
            },
            weight: {
              field: "vote_average"
            }
          }
        }
      }
    }
  })
  .then(response => console.log(response))
  .catch(error => console.log(error));
