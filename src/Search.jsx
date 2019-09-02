import React from "react";
import "./search.css";

class Search extends React.Component {
    constructor(props){
        super(props);
        this.searchElementClick = this.searchElementClick.bind(this);
    }
    searchElementClick(city){
        this.props.searchElement(city);
        // console.log(city);
    }
  render() {
    
      var searchData = this.props.searchData;
    var cityList = [];
      if(searchData){
        this.props.searchData.forEach(city =>
            cityList.push(
              <li className="list-group-item" onClick={()=>this.searchElementClick(city)} key={city} value={city}>
                {city}
              </li>
                // <div className="dropdown-item" onClick={()=>this.searchElementClick(city)}>
                //     <li className='list-group-item'>
                //     {city}

                //     </li>
                // </div>
            )
          );
    
      }

    

    return (
      <div className="container" id="search-results">
        <div className="row justify-content-md-center">
          <div className="col-2" />
          <div className="col-8">
            <ul className="list-group ">
            {cityList}

            </ul>
            {/* <ul className="dropdown-menu">
                {cityList}
            </ul> */}
          </div>
          <div className="col-2" />
        </div>
      </div>
                // <ul className="list-group ">{cityList}</ul>

    );
  }
}

export default Search;
