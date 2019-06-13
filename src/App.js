import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import Nav from './components/Nav/Nav';

const makePostRequest = () => {
  const body = qs.stringify({
    title: 'React App',
    type: 'spreadsheet',
    format: 'html',
    content: 'This is a test of the POST function',
  });

  fetch('https://cors-anywhere.herokuapp.com/https://platform.quip.com/1/threads/new-document', {
    method: 'post',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      authorization:
        'Bearer QVJNQU1Bc2VKaWE=|1591916456|ZAKGDHexrykpcdkGjULyvJF771+UBUf2jB1dGQdTW9w=',
    },
    body,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

// const makePostRequest = () => {
// axios.post(
//   'https://cors-anywhere.herokuapp.com/https://platform.quip.com/1/threads/new-document',
//   {
//     headers: {
//       'content-type': 'application/x-www-form-urlencoded',
//       authorization:
//         'Bearer QVJNQU1Bc2VKaWE=|1591916456|ZAKGDHexrykpcdkGjULyvJF771+UBUf2jB1dGQdTW9w=',
//     },
//     body: {
//       title: 'React App',
//       type: 'spreadsheet',
//       format: 'html',
//       content: 'This is a test of the POST function',
//     },
//   }
// );
// const body = qs.stringify({
//   title: 'React App',
//   type: 'spreadsheet',
//   format: 'html',
//   content: 'This is a test of the POST function',
// });

// const headers = {
//   'content-type': 'application/x-www-form-urlencoded',
//   authorization:
//     'Bearer QVJNQU1Bc2VKaWE=|1591916456|ZAKGDHexrykpcdkGjULyvJF771+UBUf2jB1dGQdTW9w=',
// };
// axios
//   .post(
//     'https://cors-anywhere.herokuapp.com/https://platform.quip.com/1/threads/new-document',
//     body,
//     headers
//   )
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// };

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <button onClick={() => makePostRequest()}>POST REQUEST</button>
      </div>
    );
  }
}

export default App;
