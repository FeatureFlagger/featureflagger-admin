module.exports = function(app) {
  var express = require('express');
  var tokenRouter = express.Router();

  tokenRouter.post('/token', function(req, res) {
    if (req.body.grant_type === 'password') {
      if (req.body.username === 'dev@example.com' && req.body.password === 'in') {
        res.status(200).send({
          access_token: '5JhTdKI7PpoZv4ROsFoERc6wCHALKFH5jxozwOOAErmUzWrFNARuH1q01TYTKeZkPW7FmV5MJ2fU00pg9sm4jtH3Z1LjCf8D6nNqLYCfFb2YEKyuvG7zHj4jZqSYVodN2YTCkcHv6k8oJ54QXzNTLIDMlCevkOebm5OjxGiJpafMxncm043q9u1QhdU9eee3zouGRMVVp8zkKVoo5zlGMi3zvS2XDpx7xsfk8hKHpUgd7EDDQxmMueifWv7hv6n',
          expires_in: 3600,
          refresh_token: 'XP13eDjwV5mxOcrq1jkIY9idhdvN3R1Br5vxYpYIub2P5Hdc8pdWMOGmwFyoUshiEB62JWHTl8H1kACJR18Z8aMXbnk5orG28br2kmVgtVZKqOSoiiWrQoeKTqrRV0t7ua8uY5HdDUaKpnYKyOdpagsSPn3WEj8op4vHctGL3svOWOjZhq6F2XeVPMR7YsbiwBE8fjT3VhTB3KRlBtWZd1rE0Qo2EtSplWyjGKv1liAEiL0ndQoLeeSOCH4rTP7',
          token_type: 'Bearer'
        });
      } else {
        res.status(400).send({
          errors: [{
            errorType: 'UnauthorizedError',
            message: 'Invalid Password'
          }]
        });
      }
    } else {
      res.status(400).send('{ "error": "unsupported_grant_type" }');
    }
  });

  tokenRouter.post('/revoke', function(req, res) {
    if (req.body.token_type_hint === 'access_token' || req.body.token_type_hint === 'refresh_token') {
      res.status(200).end();
    } else {
      res.status(400).send('{ "error": "unsupported_token_type" }');
    }
  });

  app.use('/api-stub', tokenRouter);
};
