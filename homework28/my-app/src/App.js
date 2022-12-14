import React from 'react';
import './App.css';
import Head from './Head/Head';
import Photo from './Main/Photo'
import Banner from './Banner/Banner'

function App() {
  return (
    <div className="App">
      <Head />
      <div className ='Section'>
        <Banner title={'Title'} article={'your advertisement can be here'} />
        <div className="Main">
          <Photo name={'Ski'}  description ={'winter'} year={'2021'} />
          <Photo name={'Mountans'}  description ={'fall'} year={'2020'} />
          <Photo name={'Sea'} description={'summer'} year={'2019'} /> 
          <Photo name={ 'Flowers' } description ={'spring'} year ={'2020'} /> 
        </div>
      </div> 
    </div>
  );
}

export default App;
