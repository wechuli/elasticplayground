//A single-value metrics aggregation that keeps track and returns the minimum value among the numeric values extracted
const client = require("../connection/connection");

client
  .search({
    index: "movies",
    type: "all",
    body: {
      size: 0,
      aggs: {
        highest_revenue: {
          min: {
            field: "revenue"
          }
        }
      }
    }
  })
  .then(response => console.log(response))
  .catch(err => console.log(err));
