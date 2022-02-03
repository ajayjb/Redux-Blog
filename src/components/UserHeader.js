import React from "react";
import { fetchUser } from "../actions";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  find() {
    return this.props.users.find((user) => {
      return user.id === this.props.userId;
    });
  }
  render() {
    if (this.find() === undefined) {
      return <div>Loading</div>;
    } else {
      return <div>{this.find().name}</div>;
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state.users);
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
