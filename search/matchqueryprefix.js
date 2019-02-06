const client = require("../connection/connection");

//the match_phrase_prefix is the same as match_phrase, except that it allows for prefix matches on the last term in the text

client
  .search({
    index: "movies",
    type: "all",
    body: {
      query: {
        match_phrase_prefix: {
          overview: {
            query: "love story b",
            max_expansions: 100 //controls to how many suffixes the last term will be expanded
          }
        }
      }
    }
  })
  .then(data => console.log(data.hits.hits))
  .catch(err => console.log(err));
