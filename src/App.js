import React, { Component } from 'react';

const makePostRequest = () => {
  // const accessToken = 'QVJNQU1Bc2VKaWE=|1591916456|ZAKGDHexrykpcdkGjULyvJF771+UBUf2jB1dGQdTW9w=';
  fetch('https://cors-anywhere.herokuapp.com/https://platform.quip.com/1/threads/new-document', {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      authorization:
        'Bearer QVJNQU1Bc2VKaWE=|1591916456|ZAKGDHexrykpcdkGjULyvJF771+UBUf2jB1dGQdTW9w=',
    },
    body: {
      title: 'React App',
      type: 'spreadsheet',
      format: 'html',
      content: 'This is a test of the POST function',
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};



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
