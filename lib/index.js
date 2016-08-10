
import send from './send';

export default {
  user: {
    difference: function (settings, app, params, cb) {
      send(settings, app, 'https://api.weixin.qq.com/datacube/getusersummary?', params, cb);
    },
    total: function (settings, app, params, cb) {
      send(settings, app, 'https://api.weixin.qq.com/datacube/getusercumulate?', params, cb);
    }
  },
  article: {
    group: {
      daily: function (settings, app, params, cb) {
        send(settings, app, 'https://api.weixin.qq.com/datacube/getarticlesummary?', params, cb);
      },
      total: function (settings, app, params, cb) {
        send(settings, app, 'https://api.weixin.qq.com/datacube/getarticletotal?', params, cb);
      }
    },
    views: {
      daily: function (settings, app, params, cb) {
        send(settings, app, 'https://api.weixin.qq.com/datacube/getuserread', params, cb);
      },
      hour: function (settings, app, params, cb) {
        send(settings, app, 'https://api.weixin.qq.com/datacube/getuserreadhour', params, cb);
      }
    },
    share: {
      daily: function (settings, app, params, cb) {
        send(settings, app, 'https://api.weixin.qq.com/datacube/getusershare', params, cb);
      },
      hour: function (settings, app, params, cb) {
        send(settings, app, 'https://api.weixin.qq.com/datacube/getusersharehour', params, cb);
      }
    }
  },
  message: {
    common: {
      daily: function (settings, app, params, cb) {
        send(settings, app, 'https://api.weixin.qq.com/datacube/getupstreammsg', params, cb);
      },
      hour: function (settings, app, params, cb) {
        send(settings, app, 'https://api.weixin.qq.com/datacube/getupstreammsghour', params, cb);
      },
      week: function (settings, app, params, cb) {
        send(settings, app, 'https://api.weixin.qq.com/datacube/getupstreammsgweek', params, cb);
      },
      month: function (settings, app, params, cb) {
        send(settings, app, 'https://api.weixin.qq.com/datacube/getupstreammsgmonth', params, cb);
      }
    },
    distribute: {
      daily: function (settings, app, params, cb) {
        send(settings, app, 'https://api.weixin.qq.com/datacube/getupstreammsgdist', params, cb);
      },
      week: function (settings, app, params, cb) {
        send(settings, app, 'https://api.weixin.qq.com/datacube/getupstreammsgdistweek', params, cb);
      },
      month: function (settings, app, params, cb) {
        send(settings, app, 'https://api.weixin.qq.com/datacube/getupstreammsgdistmonth', params, cb);
      }
    }
  },
  interface: {
    daily: function (settings, app, params, cb) {
      send(settings, app, 'https://api.weixin.qq.com/datacube/getinterfacesummary', params, cb);
    },
    hour: function (settings, app, params, cb) {
      send(settings, app, 'https://api.weixin.qq.com/datacube/getinterfacesummaryhour', params, cb);
    }
  }
};
