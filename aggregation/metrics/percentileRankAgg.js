const client = require("../../connection/connection");
/** A multi-value metrics aggregation that calculates one or more percentile ranks over numeric values extracted from aggregated documents Percentile rank shows the percentage of observed values which are below certain value */
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
        budget_ranks: {
          percentile_ranks: {
            field: "budget",
            values: [20000, 100000000]
          }
        }
      }
    }
  })
  .then(response => console.log(response.aggregations.budget_ranks))
  .catch(error => console.log(error));
