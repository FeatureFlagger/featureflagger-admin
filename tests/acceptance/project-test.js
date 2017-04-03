import {
    describe,
    it,
    beforeEach,
    afterEach
} from 'mocha';
import { expect } from 'chai';
import testSelector from 'ember-test-selectors';
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

  it('working', () => {
    visit('/project');

    andThen(() => {
      expect(currentURL(), 'currentURL').to.equal('/project');
    });
  });

  it('list project', () => {
    server.createList('project', 3);
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
