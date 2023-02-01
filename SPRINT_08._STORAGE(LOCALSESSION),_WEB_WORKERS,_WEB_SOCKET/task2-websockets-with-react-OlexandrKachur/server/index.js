const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8082 });

wss.on('connection', connection => {
    console.log("connected");
    connection.on("message", (message) => {
        wss.clients.forEach((client) => {
            console.log(`client send${message}`);
            client.send(`${message}`);

        })
    });
});
module.exports = wss;
