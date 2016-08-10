import auth from 'node-weixin-auth';
import util from 'node-weixin-util';
import request from 'node-weixin-request';

/* eslint camelcase: [2, {properties: "never"}] */
/* eslint max-params: ["error", 5]*/
/* eslint-env es6*/
/* eslint-env es6 */

module.exports = function (settings, app, url, params, cb) {
  console.log(url);
  console.log(params);
  auth.determine(settings, app, function () {
    settings.get(app.id, 'auth', function (authData) {
      console.log(authData);
      params = params || {};
      // params.access_token = authData.accessToken;
      url += util.toParam({
        access_token: authData.accessToken
      });
      request.json(url, params, cb);
    });
  });
};
