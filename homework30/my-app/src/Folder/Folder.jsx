import { Component } from 'react';
import { renderCarentType } from '../utils'
import './Folder.css'


class Folder extends Component {
  constructor(props) {
      super(props);
      this.state={
          isOpen:this.isOpenFolder()
      }
  }
    
    isOpenFolder = () => {
        return this.props.expandedFolders.includes(`/${this.props.name}`)
    }

    isOpenNextFolder = () => {
        return this.props.expandedFolders
            .filter(item => item.includes(this.props.name))
            .map(item => item.replace(`/${this.props.name}`, ''))
            .filter(item => !!item)
    }
    
    handleToggler = () => {
        this.setState({ ...this.state, isOpen:!this.state.isOpen})
    
    }
  
    render() {
        return (
            <>
                <li className='Folder' onClick={this.handleToggler}>{this.props.name} </li> 
                {this.state.isOpen ?
                    <ul>
                        {renderCarentType(this.props.children, this.isOpenNextFolder())}
                    </ul> :
                    null
                }    
        </>
        
    );
  }
}

export default Folder;

