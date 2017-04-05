module.exports = function(app) {
  var express = require('express');
  var router = express.Router();

  function routerMe(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (/Bearer .+/.test(req.headers.authorization)) {
      var response = {
        data: {
          type: 'users',
          id: '1',
          attributes: {
            email: 'dev@example.com',
            name: 'Dev'
          }
        }
      };

      // delay this a bit so we see the loading template
      setTimeout(function() {
        res.status(200).send(response);
      }, 1000);
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
          for(var i = 0;i <= 10; i++){
            arr.push({
              type: 'users',
              id: i,
              attributes: {
                name: `User ${i}`
              }
            });
          }
          return arr;
        }()
      };

      // delay this a bit so we see the loading template
      setTimeout(function() {
        res.status(200).send(response);
      }, 1000);
    } else {
      res.status(401).end();
    }
  });

  router.get('/users/1', routerMe);
  router.get('/users/me', routerMe);

  app.use('/api-stub', router);
};
