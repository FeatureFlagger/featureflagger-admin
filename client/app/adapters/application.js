import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import AjaxServiceSupport from 'ember-ajax/mixins/ajax-support';
import ENV from '../config/environment';

export default JSONAPIAdapter.extend(DataAdapterMixin, AjaxServiceSupport, {
  authorizer: 'authorizer:application',
  host: ENV.API.host,
  namespace: ENV.API.namespace
});
