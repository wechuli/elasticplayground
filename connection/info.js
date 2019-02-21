const client = require("./connection");

client.indices
  .getMapping({
    index: "windturbine",
    type: "all"
    // index: "iotdata",
    // type: "all"
  })
  //   .then(response => console.log(response.iotdata.mappings.all.properties.payload_fields.properties))
  .then(response => console.log(response.windturbine.mappings.all.properties))
  .catch(err => console.log(err));

client
  .count({
    index: "windturbine",
    type: "all"
  })
  .then(resp => console.log(resp))
  .catch(err => console.log(err));
