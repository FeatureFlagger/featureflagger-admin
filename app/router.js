import Router from 'ember-router';
import config from './config/environment';

const FeatureFlaggerRouter = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

FeatureFlaggerRouter.map(function() {
  this.route('index', { path: '/' }, function() {});

  this.route('signin');
  this.route('signout');

  this.route('team', { path: '/team' }, function() {});

  this.route('projects', { path: '/projects' }, function() {});

  this.route('project', { path: '/project' }, function() {
    this.route('accounts', { path: ':project_slug/accounts' }, function() {
      this.route('index', { path: '' });
      this.route('view', { path: ':account_id' });
    });
    this.route('features', { path: ':project_slug/features' }, function() {});
  });

  return null;
});

export default FeatureFlaggerRouter;
