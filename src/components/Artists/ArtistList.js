import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../redux/actions";
import ArtistProfile from "./ArtistProfile";
class ArtistList extends Component {
  componentDidMount() {
    this.props.getUser(5);
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return (
        <div className="item" key={user.id.value}>
          <ArtistProfile user={user} />
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderUsers()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    users: Object.values(state.randomUsers),
  };
};

export default connect(mapStateToProps, { getUser })(ArtistList);
