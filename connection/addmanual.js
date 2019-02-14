const client = require("../connection/connection");

const id = 3;
const data = {
  temp: 27.90,
  humid: 59
};

client
  .index({
    index: "manual",
    type: "all",
    ignore: [404],
    id,
    body: data
  })
  .then(response => console.log("Document indexed,", response))
  .catch(err =>
    console.log("An error occured while trying to index your document", err)
  );
