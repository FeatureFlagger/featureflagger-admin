var loremIpsum = require('lorem-ipsum');
module.exports = function(app) {
  var express = require('express');
  var router = express.Router();

  router.get('/projects', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (/Bearer .+/.test(req.headers.authorization)) {
      var response = {
        data: function(){
          var arr = [];
          for(var i = 0;i <= 10; i++){
            arr.push({
              type: 'projects',
              id: i,
              attributes: {
                name: `Project ${i}`,
                description: loremIpsum(),
                count: {
                  features: i+10
                }
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

  var i = 100;
  router.post('/projects', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (/Bearer .+/.test(req.headers.authorization)) {
      var response = req.body;
      response.data.id = i++;
      response.data.attributes.count = {
        features: i+10
      };
      
      setTimeout(function() {
        res.status(200).send(response);
      }, 1000);

    } else {
      res.status(401).end();
    }
  });

  app.use('/api-stub', router);
};
