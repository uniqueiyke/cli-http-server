"use strict";
const ws_port = 9697;
const socket = new WebSocket(`ws://localhost:${ws_port}`);
socket.addEventListener("message", (event) => {
    console.log('page reloaded');
    if (event.data === "RELOAD") {
        window.location.reload();
    }
});
//# sourceMappingURL=client-script.js.map