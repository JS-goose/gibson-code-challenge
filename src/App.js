import React, { Component } from "react";
import Quip from "quip.js";

const quipApp = new Quip({
  // Quip Access Token (required)
  accessToken: "QVJNQU1BZHJOVHo=|1591737067|4qcahbUMtC9BBSJUJx4RXfHhD+/oguWLLD+jvbJZYx4=",
});

class App extends Component {
  render() {
    console.log(quipApp);
    return <div className="App">Is this working?</div>;
  }
}

export default App;
