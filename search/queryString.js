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
          auto_generate_synonyms_phrase_query: true
        }
      }
    }
  })
  .then(resp => console.log(resp.hits.hits))
  .catch(err => console.log(err));

// The query_string query supports multi-terms expansion with the synonym_grapgh token filter


client
  .search({
    index: "movies",
    type: "all",
    body: {
      query: {
        query_string: {
          fields: ["overview","title","tagline"], //running search on multiple fields
          query: "just AND when OR she",
          minimum_should_match:2 //match a minimum of two of the words

         
        }
      }
    }
  })
  .then(resp => console.log(resp.hits.hits))
  .catch(err => console.log(err));

