import React, { Component } from "react";
import axios from "axios";
import Nav from "./components/Nav/Nav";
import CenterContent from "./components/CenterContent/CenterContent";
import Footer from "./components/Footer/Footer";

class App extends Component {
  componentDidMount = () => {
    const header = {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization:
        "Bearer QVJNQU1BQVFrYmU=|1592341477|0BjZDfHHvNc9YhMWAp6/bIXZODod9ClZc6fYrBA8K3U=",
      "Grant-Type": "Authorization Code",
    };

    axios
      .get("https://cors-anywhere.herokuapp.com/https://platform.quip.com/1/oauth/login", header)
      .then(async (response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(`Error in fetching threads: ${error}`);
      });
  };

  // componentDidMount = () => {
  //   const header = {
  //     "Content-Type": "application/json; charset=UTF-8",
  //     Authorization:
  //       "Bearer QVJNQU1BQVFrYmU=|1592341477|0BjZDfHHvNc9YhMWAp6/bIXZODod9ClZc6fYrBA8K3U=",
  //     "Grant-Type": "Authorization Code",
  //   };

  //   axios
  //     .post(
  //       "https://cors-anywhere.herokuapp.com/https://platform.quip.com/1/oauth/access_token",
  //       header
  //     )
  //     .then(async (response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error(`Error in fetching threads: ${error}`);
  //     });
  // };

  render() {
    return (
      <div className="App">
        <Nav />
        <CenterContent />
        <Footer />
      </div>
    );
  }
}

export default App;
