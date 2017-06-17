/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
import { invalidateSession } from '../helpers/ember-simple-auth';

describe('Acceptance: Team', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('redirects to signin when not authenticated', function() {
    invalidateSession(application);
    visit('/team');

    andThen(function() {
      expect(currentURL()).to.equal('/signin');
    });
  });
});
