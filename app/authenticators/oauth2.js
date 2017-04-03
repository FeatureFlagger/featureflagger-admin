import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from '../config/environment';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: `${ENV.API.host}/${ENV.API.namespace}/token`,
  serverTokenRevocationEndpoint: `${ENV.API.host}/${ENV.API.namespace}/revoke`
});
