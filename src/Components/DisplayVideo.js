import React, { Component } from "react";
import { Player } from "video-react";
// https://video-react.js.org/components/player/



class DisplayVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      site_url: this.props.site_url,
      video_url: this.props.video_url,
      site_title: this.props.site_title,
    };
  }

  render() {
    return (
      <div className="card">
        <Player playsInline poster="/assets/poster.png" src={this.state.video_url} />
        <br />
        <a href={this.state.site_url}>{this.state.site_title}</a>
      </div>
    );
  }
}

export default DisplayVideo;
