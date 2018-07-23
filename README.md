# ziroom-crawler
自如友家租房，房源爬虫，房源状态监听，目的是抢房


## 使用

**修改的地方**

### index.js

> const CRAWER_URL = 'http://gz.ziroom.com/z/vr/6****7.html'; // 你需要的自如租房的房源链接地址

> mail.sendAlertMail('gissss@163.com'); // 改为你要通知的邮件


### mail.js

```js

// 写自己的邮箱
const mail_opts = {
    host: 'smtp.163.com',
    port: 25,
    auth: {
        user: 'giscafer@163.com', // 邮箱账号，写你的
        pass: '******' // 密码
    }
};

```

### 运行

`node index`


