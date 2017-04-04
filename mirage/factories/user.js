import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) { return `Project ${i}`; },
  email(i) { return `dev${i}@exemple.com`; }
});
