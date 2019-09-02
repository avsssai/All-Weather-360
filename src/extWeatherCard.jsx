import React from "react";
import Icon from "./Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint, faCloudRain, faWind } from "@fortawesome/free-solid-svg-icons";
// import WeatherModal from "./WeatherModal";

import "./scratcu2.css";

class ExtWeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fetching: true,
      celsius: true,
      tempInC: "",
      tempInF: "",
      showModal: false
    };
  }
  componentDidMount() {
    var city = this.props.cityName;
    var data = this.props.data;
    var getData = new Promise((resolve,reject)=>{
        this.setState({
            data:data
        })
    })
    getData.then(data=>data? console.log(data) : 'didnt come.');
  }
  render(){
      return(
          <h3>coming..</h3>
      )
  }
//   render() {
//     var data = this.state.data;
//     if (this.state.fetching) {
//       var loading = <h5>Loading...</h5>;
//     }
//     var tempC = data && data.current ? data.current.temp_c : loading;
//     var tempF = data && data.current ? data.current.temp_f : loading;
//     var isDay = data && data.current ? data.current.is_day : loading;
//     var precipitation = data && data.current ? data.current.precip_mm : "";
//     var humidity = data && data.current ? data.current.humidity : "";
//     var windSpeed = data && data.current ? data.current.gust_kph : "";
//     var lastUpdated =
//       data && data.current ? data.current.last_updated : loading;

//     var iconNumber =
//       data && data.current
//         ? data.current.condition.icon.slice(-7).slice(0, 3)
//         : loading;

//     return (
//       <div className="weather-card" onClick={() => this.openModal()}>
//         <div className="weather-icon">
//           {/* {images['113.png']} */}
//           <Icon iconNumber={iconNumber} isDay={isDay} />
//         </div>
//         <div className="weather-status">
//           {data && data.current ? data.current.condition.text : loading}
//         </div>
//         <div className="weather-field">
//           <div className="container">
//             <div className="row justify-content-md-center">
//               <div id="celcius-field" className="col-5">
//                 {tempC}
//                 <i className="centigrade">&#8451;</i>
//               </div>
//               <div id="divider" className="col-2">
//                 |
//               </div>
//               <div id="farenheit-field" className="col-5">
//                 {tempF}
//                 <i className="farenheit">&#8457;</i>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="city-name">
//           {data && data.location ? data.location.name : loading}
//         </div>
//         <div className="country">
//           {data && data.location ? data.location.country : loading}
//         </div>
//         <div className="additional-info mt-2">
//           <div className="container">
//             <div className="row justify-content-md-center">
//               <div className="col-4 small-icon" id="precipitation">
//                 <FontAwesomeIcon icon={faCloudRain} />
//                 <div>{precipitation} mm</div>
//               </div>
//               <div className="col-4 small-icon" id="humidity">
//                 <FontAwesomeIcon icon={faTint} />
//                 <div>{humidity}%</div>
//               </div>
//               <div className="col-4 small-icon" id="wind">
//                 <FontAwesomeIcon icon={faWind} />
//                 <div>{windSpeed} kph</div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="last-update">Last Updated : {lastUpdated}.</div>
//       </div>
//     );
//   }
}

export default ExtWeatherCard;
