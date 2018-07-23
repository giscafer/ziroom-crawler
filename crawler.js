'use strict'

const cheerio = require('cheerio');
const request = require('superagent');
const URL = 'http://gz.ziroom.com/z/vr/61098467.html';

function fetchInfo(url) {
    return new Promise((resolve, reject) => {
        request.get(url).end((err, res) => {
            if (err) {
                reject(err);
            } else {
                const $ = cheerio.load(res.text);
                const ulElem = $('#cao > ul');
                const imgSrc = ulElem.find('img').attr('src');
                // 房源配置中页面会有的图片
                // http://pic.ziroom.com/static/images/slist_1207/defaultPZZ/mumian-loading.jpg
                if (imgSrc.indexOf('mumian-loading.jpg') !== -1) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            }
        });
    });
}

function test(url) {
    if (!url) {
        url = URL;
    }
    fetchInfo(url).then((result) => {
        console.log(result)
    }).catch(e => {
        console.log(e)
    });
}
// test();
module.exports = { fetchInfo };
