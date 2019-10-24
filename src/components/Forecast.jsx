import React from "react";
import ForecastCard from './ForecastCard';
import '../styles/forecastcard.css'

class Forecast extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            forecastData:[]
        }
    }
    componentDidMount(){
        fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=8393a531d816e8a4df3d2277c671afc9')
            .then(res => res.json())
            .then(forecastData=>{
                this.setState({forecastData:forecastData});
                console.log(forecastData);
            })
            .catch(err=> console.log(err));
    }
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