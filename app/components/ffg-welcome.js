import Ember from 'ember';

export default Ember.Component.extend({

  errorClass() {
    const error = true;
    return error ? 'success': 'error';
  }
});
