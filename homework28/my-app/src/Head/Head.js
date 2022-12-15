// import React from "react";
import { Component, createRef } from 'react';
import './Head.css'

class Head extends Component {

    constructor(props) {
        // console.log(props)
        super()
        this.ref = createRef()
    }
 
    handlerOnClick = () => {
        this.props.onChange(this.ref.current.value)
        this.props.onFilter(this.ref.current.value)
    }

    render() {
        return (
            <div className="Head">
                <h1>Collection of photo</h1>
                <input ref={this.ref} className="input" placeholder="photo" />
                <button onClick={this.handlerOnClick}>Search</button>
            </div>
        )
    }
}    

 export default Head