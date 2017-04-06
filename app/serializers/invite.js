import ApplicationSerializer from 'featureflagger-admin/serializers/application';
import EmbeddedRecordsMixin from 'ember-data/serializers/embedded-records-mixin';

export default ApplicationSerializer.extend(EmbeddedRecordsMixin, {
  attrs: {
    role: { embedded: 'always' },
    updatedAtUTC: { key: 'updated-at' },
    createdAtUTC: { key: 'created-at' }
  }
});
