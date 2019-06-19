import React, { Component }from 'react';
import qs from 'qs';
import axios from 'axios';
import styles from './CenterContent.module.css';

const userID = "ARMAEAXXOQQ"

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
              'Bearer QVJNQU1BQVFrYmU=|1592341477|0BjZDfHHvNc9YhMWAp6/bIXZODod9ClZc6fYrBA8K3U=',
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

      // getThreads = () => {
      //     const header = {
      //       'Content-Type': 'application/json; charset=UTF-8',
      //       Authorization: 'Bearer QVJNQU1BQVFrYmU=|1592341477|0BjZDfHHvNc9YhMWAp6/bIXZODod9ClZc6fYrBA8K3U=',
      //       'Grant-Type': 'Authorization Code'
      //     }
          
      //     axios.get('https://cors-anywhere.herokuapp.com/https://platform.quip.com/1/oauth/login', header    
      //     )
      //     .then((response) => {
      //         console.log(response)
      //     }).catch((error) => {
      //         console.error(`Error in fetching threads: ${error}`)
      //     })
      // }

      getUsers = () => {

      }

    render() {
        return (
            <article id={styles['center-content-container']}>
                <div id={styles['spreadsheet-container']}>spreadsheet container</div>
                <div id={styles['recent-files-container']}>recent files</div>
                <button onClick={this.makePostRequest}>Create New Spreadsheet</button>
                <button onClick={this.getThreads}>Get Recent Spreadsheets</button>
                <button>Import Spreadsheet(s)</button>
                <button>Export Spreadsheet(s)</button>
                <button>DELETE CURRENT</button>
            </article>
        )
    }
    
}

export default CenterContent;