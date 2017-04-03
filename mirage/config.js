import mockProjects from './config/projects';
import mockUsers from './config/users';
import ENV from '../config/environment';

export default function() {
  this.passthrough('/write-coverage');
  this.urlPrefix = ENV.API.host;
  this.namespace = `/${ENV.API.namespace}`;
  this.logging = true;
  mockProjects(this);
  mockUsers(this);
}