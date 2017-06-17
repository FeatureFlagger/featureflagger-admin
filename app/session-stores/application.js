import AdaptiveStore from 'ember-simple-auth/session-stores/adaptive';

const keyName = 'featureflagger:session';

export default AdaptiveStore.extend({
  localStorageKey: keyName,
  cookieName: keyName
});
