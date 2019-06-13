import React, { Component }from 'react';
import qs from 'qs';

class CenterContent extends Component {
    makePostRequest = () => {
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

    render() {
        return (
            <div>
                CenterContent
                <button onClick={this.makePostRequest}>POST REQUEST</button>
                <button onClick={this.getThreads}>GET THREADS</button>
            </div>
        )
    }
    
}

export default CenterContent;