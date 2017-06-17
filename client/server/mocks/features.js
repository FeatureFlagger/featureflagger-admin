var loremIpsum = require('lorem-ipsum');
module.exports = function(app) {
  var express = require('express');
  var router = express.Router();

  router.get('/projects/1/features', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (/Bearer .+/.test(req.headers.authorization)) {
      var response = {
        data: function(){
          var arr = [];
          for(var i = 0;i <= 5; i++){
            arr.push({
              type: 'features',
              id: i,
              attributes: {
                name: (loremIpsum({ count: 1}).split(' ').slice(0, 2).join(' ')),
                'key-name': 'email_marketing.template_manager',
                active: i%3==0,
                description: loremIpsum(),
                count: {
                  accounts: (i*10)-i
                }
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

  var i = 100;
  router.post('/features', function(req, res) {
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
