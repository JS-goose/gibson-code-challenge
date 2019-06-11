import React, { Component } from "react";
import Quip from "quip.js";
import axios from "axios";

const makePostRequest = async () => {
  let response = await axios.post("https://platform.quip.com/1/threads/new-document");

  console.log(response.status);
};

const quipApp = new Quip({
  // Quip Access Token (required)
  accessToken: "QVJNQU1BZHJOVHo=|1591737067|4qcahbUMtC9BBSJUJx4RXfHhD+/oguWLLD+jvbJZYx4=",
});

class App extends Component {
  render() {
    console.log(quipApp);
    return (
      <div className="App">
        <button onClick={this.makePostRequest}>POST REQUEST</button>
      </div>
    );
  }
}

export default App;
