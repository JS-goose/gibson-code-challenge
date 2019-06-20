import React, { Component } from "react";
import qs from "qs";
import axios from "axios";
import styles from "./CenterContent.module.css";

const userID = "ARMAEAXXOQQ";

class CenterContent extends Component {
  makePostRequest = () => {
    const body = qs.stringify({
      title: "React App",
      type: "spreadsheet",
      format: "html",
      content: "This is a test of the POST function",
    });

    fetch("https://cors-anywhere.herokuapp.com/https://platform.quip.com/1/threads/new-document", {
      method: "post",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        authorization:
          "Bearer QVJNQU1BQVFrYmU=|1592341477|0BjZDfHHvNc9YhMWAp6/bIXZODod9ClZc6fYrBA8K3U=",
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

  handleImport = (event) => {
    console.log(event.target.files[0]);
  };

  getUsers = () => {};

  render() {
    return (
      <React.Fragment>
        <article id={styles["center-content-container"]}>
          <div id={styles["spreadsheet-container"]}>spreadsheet container</div>
          <div id={styles["recent-files-container"]}>recent files</div>
        </article>
        <div id={styles["controls-container"]}>
          <button className={styles["control-buttons"]} onClick={this.makePostRequest}>
            Create New Spreadsheet
          </button>
          <button className={styles["control-buttons"]} onClick={this.getThreads}>
            Recent Spreadsheets
          </button>
          <label htmlFor="import-spreadsheet-button">Import Spreadsheet</label>
          <input
            type="file"
            name="imported-spreadsheet"
            id="import-spreadsheet-button"
            onChange={this.handleImport}
          />
          <button className={styles["control-buttons"]}>Export Current</button>
          <button className={styles["control-buttons"]}>Delete Current</button>
        </div>
      </React.Fragment>
    );
  }
}

export default CenterContent;
