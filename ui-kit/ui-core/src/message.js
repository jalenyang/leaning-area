function postMessage(win, payload, target) {
  console.log("sending message to:" + target);
  win.postMessage(payload, target);
}

function receiveMessage(event) {
  window.addEventListener("message", (event) => {
    console.log("receiving message");
    if (event.origin !== "http://localhost:3000") {
      return;
    }
    console.log("message received....");
  }, false);
}


export { postMessage, receiveMessage };
