const client = require("../../connection/connection");

// Defines a single bucket of all the documents within the search execution context. This context is defined by the indices and the document types you’re searching on, but is not influenced by the search query itself.Global aggregators can only be placed as top level aggregators because it doesn’t make sense to embed a global aggregator within another bucket aggregator.

client
  .search({
    index: "movies",
    type: "all",
    body: {
      query: {
        match: {
          original_title: {
            query: "Jury"
          }
        }
      },
      aggs: {
        all_movies: {
          global: {}, //does not care what the query context was, just gets all documents in the index and type
          aggs: {
            average_rating: {
              avg: {
                field: "vote_average"
              }
            }
          }
        }
      }
    }
  })
  .then(response => {
    console.log(response.hits.hits);
    console.log(response.aggregations)
  })
  .catch(err => console.log(err));
