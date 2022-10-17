const http = require("http");

// const server = http.createServer((req,res) => {
// res.end("hello")
// })

// //or we can also write the above thing as
// const server = http.createServer((request,response) => {
//     response.end("hello")
// })


const server = http.createServer((request,response) => {
    if(request.url === "/posts") {
    //    return response.end("here are your posts")
    // return response.end(JSON.stringify([{name:"post1"}, {name:"post2"}]))

    //if its a get or post request, how do we get the data that client is passing
    const posts = fs.readFileSync("./posts.json", {encoding:"utf-8"})
    response.setHeader("content-type", "application/json")
    return response.end(JSON.stringify(posts))
    }


    else if(request.url === "/todos") {
      return  response.end("here are your todos")
    }


    else if(request.url === "/") {
        // return response.end("<h1>Welcome to home page</h1>")
        //if we want it to be html data only and want it to be just text
        response.setHeader("content-type", "text/plain")
        return response.end("<h1>welcome to home page</h1>")
    }
    else {
       return response.end("welcome to our very new first server")
    }
})

server.listen(8080)