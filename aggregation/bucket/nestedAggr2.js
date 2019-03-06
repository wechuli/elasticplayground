const client = require("../../connection/connection");
//A special single bucket aggregation that enables aggregating nested documents.

client
  .search({
    index: "movies",
    type: "all",
    body: {
      size: 0,
      aggs: {
        spoken_languages: {
          nested: {
            path: "spoken_languages"
          },
          aggs: {
            minimum_id: {
              value_count: {
                field: "genres.id"
              }
            }
          }
        }
      }
    }
  })
  .then(response => console.log(response.aggregations.spoken_languages))
  .catch(error => console.log(error));
