const client = require("../../connection/connection");
/* A multi-value metrics aggregation that computes stats over numeric values extracted from aggregated documents */
client
  .search({
    index: "movies",
    type: "all",
    body: {
      size: 0,
      aggs: {
        ratings_stats: {
          extended_stats: {
            field: "vote_average"
          }
        }
      }
    }
  })
  .then(Response => console.log(Response))
  .catch(err => console.log(err));
