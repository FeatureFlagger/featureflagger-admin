import Router from 'ember-router';
import config from './config/environment';

const FeatureFlaggerRouter = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

FeatureFlaggerRouter.map(function() {
  this.route('project');
  this.route('signin');
  this.route('signout');

  this.route('team', { path: '/team' }, function() {});
  this.route('dashboard', { path: '/' }, function() {});
  return null;
});

export default FeatureFlaggerRouter;
