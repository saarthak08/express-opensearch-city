const {Client} = require('@opensearch-project/opensearch');

module.exports.client = new Client({
  node: process.env.OS_SERVICE_URI,
});
