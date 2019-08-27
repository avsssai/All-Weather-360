import React from 'react';
import obj from './index.js';
// import Mist from './icons/weather/64x64/night/113.png';

class Icon extends React.Component{
    render(){
        var iconNumber = this.props.iconNumber;
        if(this.props.isDay === 1){
           var icon =  <img src={obj.dayObj['./'+iconNumber.toString()]} alt="icon"/>

        }if(this.props.isDay === 0){
           icon =  <img src={obj.nightObj['./'+iconNumber.toString()]} alt="icon"/>

        }
        return(
            <div>
                {icon}
            </div>

        )
    }
}
export default Icon;

