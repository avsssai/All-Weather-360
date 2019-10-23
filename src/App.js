import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherData';

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello!</h1>
      <WeatherCard></WeatherCard>
      </div>
      
    )
  }
}

export default App;
