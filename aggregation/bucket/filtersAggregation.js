const client = require("../../connection/connection");

/**  Defines a multi bucket aggregation where each bucket is associated with a filter. Each bucket will collect all documents that match its associated filter. */

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
        video_content: {
          filters: {
            filters: [
              {
                match: { video: false }
              },
              { match: { video: true } }
            ]
          }
        }
      }
    }
  })
  .then(response => {
    console.log(response);
    console.log(response.aggregations.video_content);
  })
  .catch(err => console.log(err));

//   The filtered buckets are returned in the same order as provided in the request