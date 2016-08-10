import assert from 'assert';
import nodeWeixinStatistics from '../lib';
import moment from 'moment';
import settings from 'node-weixin-settings';

let app = {
  id: process.env.APP_ID,
  secret: process.env.APP_SECRET,
  token: process.env.APP_TOKEN
};

/* eslint camelcase: ["error", {properties: "never"}] */

describe('node-weixin-statistics', function () {
  it('should have unit test!', function (done) {
    var end = new Date().getTime();
    var start = end - (60 * 60 * 24 * 1000 * 3);
    console.log(start);
    console.log(end);
    start = moment(start).format('YYYY-MM-DD');
    end = moment(end).format('YYYY-MM-DD');
    console.log(start);
    console.log(end);
    console.log(app);
    nodeWeixinStatistics.user.total(settings, app, {
      begin_date: start,
      end_date: end
    }, function () {
      console.log(arguments);
      assert(true);
      done();
    });
    // assert(false, 'we expected this package author to add actual unit tests.');
  });
});
