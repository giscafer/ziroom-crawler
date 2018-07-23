'use strict'

const mailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const util = require('util');
// 写自己的邮箱
const mail_opts = {
    host: 'smtp.163.com',
    port: 25,
    auth: {
        user: 'giscafer@163.com', // 邮箱账号
        pass: '******' // 密码
    }
};
const transport = mailer.createTransport(smtpTransport(mail_opts));
//域名domain没有的时留空，devMode下读取host

/**
 * 邮件发送
 * @param {Object} data 邮件对象
 */
function sendMail(data) {
    transport.sendMail(data, function (err) {
        if (err) {
            // 写为日志
            console.error(err);
        }
    });
}


/**
 * 发送通知邮件
 * @param {String} who 接收人的邮件地址
 */
function sendAlertMail(who) {
    var from = util.format('%s <%s>','ziroom-crawler', mail_opts.auth.user);
    var to = who;
    var subject = '自如租房房源开放了！！！';
    var html = '<p>亲爱的用户 giscafer 您好：</p>' +
    '<p>您关注的房源可以付款，登录App抢购自如租房的房源</p>';
    sendMail({
        from: from,
        to: to,
        subject: subject,
        html: html
    });
}

module.exports = { sendMail, sendAlertMail };