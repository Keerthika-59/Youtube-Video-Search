import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./components/VideoList";

class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    console.log(response, "res");
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{" "}
        <VideoList videos={this.state.videos} />
        {this.state.videos.length} videos
      </div>
    );
  }
}
export default App;
