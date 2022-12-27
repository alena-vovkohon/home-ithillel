import { Component } from 'react';

class File extends Component {
    render() {  
        return (
            <li>{this.props.name}</li>        
        );
    }
}

export default File;