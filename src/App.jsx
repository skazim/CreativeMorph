import React, { Component } from "react";
import Image from './Image.jsx';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.fetchImage = this.fetchImage.bind(this);
    this.state = {
      "src": {
        "message": "",
        "status": ""
      }
    }
  }
  componentDidMount() {
    const instance = this;
    instance.fetchImage(function (response) {
      if (response) {
        instance.setState({
          src: {
            message: response.message,
            status: response.status
          }
        })
      }
    });
  }


  handleClick() {
    const instance = this;
    this.fetchImage(function (response) {
      instance.setState({
        src: response
      })
    })
  }
  fetchImage(callback) {
    const url = "https://dog.ceo/api/breeds/image/random";
    return fetch(url)
      .then(response => {
        if (!response.ok) { throw response }
        return response.json()
      })
      .then(JsonData => {
        callback(JsonData)
      }).catch(function (ex) {
        callback(null, ex)
      });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Image imageSrc={this.state.src} />
        <div>
          <button onClick={this.handleClick.bind(this)}>Swipe Image</button>
        </div>
      </div>
    )
  }
}