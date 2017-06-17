import ApplicationSerializer from 'featureflagger-admin/serializers/application';
import EmbeddedRecordsMixin from 'ember-data/serializers/embedded-records-mixin';

export default ApplicationSerializer.extend(EmbeddedRecordsMixin, {
  attrs: {
    roles: { embedded: 'always' },
    lastLoginUTC: { key: 'last-login' }
  }
});
