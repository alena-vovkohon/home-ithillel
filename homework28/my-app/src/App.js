import React from 'react';
import { Component } from 'react';
import './App.css';
import Head from './Head/Head';
import Photo from './Main/Photo'
import Banner from './Banner/Banner'

class App extends Component {
  constructor() {
  super();
    this.state = {
      value: '',
      title: [
        {
        name: 'Ski',
        description: 'winter',
        year: '2021'
        },
        {
        name: 'Mountans',
        description: 'fall',
        year: '2020'
        },
        {name: 'Sea',
        description: 'summer',
        year: '2019'
        },
        {name: 'Flowers',
        description: 'spring',
        year: '2020'
        },
      ]
    }
  } 
  
  handlerChanger = (value) => {
    this.setState({...this.state, value})
  }

  handlerFilter = (value) => {
    let resaltFilter = this.state.title.filter(item => item.description.toLowerCase().includes(value.toLowerCase()))
    this.setState({ ...this.state, title:resaltFilter}) 
  }

  render() {
    return (
      <div className="App">
        <Head onChange={this.handlerChanger} onFilter={this.handlerFilter} />
        <div className='Section'>
          <Banner title={'Title'} article={'your advertisement can be here'} />
          <div className="Main">
            {this.state.title.map((item, index) => {
              return (
                <Photo key={index} name={item.name} description={item.description} year={item.year} />
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
