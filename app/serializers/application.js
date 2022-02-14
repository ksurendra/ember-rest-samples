import JSONSerializer from '@ember-data/serializer/json';

export default class ApplicationSerializer extends JSONSerializer {
  // specify underscore-formatted keys
  keyForAttribute(attr) {
    return attr;
  }

  // use the `data` property in the payload as the serializable response
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = payload.data;
    return super.normalizeResponse(store, primaryModelClass, payload, id, requestType);
  }
}
