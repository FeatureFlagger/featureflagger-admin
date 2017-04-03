import mockProjects from './config/projects';

// import {versionMismatchResponse} from 'utils';

export default function() {
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/ghost/api/v0.1';    // make this `api`, for example, if your API is namespaced
  this.timing = 400;      // delay for each request, automatically set to 0 during testing

  // keep this line, it allows all other API requests to hit the real server
  this.passthrough();
}

// Mock all endpoints here as there is no real API during testing
export function testConfig() {
  this.passthrough('/write-coverage'); // For code coverage
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api-stub';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  // this.logging = true;

  mockProjects(this);
}
