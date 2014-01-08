/**
 * Created by youxiachai on 14-1-7.
 */

var JPush = require('jpush'),
    jpushClient ;


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pushNotification(params, done) {
    params.msg.type = JPush.MSGTYPE.NOTIFICATION
    jpushClient.pushNotification(getRandomInt(1, 100000), params.receiver, params.msg, done);
}

exports.init = function (config) {
    jpushClient = JPush.build(config);
}

function pushMessage(params, done) {
    jpushClient.pushAndroidMessage(getRandomInt(1, 100000), params.receiver, params.msg, done)
}

exports.pushNotification = pushNotification
exports.pushMessage = pushMessage