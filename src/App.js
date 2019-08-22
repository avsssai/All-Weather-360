import React from "react";
import Input from "./Input";
import WeatherCard from "./WeatherCard";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cityName:'',
      components:[],
      number:0,
      data:[]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(value){
    this.setState({
      cityName:value
    })
  }
  handleSubmit(){
    if(this.state.cityName===''){
      return;
    }
    var number = this.state.number;
    console.log(this.state.cityName);
    const weatherCard = <WeatherCard cityName={this.state.cityName} key={number} data={this.state.data}/>
    var components = this.state.components;
    components.push(weatherCard);
    // this.getWeather();
    this.setState({components:components,
      number:number+1,
      cityName:''
    })
  }
  render(){
    var cards = this.state.components.map(card=>card);
    return(
      <div className="app">
        <Input handleChange={this.handleChange} handleClick={this.handleSubmit} value={this.state.cityName}/>
        <div className="weather-cards">
          <div className="container">
            <div className="row">
              {cards}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
