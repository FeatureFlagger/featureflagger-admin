import Router from 'ember-router';
import config from './config/environment';

const FeatureFlaggerRouter = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

FeatureFlaggerRouter.map(function() {
  this.route('signin');
  this.route('signout');

  this.route('team', { path: '/team' }, function() {});
  this.route('dashboard', { path: '/' }, function() {});

  this.route('projects', { path: '/projects' }, function() {});

  this.route('project', { path: '/project' }, function() {
    this.route('accounts', { path: 'livrio/accounts' });
    this.route('features', { path: 'livrio/features' });
  });

  return null;
});

export default FeatureFlaggerRouter;
