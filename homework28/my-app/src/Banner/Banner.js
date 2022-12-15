import { Component } from 'react';
import './Banner.css'


class Banner extends Component {
    constructor(props) {
      // console.log(props)
      super(props);
      this.state = {
        isOpen: false
      }

    }
  
  handlerOpen = () => {
    this.setState({...this.state, isOpen:!this.state.isOpen})
  }
  

  render() {
    return (
      <div className='Banner'>
        <h3> {this.props.title}</h3>
        <p> {this.props.article}</p> 
        <button onClick={this.handlerOpen}>Price</button>
        {
          this.state.isOpen ? 
          (<p> contacting us email qwertyuio@gmail.com or calling 123-4567</p>) :
          null
        }
        
      </div>
     
    );
  }
}

export default Banner;