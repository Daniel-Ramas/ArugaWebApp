import React, { Component } from "react";
import SocialMediaBar from "./SocialMediaBar";
import { getPhotos, getTikTok } from "../../redux/actions";
import { connect } from "react-redux";
import PhotosGrid from "./PhotosGrid";
import ReactPlaceholder from "react-placeholder";
import "./ArtistProfile.css";

class ArtistProfile extends Component {
  componentDidMount() {
    this.props.getPhotos();
    this.props.getTikTok();
  }

  renderColumnOne() {
    const { title, first, last } = this.props.user.name;
    const { picture } = this.props.user; //large, medium, thumbnail
    const { state, country } = this.props.user.location;
    return (
      <React.Fragment>
        <div className="row-social">
          <SocialMediaBar />
        </div>
        <div className="row-avatar">
          <img src={picture.large} className="circular-square" />
        </div>
        <div className="row-name">
          <h3>
            {title} {first} {last}
          </h3>
        </div>
        <div className="row-location">
          <i aria-hidden="true" className="red map pin large icon" />
          {state}, {country}
        </div>
        <div className="bio-row">
          <h4>Bio</h4>
          <ReactPlaceholder type="text" rows={12} />
        </div>
      </React.Fragment>
    );
  }

  renderColumnTwo() {
    return (
      <React.Fragment>
        <div className="ten wide column">
          <PhotosGrid />
        </div>
      </React.Fragment>
    );
  }

  renderTikTok() {
    return <div dangerouslySetInnerHTML={{ __html: this.props.tiktok.html }} />;
  }

  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="cointainer">
            <div className="grid">
              <div className="column-one">{this.renderColumnOne()}</div>
              <div className="column-two">{this.renderColumnTwo()}</div>
            </div>
          </div>
        </div>
        {this.renderTikTok()}
        {this.props.tiktok.html}
      </React.Fragment>
    );
  } // For some reason the video doesnt render need to figure that out
}

const mapStateToProps = (state) => {
  return {
    tiktok: state.tiktokVideo,
  };
};

export default connect(mapStateToProps, { getPhotos, getTikTok })(
  ArtistProfile
);
