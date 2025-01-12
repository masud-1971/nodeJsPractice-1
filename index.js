const http = require("http");
const server = http.createServer((req, res) => {
    // if (req.url === "/") {
    //     res.end("Home Page");
    // }
    // if (req.url === "/login") {
    //     res.end("Login Page");
    // }
    //
    // if (req.url === "/register") {
    //     res.end("Register Page");
    // }
    // if (req.url === "/contact") {
    //     res.end("Contact Page");
    // }

    res.setHeader("MERN_STACK", "Batch#8");

    let method = req.method;
    if (method === "GET") {
        res.end("GET Request");
    }
    if (method === "POST") {
        res.end("POST Request");
    }
    if (method === "PUT") {
        res.end("PUT Request");
    }
    if (method === "DELETE") {
        res.end("DELETE Request");
    }
    if (method === "PATCH") {
        res.end("PATCH Request");
    }
    if (method === "PUT") {
        res.end("PUT Request");
    }
})

server.listen(8081, function (){
    console.log("Server is running on port 8081");
});