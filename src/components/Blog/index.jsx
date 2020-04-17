import React from "react";

import LeftNav from "./../LeftNav";
import PostPage from "./../PostPage";

import { getFullPost } from "../../api";

import "./index.scss";

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { post } = this.state;

    if ((!prevState.post && post) || (post && post.id !== prevState.post.id)) {
      this.loadFullPost(post.more);
    }
  }

  loadFullPost = async (path) => {
    const fullPost = await getFullPost(path);
    const newPost = {
      ...this.state.post,
      ...fullPost,
    };

    this.setState({ post: newPost });
  };

  handleCardClick = (data) => {
    const { post } = this.state;

    if (!post || data.id !== post.id) {
      this.setState({ post: data });
    }
  };

  resetPost = () => {
    this.setState({ post: null });
  };

  render() {
    const { post } = this.state;
    const postId = post ? post.id : null;

    return (
      <div className="blog">
        <LeftNav
          handleCardClick={this.handleCardClick}
          activePostId={postId}
          resetPost={this.resetPost}
        />
        <PostPage post={post} />
      </div>
    );
  }
}

export default Blog;
