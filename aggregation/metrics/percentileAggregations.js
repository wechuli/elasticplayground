const client = require("../../connection/connection");
// A multi-value metrics aggregation that calculates one or more percentiles over numeric values extracted from aggregated documents.
//Percentiles show the point at which a certain percentage of observed values occur.Percentiles are often used to find outliers
//When a range of percentiles are retrieved, they can be used to estimate the data distribution and determine if the data is skewed, bimodal etc
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
        percentile_votes: {
          percentiles: {
            field: "vote_average",
            percents: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] //if we don't provide this field , by default ES will pick 1, 5, 25, 50, 75, 95, 99
          }
        }
      }
    }
  })
  .then(response => console.log(response.aggregations.percentile_votes))
  .catch(error => console.log(error));
