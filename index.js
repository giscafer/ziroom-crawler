/*
 * @Discription: 
 * @Author: giscafer
 * @Date:   2018-7-23 22:05:25
 */

'use strict';

const CronJob = require('cron').CronJob;
const crawler = require('./crawler');
const mail = require('./mail');
const CRAWER_URL = 'http://gz.ziroom.com/z/vr/6****7.html'; // 你需要的自如租房的房源链接地址

// 定时执行
let job2 = new CronJob('*/5 * * * * *', function () {
    crawlering();
}, null, true, 'Asia/Shanghai');

job2.start();


// 爬取城市数据
function crawlering() {
    crawler.fetchInfo(CRAWER_URL).then((result) => {
        if (result) {
            console.log('房源配置中……');
        } else {
            console.log('可以抢购');
            mail.sendAlertMail('gissss@163.com'); // 改为你要通知的邮件
        }
    }).catch(e => {
        console.log(e)
    });
}

