import OneWayInput from 'ember-one-way-controls/components/one-way-input';
import TextInputMixin from 'featureflagger-admin/mixins/text-input';

export default OneWayInput.extend(TextInputMixin, {
  classNames: 'ffg-input'
});
