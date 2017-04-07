import OneWayTextarea from 'ember-one-way-controls/components/one-way-textarea';
import TextInputMixin from 'featureflagger-admin/mixins/text-input';

export default OneWayTextarea.extend(TextInputMixin, {
  classNames: 'ffg-input'
});
