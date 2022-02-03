import React from "react";
import { connect } from "react-redux";
import { FetchPosts } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.FetchPosts();
  }

  render() {
    const posts = this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
    return <div className="ui relaxed divided list">{posts}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log("I run 100 times");
  return { posts: state.posts };
};

export default connect(mapStateToProps, { FetchPosts })(PostList);
