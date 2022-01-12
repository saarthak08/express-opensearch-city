import {IndicesExists} from '@opensearch-project/opensearch/api/requestParams';
import osClient from '../utils/config';

export default class ProductOsService {
  private indexName = 'products';

  async initIndex() {
    const params: IndicesExists = {
      index: this.indexName,
    };
    const exists = await osClient.indices.exists(params);
    if (exists.statusCode === 200 && exists.body === false) {
      const response = await osClient.indices.create({index: this.indexName});
      if (response.statusCode === 200) {
        console.log('Products Index Created!');
      } else {
        throw new Error(
          'Error in creating products index. ' + response.warnings
        );
      }
    }
  }
}
