const client = require("../../connection/connection");

// A field data based single bucket aggregation, that creates a bucket of all documents in the current document set context that are missing a field value (effectively, missing a field or having the configured NULL value set).

client
  .search({
    index: "movies",
    type: "all",
    body: {
      size: 0,
      aggs: {
        movies_without_vote_count: {
          missing: {
            field: "vote_count"
          }
        }
      }
    }
  })
  .then(response => {
    console.log(response);
    console.log(response.aggregations.movies_without_vote_count);
  })
  .catch(error => console.log(error));
