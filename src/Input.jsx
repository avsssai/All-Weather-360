import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    this.props.handleChange(event.target.value);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.handleClick();
  }
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-2" />
          <div className="col-8">
            <form onSubmit={this.handleClick}>
              <div className="input mt-4">
                <div className="input-group  ">
                  <input
                    type="text"
                    placeholder="Enter the city name .."
                    className="form-control"
                    onChange={this.handleChange}
                    value={this.props.value}
                  />
                  <button className="btn btn-primary ml-3" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-2" />
        </div>
      </div>
    );
  }
}

export default Input;
