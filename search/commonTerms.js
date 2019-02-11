const client = require("../connection/connection");

//The common terms query is a modern alternative to stopwords which improves the precision and recall of search results(by taking stopwords into account), without sacrificing performance
//If we remove stopwords, we lose precision and we lose recall
//The common terms query divides the query terms into two groups, more important and less important
client
  .search({
    index: "movies",
    type: "all",
    body: {
      query: {
        common: {
          body: {
            query: "getting a brand",
            cutoff_frequency: 0.001
          }
        }
      }
    }
  })
  .then(response => console.log(response.hits.hits))
  .catch(error => console.log(error));
