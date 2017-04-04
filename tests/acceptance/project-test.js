import {
    describe,
    it,
    beforeEach,
    afterEach
} from 'mocha';
import { expect } from 'chai';
import testSelector from 'ember-test-selectors';
import { invalidateSession, authenticateSession } from '../helpers/ember-simple-auth';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance: Project', () => {
  let application;

  beforeEach(() => {
    application = startApp();
  });

  afterEach(() => {
    destroyApp(application);
  });

  it('redirects to signin when not authenticated', () => {
    invalidateSession(application);
    visit('/project');

    andThen(() => {
      expect(currentURL()).to.equal('/signin');
    });
  });

  it('redirects to signin when authenticated', () => {
    authenticateSession(application);
    visit('/project');

    andThen(() => {
      expect(currentURL(), 'currentURL').to.equal('/project');
    });
  });

  it('list project', () => {
    server.createList('project', 3);
    authenticateSession(application);
    visit('/project');

    andThen(() => {
      expect(currentURL(), 'currentURL').to.equal('/project');

      expect(
          find(`${testSelector('project-actives')} ${testSelector('project-item')}`).length,
          'number of active projects'
      ).to.equal(3);
    });
  });
});
