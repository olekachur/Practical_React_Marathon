const remoteUrl = 'wss://boiling-beach-26008.herokuapp.com';
const localUrl = 'ws://localhost:8082';
const localClient = new WebSocket(localUrl);

localClient.onopen = () => {
    console.log("Connected");
}

localClient.onmessage = (message) => {
    document.getElementById("chat").value += `${message.data}\n`
};

const send = () => {
    const userName = document.getElementById("userName");
    const userMessage = document.getElementById("message");

    localClient.send(`${userName.value}: ${userMessage.value}`);
}
