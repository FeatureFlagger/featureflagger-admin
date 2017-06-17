import { isBlank } from 'ember-utils';

function init() {
  validator.extend('empty', function(str) {
    return isBlank(str);
  });
}

export default {
  init
};
