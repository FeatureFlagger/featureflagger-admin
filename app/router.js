import Router from 'ember-router';
import config from './config/environment';

const FeatureFlaggerRouter = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

FeatureFlaggerRouter.map(function() {
  this.route('project');
  this.route('signin');

  return null;
});

export default FeatureFlaggerRouter;
