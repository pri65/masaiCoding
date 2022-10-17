//fs = file system
var http = require("http");
const fs = require("fs")

http.createServer(function(req,res) {
    fs.readFile("./test.txt", { encoding : "utf-8" }, (err,data) => {
        res.writeHead(200, {'content-Type' : 'txt/html'});
        res.write(data);
        return res.end();
    });
    fs.appendFile("test.txt", "hello", function(err) {
        if(err) throw err;
        console.log("Saved!");
    });
    fs.unlink('test.txt', function(err) {
        if(err) throw err;
        console.log("file deleted");
    });
    fs.rename("test.txt", "new.txt" , function(err) {
        if(err) throw err;
        console.log("file renamed");
    } );
    
}).listen(8080);





