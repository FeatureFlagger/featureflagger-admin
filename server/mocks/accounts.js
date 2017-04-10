var loremIpsum = require('lorem-ipsum');
module.exports = function(app) {
  var express = require('express');
  var router = express.Router();

  router.get('/projects/1/accounts', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (/Bearer .+/.test(req.headers.authorization)) {
      var response = {
        data: function(){
          var arr = [];
          for(var i = 1;i <= 6; i++){
            arr.push({
              type: 'accounts',
              id: i,
              attributes: {
                'name': (loremIpsum({ count: 1}).split(' ').slice(0, 2).join(' ')),
                email: `dev-${i}@exemple.com`,
                identifier: (1000+(i*2+1)).toString()
              }
            });
          }
          return arr;
        }()
      };

      res.status(200).send(response);
    } else {
      res.status(401).end();
    }
  });

  router.get('/accounts/:id', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (/Bearer .+/.test(req.headers.authorization)) {
      var response = {
        data: {
          type: 'accounts',
          id: req.params.id,
          attributes: {
            'name': (loremIpsum({ count: 1}).split(' ').slice(0, 2).join(' ')),
            email: `dev-${req.params.id}@exemple.com`,
            identifier: (1000+(req.params.id*2+1)).toString(),
            variables: {
              leads: 1013531,
              plan: 'Basic'
            }
          }
        }
      };
      res.status(200).send(response);
    } else {
      res.status(401).end();
    }
  });


  app.use('/api-stub', router);
};
