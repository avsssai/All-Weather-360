import React from "react";
import Input from "./Input";
import WeatherCard from "./WeatherCard";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      components: [],
      number: 0,
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(value) {
    this.setState({
      cityName: value
    });
  }
  handleSubmit() {
    if (this.state.cityName === "") {
      return;
    }
    var number = this.state.number;
    console.log(this.state.cityName);
    const weatherCard = (
      <WeatherCard
        cityName={this.state.cityName}
        key={number}
        data={this.state.data}
      />
    );
    var components = this.state.components;
    components.push(weatherCard);
    // this.getWeather();
    this.setState({ components: components, number: number + 1, cityName: "" });
  }
  render() {
    var cards = this.state.components.map(card => card);
    return (
      <div className="app">
        <div className="header">
          <div className="container ">
            <div className="row justify-content-mid">
              <div className="col-3" />
              <div className="col-5 heading">
                <FontAwesomeIcon icon={faCloudSun} className="mainIcon" />
                All Weather 360&#176;
              </div>
              <div className="col-3" />
            </div>
          </div>
        </div>
        <Input
          handleChange={this.handleChange}
          handleClick={this.handleSubmit}
          value={this.state.cityName}
        />
        <div className="weather-cards">
          <div className="container">
            <div className="row">{cards}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
