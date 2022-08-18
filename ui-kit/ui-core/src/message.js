export default class Message extends React.Component {

  constructor(props) {
    super(props);
  }

  postMessage(payload, target) {

  }

  receiveMessage(event) {
    if (event.origin !== "") {
      return
    }
  }
}
