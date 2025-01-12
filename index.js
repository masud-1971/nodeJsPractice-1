const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home Page");
    }
    if (req.url === "/login") {
        res.end("Login Page");
    }

    if (req.url === "/register") {
        res.end("Register Page");
    }
    if (req.url === "/contact") {
        res.end("Contact Page");
    }
})

server.listen(8080, function (){
    console.log("Server is running on port 8080");
});