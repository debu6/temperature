var http=require('http');
var url='http://api.openweathermap.org/data/2.5/weather?q=New+Delhi,IN&appid=3de1d07b748acc819334a45f135f3de6&units=metric';
var server=http.createServer(function(request,response){
	var request=require('request');
	request(url,function(err,res,body){
		var data=JSON.parse(body);
		response.write("<h1>"+'CITY_NAME:-'+data['name']+"</h1>");
		response.write("<h2>"+'temparature:-'+data.main['temp']+' degree'+"</h2>")
		response.write('sunset:-'+new Date(data.sys['sunset']+1000));
	    response.end();
	});
	
}).listen(8080);
