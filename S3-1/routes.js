const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>Oefening Section 3 - Understanding the basics</title></head><div><h1>Welkom op mijn pagina</h1></div><form action="/createUser"method="POST"><input name="username"type="text"><button type="submit">Submit</button></form></html>');
        return res.end();
    }

    if (url === "/users") {
        res.write("<html><head><title>Oefening Section 3 - Understanding the basics</title></head><h1>Users:</h1><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></html>");
        return res.end();
    }

    if (url === "/createUser" && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    }
};

module.exports = requestHandler;