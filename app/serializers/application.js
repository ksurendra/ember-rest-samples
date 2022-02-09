import JSONAPISerializer from '@ember-data/serializer/json-api';
import { underscore } from '@ember/string';

export default class ApplicationSerializer extends JSONAPISerializer {
  /* TODO: After josn repsonse is mapped to model
  // specify underscore-formatted keys
  keyForAttribute(attr) {
    return underscore(attr);
  }

  // use the `data` property in the payload as the serializable response
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = payload.data;
    return super.normalizeResponse(store, primaryModelClass, payload, id, requestType);
  }
  */
}
