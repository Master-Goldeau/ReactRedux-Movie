import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      title: "tapez le titre de votre film...",
      intervalBeforeRequest: 1000,
      lockRequest: false
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-8 input-group">
          <input
            type="text"
            className="form-control input-lg"
            onChange={this.handleChange.bind(this)}
            placeholder={this.state.title}
          />
          <span className="input-group-button">
            <button
              className="btn btn-secondary"
              onClick={this.handleOnClick.bind(this)}
            >
              GO
            </button>
          </span>
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
    if (!this.state.lockRequest) {
      this.setState({ lockRequest: true });
      setTimeout(
        function() {
          this.search();
        }.bind(this),
        this.state.intervalBeforeRequest
      );
    }
  }

  handleOnClick(event) {
    this.search();
  }

  search() {
    this.props.callback(this.state.searchText);
    this.setState({lockRequest:false})
  }
}

export default SearchBar;
