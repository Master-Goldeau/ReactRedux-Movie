import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "", plouc: "tapez le titre de votre film..." };
  }
  render() {
    return (
      <div>
        <input onChange={this.handleChange.bind(this)} placeholder={this.state.plouc}/>
      </div>
    )
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });   
  }
}

// const SearchBar = function(){
//     return <input/>
// }

export default SearchBar;
