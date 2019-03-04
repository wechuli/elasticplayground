const client = require("../../connection/connection");

// A multi-bucket values source based aggregation that can be applied on numeric values extracted from the documents. It dynamically builds fixed size (a.k.a. interval) buckets over the values

client
  .search({
    index: "movies",
    type: "all",
    body: {
      size: 0,
      aggs: {
        revenue_histogram: {
          histogram: {
            field: "revenue",
            interval: 10000000,
            min_doc_count:1 //when we don't want empty buckets back
          }
        }
      }
    }
  })
  .then(response => {
    console.log(response);
    console.log(response.aggregations.revenue_histogram);
  })
  .catch(error => console.log(error));
