## 서버 mongoDB 맛보기
``` javascript
// 파일(index.html) 열어준다.
var fs = require('fs')
// express
var express = require('express');
// 변수명을 app 사용하더라
var app = express();
// mongoDB 관련
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017';
// 메모리 누수 방지를 위해 db 

function connMongo(){
    // DB 접속해서 데이터베이스를 연결한다.
    MongoClient.connect(mongoUrl, function(err, db){
        if(err) throw err;// 파일(index.html) 열어준다.
var fs = require('fs')
// express
var express = require('express');
// 변수명을 app 사용하더라
var app = express();
// mongoDB 관련
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017';
var mongo;

function connMongo(){
    // DB 접속해서 데이터베이스를 연결한다.
    MongoClient.connect(mongoUrl, function(err, db){
        if(err) throw err;
        console.log(mongoUrl + "연결되었다");
        mongo = db.db('firstdb');
    });
}

// fourthcol 컬렉션의 전체 내용 출력
app.get('/col', function(request, response){

    MongoClient.connect(mongoUrl, function(err, db){
        if(err) throw err;
        mongo.collection('fourthcol').find({}).toArray(function(err, result){
            if(err) throw err;
            response.send(result);
            return;
        });
    })
});

// fourthcol 컬렉션의 내용 1개 추가
//localhost/insert?name=Park&height=180&depart=Front
app.get('/insert', function(request, response){
    console.log(request);
    MongoClient.connect(mongoUrl, function(err, db){
        if(err) throw err;
        mongo.collection('fourthcol').insertOne(
            request.query, function(err, result){
                if(err) throw err;
                response.send(result);
                return;
            }
        );
    })
});

// app 에서 get 요청을 한다.
app.get('/', function(request, response){
    fs.readFile('index.html', function(err, data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
        console.log('Home');
    });
});

app.listen(80, function(){
    console.log('사용중인 포트는 80번입니다');
    connMongo();
});


        console.log(mongoUrl + "연결되었다");
    });
}

// fourthcol 컬렉션의 전체 내용 출력
app.get('/col', function(request, response){
    
    
    MongoClient.connect(mongoUrl, function(err, db){
        if(err) throw err;
        // 메모리 누수 방지를 위해 사용 중인 데이터베이스는 필요할 때 연결하고
        // 사용 후에는 close 해준다.
        var mongo = "firstDB"
        mongo.collection('fourthcol').find({}).toArray(function(err, result){
            if(err) throw err;
            response.send(result);
            return;
        });
    })
});

// fourthcol 컬렉션의 내용 1개 추가
//localhost/insert?name=Park&height=180&depart=Front
app.get('/insert', function(request, response){
    console.log(request);
    MongoClient.connect(mongoUrl, function(err, db){
        if(err) throw err;
        // 메모리 누수 방지를 위해 사용 중인 데이터베이스는 필요할 때 연결하고
        // 사용 후에는 close 해준다.
        var mongo = "firstDB"
        mongo.collection('fourthcol').insertOne(
            request.query, function(err, result){
                if(err) throw err;
                response.send(result);
                return;
            }
        );
    })
});
// fourthcol 컬렉션의 내용 1개 수정
//localhost/update?name=Park&height=100&depart=Back
app.get('/update', function(request, response){    
    MongoClient.connect(mongoUrl, function(err, db){
        if(err) throw err;
        // 메모리 누수 방지를 위해 사용 중인 데이터베이스는 필요할 때 연결하고
        // 사용 후에는 close 해준다.
        var mongo = "firstDB"
        mongo.collection('fourthcol').updateMany(
            {"name": request.query.name},
            {$set:request.query},
            request.query, function(err, result){
                if(err) throw err;
                response.send(result);
                return;
            }
        );
    })
});
// fourthcol 컬렉션의 내용 1개 삭제
//localhost/delete?name=Park
app.get('/delete', function(request, response){    
    MongoClient.connect(mongoUrl, function(err, db){
        if(err) throw err;
        // 메모리 누수 방지를 위해 사용 중인 데이터베이스는 필요할 때 연결하고
        // 사용 후에는 close 해준다.
        var mongo = "firstDB"
        mongo.collection('fourthcol').deleteOne(
            {"name": request.query.name},
            request.query, function(err, result){
                if(err) throw err;
                response.send(result);
                return;
            }
        );
    })
});
// app 에서 get 요청을 한다.
app.get('/', function(request, response){
    fs.readFile('index.html', function(err, data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
        console.log('Home');
    });
});

app.listen(80, function(){
    console.log('사용중인 포트는 80번입니다');
    connMongo();
});

```