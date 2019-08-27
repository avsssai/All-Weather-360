import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';


const dayContext = require.context('./icons/weather/64x64/day', true, /.png$/);
const nightContext = require.context('./icons/weather/64x64/night', true, /.png$/);


const obj = {
    dayObj:{},
    nightObj:{}
}

dayContext.keys().forEach((key) => {
  const countryCode = key.split('./icons/weather/64x64/day').pop() // remove the first 2 characters
    .substring(0, key.length - 4); // remove the file extension
  obj.dayObj[countryCode] = dayContext(key);
  console.log(obj);
});

nightContext.keys().forEach((key) => {
  const countryCode = key.split('./icons/weather/64x64/night').pop() // remove the first 2 characters
    .substring(0, key.length - 4); // remove the file extension
  obj.nightObj[countryCode] = nightContext(key);
});




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 export default obj;
