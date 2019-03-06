const client = require("./connection");

client.indices
  .getMapping({
    index: "movies",
    type: "all"
    // index: "iotdata",
    // type: "all"
  })
  //   .then(response => console.log(response.iotdata.mappings.all.properties.payload_fields.properties))
  .then(response => console.log(response.movies.mappings.all.properties.genres))
  .catch(err => console.log(err));

client
  .count({
    index: "windturbine",
    type: "all"
  })
  .then(resp => console.log(resp))
  .catch(err => console.log(err));
