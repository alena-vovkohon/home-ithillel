import { Component } from 'react';
import './Emoji.css'

class Emoji extends Component {
  constructor(props) {
      console.log(props)
    super(props);
  }
  
  render() {
    return (
      <div>
         <p className="emoji" onClick={this.props.onClick}>
            {String.fromCodePoint(this.props.unicode)}
          </p>       
      </div>
    );
  }
}

export default Emoji;