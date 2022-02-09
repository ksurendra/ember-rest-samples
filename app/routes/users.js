import Route from '@ember/routing/route';
import fetch from 'fetch';
//import { inject as service } from '@ember/service';

export default class UsersRoute extends Route {
  async model() {
    let response = await fetch('https://reqres.in/api/users');
    let data = await response.json();
    return data.data;
  }

  /* TODO: After josn repsonse is mapped to model
  @service store;

  model() {
    return this.store.findAll('user');
  }*/
}
