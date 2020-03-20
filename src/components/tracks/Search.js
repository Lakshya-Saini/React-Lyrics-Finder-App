import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  handleChange = e => {
    const trackTitle = e.currentTarget.value;
    this.setState({ trackTitle });
  };

  searchTrack = (dispatch, e) => {
    e.preventDefault();

    if (this.state.trackTitle === "") {
      toast.error("Please enter a track");
      return;
    }

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list
        });

        this.setState({ trackTitle: "" });

        toast.success("Here are your results...");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-4 p-4 card-body">
              <h1 className="display-4 text-center">
                <i className="fas fa-music"></i> Search for a song
              </h1>
              <p className="lead text-center">Get the lyrics for any song</p>
              <form onSubmit={this.searchTrack.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    name="trackTitle"
                    type="text"
                    placeholder="Search for any song..."
                    className="form-control form-control-lg shadow-none"
                    onChange={this.handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block shadow-none"
                >
                  Get lyrics
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
