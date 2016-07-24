/*
var http=require('http'),url=require('url'),fs=require('fs');
var server=http.createServer(function (request, response) {
    var urlObj=url.parse(request.url,true),pathname=urlObj.pathname,query=urlObj.query;
    var reg1=/\.(html|css|js|json)/i;
    var reg2=/\.(jpg|png)/i;
    try{
        if(reg1.test(pathname)){
            var suffix=reg1.exec(pathname)[1].toUpperCase();
            var suffisMINI='text/plain';
            switch (suffix){
                case 'HTML':
                    suffisMINI='text/html';
                    break;
                case 'CSS':
                    suffisMINI='text/css';
                    break;
                case 'JS':
                    suffisMINI='text/js';
                    break;
                case 'JSON':
                    suffisMINI='application/json';
                    break;
                default :

            }

            var filCon=fs.readFileSync('.'+pathname,'utf-8');

            response.writeHead(200,{'content-type':suffisMINI+';charset=utf-8'});
            response.end(filCon);


        } else if(pathname=='/data/json.json'){
            filCon=fs.readFileSync('./data/json.json','utf-8');
            response.writeHead(200,{'content-type':'application/json;charset=utf-8'});
            response.end(filCon);


        } else if(reg2.test(pathname)){
            suffix=reg2.exec(pathname)[1].toUpperCase();
            switch (suffix){
                case 'JPG':
                    suffisMINI='image/jpeg';
                    break;
                case 'PNG':
                    suffisMINI='image/png';
                    break;
                default :

            }
            filCon=fs.readFileSync('.'+pathname);
            response.writeHead(200,{'content-type':suffisMINI});
            response.end(filCon);

        }
    }
    catch(e){
        response.writeHead(404);
        response.end();
    }

});


server.listen(900,function () {
});*/
