let http=require("http");
let file=require("fs");
http.createServer(function(req,res){
    file.readFile("index.html",function(err,data){
        res.writeHead(200,{'Content-Type':"html"})
        res.write(data);
        return res.end()
    })
}).listen(5000);
console.log("Server is running");