import React from "react";
import ForecastCard from './ForecastCard';
import '../styles/forecastcard.css'

class Forecast extends React.Component{
    render(){
        return(
            <div className="ui grid">
                <div className="five column row">
                    
                        <ForecastCard day='Mon'></ForecastCard>
                        <ForecastCard day='Tue'></ForecastCard>
                        <ForecastCard day='Wed'></ForecastCard>
                        <ForecastCard day='Thu'></ForecastCard>
                        <ForecastCard day='Fri'></ForecastCard>
                    
                </div>
            </div>
        )
    }
}

export default Forecast;