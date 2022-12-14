import { Component } from 'react';
import './Banner.css'


class Banner extends Component {
    constructor(props) {
      console.log(props)
      super(props);
    }

  render() {
    return (
      <div className='Banner'>
            <h3> {this.props.title}</h3>
            <p> {this.props.article}</p> 
      </div>
     
    );
  }
}

export default Banner;