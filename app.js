var request = require ("request");
//http request
var http = require ("http");
var url = require('url');
//url request 
var ur =" http://localhost:8080/age?year=1998&month=11&date=23&name=John" ;

var a = url.parse(ur,true).query;
//port number
const port = process.env.PORT || 8080


//server
var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
//present year for calculating age   
    var presentYear = 2021;
    var presentMonth = 7;
    var presentDate = 15;
    var m = presentMonth - a.month;
    
    var z = presentYear - a.year ;   
// if month is less than 0 then the age reduces by 1
// if month is equal to 0 then the date is less then the present date  
    if(m<0||(m===0 && presentDate < a.date)){
        z--;
    }

    var age = z.toString();
// the name in api
    var g = "Hi" +" "+ a.name;
// the age to be calculated
    res.write(g);
    res.write("  "+ "your age is" +" "+age);
    res.end()
     
      


}).listen(port, () => {
    console.log('server started',port)
  });