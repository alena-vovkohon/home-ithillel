import { Component } from 'react';
import './Photo.css'

class Photo extends Component {
  constructor(props) {
      console.log(props)
      super(props);
    }

  render() {
    return (
      <div className='Photo'>
        <h3> {this.props.name}</h3>
        <p>Description : {this.props.description}</p>
        <p>year: {this.props.year}</p> 
      </div>
    );
  }
}

export default Photo;

