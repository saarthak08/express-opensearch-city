const {Client} = require('@opensearch-project/opensearch');

const protocol = process.env.OS_PROTOCOL;
const auth = process.env.OS_AUTH;
const host = process.env.OS_HOST;
const port = process.env.OS_PORT;

const client = new Client({
  node: protocol + '://' + auth + '@' + host + ':' + port,
});

export default client;
