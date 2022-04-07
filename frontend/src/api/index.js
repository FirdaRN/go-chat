var socket = new WebSocket('ws://localhost:8080/ws');

let connect = () => {
    socket.onopen = () => {
        console.log('Connected to server');
    };

    socket.onmessage = (msg) => {
        console.log(msg);
    };

    socket.onclose = (event) => {
        console.log('Disconnected from server', event);
    };

    socket.onerror = (error) => {
        console.log('Error', error);
    };
};

let sendMsg = (msg) => {
    console.log('Sending message: ', msg);
    socket.send(msg);
};

export { connect, sendMsg };