import React, { Component } from "react";
import SearchBar from "../components/search-bar";
import VideoList from "./video-list";
import axios from "axios";
import VideoDetail from "../components/video-detail";

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL =
  "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY = "api_key=da7182c591720df32c4b580b823a0cdb";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movieList: {}, currentMovie: {} };
  }

  componentWillMount() {
    this.initMovies();
  }

  initMovies() {
    const request = axios
      .get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`)
      .then(
        function(response) {
          this.setState({
            movieList: response.data.results.slice(1, 6),
            currentMovie: response.data.results[0]
          });
        }.bind(this)
      );
  }

  render() {
    const renderVideoList = () => {
      console.log("",this.state.movieList.lenght);
      if (this.state.movieList.lenght>=5){
        return <VideoList movieList={this.state.movieList}/>
      }
    };
    return (
      <div>
        <SearchBar />
        {renderVideoList()}
        {/* <VideoList movieList={this.state.movieList}/> */}
        <VideoDetail
          title={this.state.currentMovie.title}
          description={this.state.currentMovie.overview}
        />
      </div>
    );
  }
}

export default App;
