const client = require("../connection/connection");
//The query_string query parses the input and splits text around operators. Each textual part is analyzed independently of each other
client
  .search({
    index: "movies",
    type: "all",
    body: {
      query: {
        query_string: {
          default_field: "overview",
          query: "just AND when OR she",
          auto_generate_synonyms_phrase_query: true,

        }
      }
    }
  })
  .then(resp => console.log(resp.hits.hits))
  .catch(err => console.log(err));