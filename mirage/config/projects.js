import {paginateModelArray} from '../utils';

export default function mockProjects(server) {
    server.get('/projects', function ({projects}, {queryParams}) {
        let page = +queryParams.page || 1;

        let {models} = projects.where(function () {
            return true;
        });

        return paginateModelArray('projects', models, page, queryParams.limit);
    });


}
