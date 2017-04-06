
module.exports = function(app) {
  var express = require('express');
  var router = express.Router();

  router.get('/invites', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (/Bearer .+/.test(req.headers.authorization)) {
      var response = {
        data: function(){
          var arr = [];
          for(var i = 1;i <= 5; i++){
            arr.push({
              type: 'invites',
              id: i,
              attributes: {
                token: '1234',
                email: `dev${i}@example.com`,
                expires: 123456,
                updated_by: "2017-04-05T22:53:42.000Z" ,
                created_by: "2017-04-05T22:53:42.000Z" ,
                status: 'pending',
                name: `Convidado ${i}`
              },
              relationships: {
                roles: {
                  data: {
                    type: 'roles',
                    id: 2
                  }
                }
              }
            });
          }
          return arr;
        }(),
        included: [
          {
            type: 'roles',
            id: 2,
            attributes: {
              name: 'Administrator'
            }
          }
        ]
      };

      res.status(200).send(response);

    } else {
      res.status(401).end();
    }
  });
  var i = 100;
  router.post('/invites', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (/Bearer .+/.test(req.headers.authorization)) {
      var response = req.body;
      response.data.id = i++;
      res.status(200).send(response);

    } else {
      res.status(401).end();
    }
  });

  app.use('/api-stub', router);
};
