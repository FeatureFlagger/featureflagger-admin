var loremIpsum = require('lorem-ipsum');
module.exports = function(app) {
  var express = require('express');
  var router = express.Router();

  router.get('/projects', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (/Bearer .+/.test(req.headers.authorization)) {
      var response = {};
      if (req.query.name) {
        response = {
          data: {
            type: 'projects',
            id: 1,
            attributes: {
              name: 'Livrio',
              description: loremIpsum(),
              count: {
                features: i+10
              }
            },
            relationships: {
              features: {
                links: {
                  related: "features"
                }
              },
              accounts: {
                links: {
                  related: "accounts"
                }
              }
            },

          }
        }
      }
      else {
        response = {
          data: function(){
            var arr = [];
            for(var i = 2;i <= 3; i++){
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
      }

      res.status(200).send(response);
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

      res.status(200).send(response);

    } else {
      res.status(401).end();
    }
  });

  app.use('/api-stub', router);
};
