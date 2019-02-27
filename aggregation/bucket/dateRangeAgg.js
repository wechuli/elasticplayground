const client = require("../../connection/connection");
/**  A range aggregation that is dedicated for the date values. */
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
        range: {
          date_range: {
            field: "release_date",
            format: "yyyy-MM-dd",
            ranges: [{ to: "now-10M/M" }, { from: "now-10M/M" }]
          }
        }
      }
    }
  })
  .then(response => {
    console.log(response);
    console.log(response.aggregations.range);
  })
  .catch(error => console.log(error));
