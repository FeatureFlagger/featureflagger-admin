import { paginateModelArray } from '../utils';

export default function mockUsers(server) {
  server.get('/users', function({ users }, { queryParams }) {
    let page = +queryParams.page || 1;

    let { models  } = users.where(function() {
      return true;
    });

    return paginateModelArray('users', models, page, queryParams.limit);
  });

  server.get('/users/me', function() {
    return {
      data: { type: 'users', id: 1, attributes: { name: 'dev' }}
    };
  });
}
