import React, { Component } from 'react';
import Quip from 'quip.js';
import axios from 'axios';

// const makePostRequest = async () => {
//   const accessToken = 'QVJNQU1Bc2VKaWE=|1591916456|ZAKGDHexrykpcdkGjULyvJF771+UBUf2jB1dGQdTW9w=';
//   await fetch(
//     'https://cors-anywhere.herokuapp.com/https://platform.quip.com/1/threads/new-document',
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         Authorization: `Bearer ${accessToken}`,
//       },
//       form: {
//         title: 'React App',
//         type: 'spreadsheet',
//         format: 'html',
//         content: 'This is a test of the POST function',
//       },
//     }
//   );
// };

const makePostRequest = async () => {
  try {
    const accessToken = 'QVJNQU1Bc2VKaWE=|1591916456|ZAKGDHexrykpcdkGjULyvJF771+UBUf2jB1dGQdTW9w=';
    await fetch(
      'https://cors-anywhere.herokuapp.com/https://platform.quip.com/1/threads/new-document',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${accessToken}`,
        },
        form: {
          title: 'React App',
          type: 'spreadsheet',
          format: 'html',
          content: 'This is a test of the POST function',
        },
      }
    );
  } catch (error) {
    console.error(`POST Error: ${error}`);
  }
};

const quipApp = new Quip({
  // Quip Access Token (required)
  accessToken: 'QVJNQU1BZHJOVHo=|1591737067|4qcahbUMtC9BBSJUJx4RXfHhD+/oguWLLD+jvbJZYx4=',
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => makePostRequest()}>POST REQUEST</button>
      </div>
    );
  }
}

export default App;
