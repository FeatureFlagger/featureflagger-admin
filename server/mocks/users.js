var moment = require('moment');

module.exports = function(app) {
  var express = require('express');
  var router = express.Router();

  function routerMe(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (/Bearer .+/.test(req.headers.authorization)) {
      var response = {
        data: {
          type: 'users',
          id: 1,
          attributes: {
            email: 'dev@example.com',
            image: '//www.gravatar.com/avatar/7a668b0496b5d8521936d89a0e62ee5d',
            name: 'User 1',
            'last-login': moment.utc().format(),
          },
          relationships: {
            roles: {
              data: [
                {
                  type: 'roles',
                  id: 1
                }
              ]
            }
          }
        },
        included: [
          {
            type: 'roles',
            id: 1,
            attributes: {
              name: 'Owner'
            }
          }
        ]
      };
      res.status(200).send(response);
    } else {
      res.status(401).end();
    }
  }

  router.get('/users', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (/Bearer .+/.test(req.headers.authorization)) {
      var response = {
        data: function(){
          var arr = [];
          for(var i = 1;i <= 4; i++){
            arr.push({
              type: 'users',
              id: i,
              attributes: {
                'last-login': moment.utc().add(i, 'day').format(),
                email: `dev${i}@example.com`,
                name: `User ${i}`
              },
              relationships: {
                roles: {
                  data: [
                    {
                      type: 'roles',
                      id: 3
                    }
                  ]
                }
              }
            });
          }
          return arr;
        }(),
        included: [
          {
            type: 'roles',
            id: 3,
            attributes: {
              name: 'Developer'
            }
          }
        ]
      };

      res.status(200).send(response);



    } else {
      res.status(401).end();
    }
  });

  router.get('/users/1', routerMe);
  router.get('/users/me', routerMe);

  app.use('/api-stub', router);
};
