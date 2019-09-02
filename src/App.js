import React from "react";
import Input from "./Input";
import WeatherCard from "./WeatherCard";
import Search from './Search';
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'

import { faCloudSun } from "@fortawesome/free-solid-svg-icons";

library.add(fab);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      components: [],
      number: 0,
      data: [],
      searchData:[],
      show:true,
      cityWhat:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.search = this.search.bind(this);
    this.searchElement = this.searchElement.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
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
    const weatherCard = this.state.data  ? (
      <WeatherCard
        cityName={this.state.cityName}
        key={number}
        data={this.state.data}
      />
    ) : 'no city found';
    var components = this.state.components;
    components.push(weatherCard);
    // this.getWeather();
    this.setState({ components: components, number: number + 1, cityName: "" });
    this.closeSearch();
  }
  search(){
    if (this.state.cityName === "") {
      return;
    }
    var city = this.state.cityName;
     fetch(
      `https://api.apixu.com/v1/search.json?key=2da827a3ce074ddb854173742190807&q=${city}`)
      .then(res => res.json())
      // .then(searchData=>this.setState({searchData:searchData}))
      .then(data=>this.manageSearchData(data))
      .catch(err=>Promise.reject());
      this.setState({show:true});
  }
  manageSearchData(data){
    var cities = [];
    // console.log(data);
    data.forEach(el=>cities.push(el.name));
    // console.log(cities);
    this.setState({searchData:cities});
  }
  closeSearch =()=>{
    this.setState({
      show:false
    })
  }
  searchElement = (citySearched)=>{
    console.log(citySearched);
    
    var number = this.state.number;
    const weatherCard = (
      <WeatherCard
        cityName={citySearched}
        key={number}
        data={this.state.data}
      />
    );
    var components = this.state.components;
    components.push(weatherCard);
    // this.getWeather();
    this.setState({ components: components, number: number + 1, cityName: "" });




    this.closeSearch();
  }
  

  render() {
    var cards = this.state.components.map(card => card);
    var searchComponent = <Search searchData={this.state.searchData}  searchElement={this.searchElement} ></Search>;
    var initialContent =  (
      <div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">    <p className="initial-message">Search the weather conditions in your favorite city.</p> 
</div>
          <div className="col-2"></div>
        </div>
      </div>)
    return (
      <div className="app">
        {/* <div className="header">
          <div className="container ">
            <div className="row justify-content-mid">
              <div className="col-3" />
              <div className="col-5 heading">
                <FontAwesomeIcon icon={faCloudSun} className="mainIcon" />
                All Weather 360&#176;
              </div>
              <div className="col-3" />

                <a className="git-fork" href="https://github.com/avsssai/weather360" style={{textDecoration:'none',color:'white'}}>
                  <FontAwesomeIcon icon={faGithub}/>
                </a>
            </div>
          </div>
        </div> */}
        <div className="header">
          <div className="heading">
          <FontAwesomeIcon icon={faCloudSun} className="mainIcon" />
        All Weather 360&#176;

          </div>
          <a className="git-fork" href="https://github.com/avsssai/weather360" style={{textDecoration:'none',color:'white'}}>
                  <FontAwesomeIcon icon={faGithub}/>
                </a>


        </div>
        <Input
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.cityName}
          search={this.search}
          searchElement={this.searchElement}
          closeSearch={this.closeSearch}
        />
        <div className="search-bar">
          
        {this.state.show ? searchComponent : ''}

        </div>
        {this.state.number >= 1 ?         <div className="weather-cards">
          <div className="container">
            <div className="row">{cards}</div>
          </div>
        </div>
  :
  initialContent
}

        <footer >
          Made using React.js, Bootstrap and APIXU weather API.
        </footer>
  
      </div>

    );
  }
}

export default App;
