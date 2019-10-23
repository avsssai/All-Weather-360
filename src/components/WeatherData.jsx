import React from "react";
import '../styles/weathercard.css';
import Forecast from './Forecast';
class WeatherCard extends React.Component{
     

    render(){
        return(
            <div className="ui container segment" id='weather-card'>
                <div className="ui inverted medium header" id='city-name'>
                    New York, USA
                </div>
                <div className="ui grid">
                    <div className="three column row" id='top-row'>
                        <div className="column" id='icon'>
                            <div  id='weather-icon'>
                                <img className="ui centered tiny image" src="http://openweathermap.org/img/wn/01d@2x.png" alt="img"/>
                                
                            </div>
                            <span id='weather-status'>Partly Cloudy</span>
                            
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