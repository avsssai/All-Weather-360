import React from "react";
import '../styles/forecastcard.css'


class ForecastCard extends React.Component{

render(){
return (
<div className="column">
    <div className="ui card" id='card'>
        <div className="content">
            <div className="centered header" id='card-header'>
                {this.props.day}
            </div>
            <div className="meta">
                <img className='ui tiny centered image' src="http://openweathermap.org/img/wn/01d@2x.png" alt="img" />
            </div>
            <div id='forecast-temp' className='description'>21 °c</div>

        </div>
    </div>
</div>

)

}
}



export default ForecastCard;