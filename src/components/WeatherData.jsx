import React from "react";
import '../styles/weathercard.css';
import Forecast from './Forecast';
class WeatherCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
    componentDidMount(props){
        fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8393a531d816e8a4df3d2277c671afc9')
            .then(res=>res.json())
            .then(data=>{
                this.setState({data:data});
                console.log(data, data.sys.country);
            })
            .catch(err=> console.log(err));
    } 

    render(){
        var data = this.state.data;
        var preconditionName = data && data.name;
        var preconditionCountry = data && data.sys;
        var preconditionWeather = data && data.weather;
        var cityName = preconditionName ? data.name : 'Loading';
        var countryName = preconditionCountry ? data.sys.country : 'Loading';
        var weatherStatus = preconditionWeather ? data.weather[0].main : 'Loading';
        var icon = preconditionWeather ? data.weather.icon : '';
        return(
            <div className="ui container segment" id='weather-card'>
                <div className="ui inverted medium header" id='city-name'>
                    {cityName}, {countryName}
                    
                </div>
                <div className="ui grid">
                    <div className="three column row" id='top-row'>
                        <div className="column" id='icon'>
                            <div  id='weather-icon'>
                                <img className="ui centered tiny image" src={"http://openweathermap.org/img/wn/09d@2x.png"} alt="img"/>
                                
                            </div>
                            <span id='weather-status'>{weatherStatus}</span>
                            
                        </div>
                        <div className="column">
                            <div id="temp">21.02 °c</div>
                        </div>
                        <div className="column" id='location-details'>
                            <span>Wind: 6.1 kmph</span>
                            <span>Precip: 0.00 mm</span>
                            <span>Pressure: 1025.0 mb</span>
                        </div>
                    </div>
                    <Forecast></Forecast>
                </div>
            </div>
        )
    }
}

export default WeatherCard;