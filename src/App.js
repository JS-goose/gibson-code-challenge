import React, { Component } from 'react';
import Quip from 'quip.js';
import axios from 'axios';

const makePostRequest = () => {
  fetch('https://platform.quip.com/1/threads/new-document', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': 'QVJNQU1BZHJOVHo=|1591737067|4qcahbUMtC9BBSJUJx4RXfHhD+/oguWLLD+jvbJZYx4=',
    },
    body: {
      title: 'POST TEST 2',
      format: 'html',
    },
  });
};

// const makePostRequest = async () => {
//   try {
//     const options = {
//       accessToken: 'QVJNQU1BZHJOVHo=|1591737067|4qcahbUMtC9BBSJUJx4RXfHhD+/oguWLLD+jvbJZYx4=',
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         Authorization: 'Bearer QVJNQU1BZHJOVHo=|1591737067|4qcahbUMtC9BBSJUJx4RXfHhD+/oguWLLD+jvbJZYx4=',
//       },
//       body: {
//         title: 'POST TEST 2',
//         format: 'html',
//       },
//     };
//     let response = await axios.post('https://platform.quip.com/1/threads/new-document', options);
//     console.log(response.status);
//   } catch (error) {
//     console.error(`POST Error: ${error}`);
//   }
// };

const quipApp = new Quip({
  // Quip Access Token (required)
  accessToken: 'QVJNQU1BZHJOVHo=|1591737067|4qcahbUMtC9BBSJUJx4RXfHhD+/oguWLLD+jvbJZYx4=',
});

class App extends Component {
  render() {
    console.log(quipApp);
    return (
      <div className="App">
        <button onClick={() => makePostRequest()}>POST REQUEST</button>
      </div>
    );
  }
}

export default App;
