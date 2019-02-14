const client = require("./connection");

client.indices
  .getMapping({
    index: "movies",
    type: "all"
    // index: "iotdata",
    // type: "all"
  })
//   .then(response => console.log(response.iotdata.mappings.all.properties.payload_fields.properties))
  .then(response => console.log(response.movies.mappings.all.properties))
  .catch(err => console.log(err));
