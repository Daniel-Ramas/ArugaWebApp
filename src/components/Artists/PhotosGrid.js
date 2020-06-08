import React from "react";
import { connect } from "react-redux";
import Gallery from "react-photo-gallery";
import "./PhotosGrid.css";
class PhotosGrid extends React.Component {
  renderPhotos = () => {
    //this works but time complexity kind of a bitch this might not scale well
    //note to improve this
    var photos = [];
    this.props.photos.map((photo) => {
      photos.push({
        src: `${photo.urls.thumb}`,
        width: 2,
      });
    });

    return (
      <React.Fragment>
        <Gallery photos={photos} />
      </React.Fragment>
    );
  };
  render() {
    this.renderPhotos();
    return <React.Fragment>{this.renderPhotos()}</React.Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    photos: Object.values(state.randomPhotos),
  };
};

export default connect(mapStateToProps, {})(PhotosGrid);
