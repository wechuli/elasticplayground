//A single-value metrics aggregation that keeps track and returns the maximum value among the numeric values extracted
const client = require("../connection/connection");

client
  .search({
    index: "movies",
    type: "all",
    body: {
      size: 0,
      aggs: {
        highest_revenue: {
          max: {
            field: "revenue"
          }
        }
      }
    }
  })
  .then(response => console.log(response))
  .catch(err => console.log(err));
