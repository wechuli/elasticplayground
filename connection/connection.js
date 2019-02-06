const elasticsearch = require("elasticsearch");

const client = new elasticsearch.Client({
  host:
    "https://search-myelasticcluster-d7qb5hevb3czcm47a6ts46wbtu.us-west-2.es.amazonaws.com/"
});

module.exports = client;