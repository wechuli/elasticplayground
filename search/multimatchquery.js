const client = require("../connection/connection");
//The multi-match query builds on the match query to allow mutli-field queries

client
  .search({
    index: "movies",
    type: "all",
    body: {
      size: 30,
      query: {
        multi_match: {
          query: "matter of life",
          fields: ["tagline", "overview"], //the fields we want to match the query
          type:'phrase' //There are different types of multi_match query e.g best_fields,most_fields,cross_fields,phrase.phrase_prefix see doc
        }
      }
    }
  })
  .then(response => console.log(response.hits.hits))
  .catch(error => console.log(error));
