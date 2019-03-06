const client = require("../../connection/connection");

// A multi-bucket value source based aggregation that enables the user to define a set of ranges - each representing a bucket. During the aggregation process, the values extracted from each document will be checked against each bucket range and "bucket" the relevant/matching document. Note that this aggregation includes the from value and excludes the to value for each range.

client
  .search({
    index: "movies",
    type: "all",
    body: {
      size: 0,
      aggs: {
        vote_ranges: {
          range: {
            field: "vote_average",
            keyed: true,
            ranges: [
              { to: 3 },
              { from: 3, to: 5 },
              { from: 5, to: 6 },
              { from: 6, to: 8 },
              { from: 8, to: 10 }
            ]
          },
          aggs: { //we can do a metric subaggregation to return the average of each of the buckets, how cool is that!
            vote_average: {
              avg: {
                field: "vote_average"
              }
            }
          }
        }
      }
    }
  })
  .then(response => console.log(response.aggregations.vote_ranges.buckets))
  .catch(error => console.log(error));
