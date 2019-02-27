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
            ranges: [
              { from: "1900-01-01", to: "1929-12-31" },
              { from: "1930-01-01", to: "1949-12-31" },
              { from: "1950-01-01", to: "1999-12-31" },
              { from: "2000-01-01", to: "2010-12-31" },
              { from: "2011-01-01", to: "now/d" }
            ]
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
