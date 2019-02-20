const client = require("../../connection/connection");
/** This single-value aggregation approximates the median absolute deviation of its search results.

Median absolute deviation is a measure of variability. It is a robust statistic, meaning that it is useful for describing data that may have outliers, or may not be normally distributed. For such data it can be more descriptive than standard deviation.*/
client
  .search({
    index: "movies",
    type: "all",
    body: {
      query: {
        match_all: {}
      },
      aggs: {
        vote_count_average: {
          avg: {
            field: "vote_count"
          }
        },
        vote_count_variability: {
          median_absolute_deviation: {
            field: "vote_count"
          }
        }
      }
    }
  })
  .then(response => console.log(response.aggregations))
  .catch(error => console.log(error));
