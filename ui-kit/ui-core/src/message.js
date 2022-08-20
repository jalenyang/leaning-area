function postMessage(payload, target) {
  console.log("sending message....");
}

function receiveMessage(event) {
  console.log("receiving message");
  if (event.origin !== "") {
    return;
  }
}


export { postMessage, receiveMessage };
