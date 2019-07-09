var express = require('./node_modules/express');
var app = express();
var mysql = require('mysql');
//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});




var questions = [{
        data: 213,
        num: 444,
        age: 12
    },
    {
        data: 456,
        num: 678,
        age: 14
    }
];

//写个接口123
app.get('/123', function (req, res) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'sc'
    });
    connection.connect();
    var sql = 'select * from user';
    connection.query(sql, function (error, results, fields) {
        console.log(results);
        var demojson = {
            "data": results
        };
        res.status(200);
        // res.render("demo3", demojson);
        res.send(demojson);
        if (error) res.end();
    });
    
    // res.json(questions)

});

//配置服务端口
var server = app.listen(3000, function () {

    var host = server.address().address;

    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})