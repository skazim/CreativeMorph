import React, { Component } from "react";


export default class Image extends Component {

    render() {
        console.log(this.props);
        return (
            <img src={this.props.imageSrc.message} alt="maltese" width="400px" height="300px"/>
        )
    }
}