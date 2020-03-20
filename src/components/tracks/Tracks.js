import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layouts/Spinner";
import Track from "./Track";

class Tracks extends Component {
  state = {};
  render() {
    return (
      <Consumer>
        {value => {
          const { track_list, heading } = value;
          if (track_list === undefined || track_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h4 className="text-center mb-5">{heading}</h4>
                <div className="row">
                  {track_list.map(item => (
                    <Track key={item.track.track_id} track={item.track} />
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
