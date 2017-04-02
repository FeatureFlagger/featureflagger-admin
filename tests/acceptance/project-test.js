import {
    describe,
    it,
    beforeEach,
    afterEach
} from 'mocha';
import {expect} from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
import testSelector from 'ember-test-selectors';


describe('Acceptance: Project', function () {
    let application;

    beforeEach(function () {
        application = startApp();
    });

    afterEach(function () {
        destroyApp(application);
    });

    it('working', function () {
        visit('/project');

        andThen(function () {
            expect(currentURL(), 'currentURL').to.equal('/project');
        });
    });

    it('list project', function () {
        server.createList('project', 3);
        visit('/project');

        andThen(function () {
            expect(currentURL(), 'currentURL').to.equal('/project');

            expect(
                find(`${testSelector('project-actives')} ${testSelector('project-item')}`).length,
                'number of active projects'
            ).to.equal(3);
        });
    });
});
