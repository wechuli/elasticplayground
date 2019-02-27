const client = require("../../connection/connection");
/*Defines a single bucket of all the documents in the current document set context that match a specified filter. Often this will be used to narrow down the current aggregation context to a specific set of documents. */
client
  .search({
    index: "movies",
    type: "all",
    body: {
      size: 0,
      aggs: {
        adult_movies: {
          filter: {
            term: {
              director: "Jack Hill"
            }
          }
        }
      }
    }
  })
  .then(response => {
    console.log(response);
    // console.log(response.hits.hits);
  })
  .catch(error => console.log(error));
/**
 * String fields can be of type text (treated as full text, like the body of an email), or keyword (treated as exact values, like an email address or a zip code). Exact values (like numbers, dates, and keywords) have the exact value specified in the field added to the inverted index in order to make them searchable.

However, text fields are analyzed. This means that their values are first passed through an analyzer to produce a list of terms, which are then added to the inverted index.

There are many ways to analyze text: the default standard analyzer drops most punctuation, breaks up text into individual words, and lower cases them. For instance, the standard analyzer would turn the string “Quick Brown Fox!” into the terms [quick, brown, fox].

This analysis process makes it possible to search for individual words within a big block of full text.

The term query looks for the exact term in the field’s inverted index — it doesn’t know anything about the field’s analyzer. This makes it useful for looking up values in keyword fields, or in numeric or date fields. When querying full text fields, use the match query instead, which understands how the field has been analyzed.
 * 
 * 
 */
