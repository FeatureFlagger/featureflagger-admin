
module.exports = function(app) {
  var express = require('express');
  var router = express.Router();

  router.get('/roles', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (/Bearer .+/.test(req.headers.authorization)) {
      var response = {
        data: [
          {
            type: 'roles',
            id: 2,
            attributes: {
              name: 'Administrator'
            }
          },
          {
            type: 'roles',
            id: 3,
            attributes: {
              name: 'Developer'
            }
          },
          {
            type: 'roles',
            id: 4,
            attributes: {
              name: 'Product Manager'
            }
          }
        ]
      };

      res.status(200).send(response);

    } else {
      res.status(401).end();
    }
  });

  app.use('/api-stub', router);
};
