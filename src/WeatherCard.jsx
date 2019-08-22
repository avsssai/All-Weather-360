import React from "react";
// import "./weatherCard.css";
import Sunny from './icons/weather/64x64/day/113.png';
import Mist from './icons/weather/64x64/day/143.png';
import PartlyCloudy from './icons/weather/64x64/day/116.png';
import Cloudy from './icons/weather/64x64/day/119.png';
import Overcast from './icons/weather/64x64/day/122.png';
import PatchyRainPossible from './icons/weather/64x64/day/176.png';





import './scratcu2.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun,faCloudRain,faCloudSun,faBars,faCloudMoon, faMoon, faIcons } from "@fortawesome/free-solid-svg-icons";

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fetching: true,
      celsius: true,
      tempInC: "",
      tempInF: "",
      icontoShow:''
    };
  }
  componentDidMount() {
    var city = this.props.cityName;
    fetch(
      `https://api.apixu.com/v1/current.json?key=2da827a3ce074ddb854173742190807&q=${city}`
    )
      .then(res => res.json())
      .then(data => this.setState({ data: data, fetching: false }))
      .then(() => console.log(this.state.data))
      .then(()=>this.getIcon())
      .catch(err => Promise.reject());
    
  }
  getIcon(){
    var icon = (this.state.data && this.state.data.current ? this.state.data.current.condition.icon.slice(15): 'pending');
    var iconUsed = './icons'+icon;
    this.setState({icontoShow:iconUsed});
    console.log(this.state.icontoShow);

}
  render() {
    var data = this.state.data;
    if (this.state.fetching) {
      var loading = <h5>Loading...</h5>;
    }
    var tempC = data && data.current ? data.current.temp_c : loading;
    var tempF = data && data.current ? data.current.temp_f : loading;

    if(data && data.current){
        if(data.current.condition.text ==='Sunny'){
            var imageToUse = <img src={Sunny} alt='sunny'></img>;
        }if(data.current.condition.text ==='Mist'){
             imageToUse = <img src={Mist} alt='mist'></img>;

        }

    }

    return (
      <div className="weather-card">
        <div className="weather-icon">
          {/* <i class="fas fa-sun" /> */}
          {/* <FontAwesomeIcon icon={ icon} className="sun-icon" /> */}
            {/* {data && data.current ? <img src={}></img> : loading} */}
            {/* <img src={iconToUse} alt="icon"/> */}
            {/* {iconToShow} */}
            {imageToUse}
        </div>
        <div className="weather-status">
              {data && data.current ? data.current.condition.text : loading}
        </div>
        <div className="weather-field">
          <div className="container">
            <div className="row justify-content-md-center">
              <div id="celcius-field" className="col-5">
                {tempC}
                <i className="centigrade">&#8451;</i>
              </div>
              <div id="divider" className="col-2">
                |
              </div>
              <div id="farenheit-field" className="col-5">
                {tempF}
                <i className="farenheit">&#8457;</i>
              </div>
            </div>
          </div>
        </div>

        <div className="city-name">{data && data.location ? data.location.name : loading}
</div>
        <div className="country">{data && data.location ? data.location.country : loading}
</div>
      </div>
    );
  }
}

export default WeatherCard;
