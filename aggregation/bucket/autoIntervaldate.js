const client = require("../../connection/connection");

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
        movies_over_time: {
          auto_date_histogram: {
            field: "release_date",
            buckets: 20,
            format: "yyyy-MM-dd"
          }
        }
      }
    }
  })
  .then(response => console.log(response))
  .catch(error => console.log(error));
