const client = require("../../connection/connection");

/** This multi-bucket aggregation is similar to the normal histogram, but it can only be used with date values. */

client
  .search({
    index: "movies",
    type: "all",
    body: {
      size: 0,
      aggs: {
        release_date_aggs: {
          date_histogram: {
            field: "release_date",
            interval: "year",
            format:'yyyy-MM-dd'
          },
          aggs: { //This is so cool, we can nest a metric aggregation inside of the bucket aggregations and elastic returns the metrics for that bucket, awesome.
            analytics: {
              stats: {
                field: "budget"
              }
            }
          }
        }
      }
    }
  })
  .then(response =>{
    console.log(response.aggregations.release_date_aggs.buckets)
    // console.log(response.aggregations.release_date_aggs.avg)
  } )
  .catch(error => console.log(error));
