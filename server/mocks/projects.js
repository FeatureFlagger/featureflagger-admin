module.exports = function(app) {
  var express = require('express');
  var accountsRouter = express.Router();

  accountsRouter.get('/projects', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
      var response = {
        data: function(){
          var arr = [];
          for(var i = 0;i <= 10; i++){
            arr.push({
              type: 'projects',
              id: i,
              attributes: {
                name: `Project ${i}`
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
  });

  app.use('/api-stub', accountsRouter);
};
