import React from "react";

import "./index.scss";

const PostPage = ({ post }) => {
  const getNotSelectedBlock = () => {
    return (
      <div className="not-found-container">
        <h1>Post not selected</h1>
      </div>
    );
  };

  if (!post) {
    return getNotSelectedBlock();
  }

  const { name, pic, shortInfo, bio } = post;

  return (
    <div className="post-page-wrapper">
      <div className="post-info">
        <div className="header">
          <div className="title-wrapper">
            <h1 className="title">{name}</h1>
            <h2 className="short-info">{shortInfo}</h2>
          </div>
          {pic && (
            <div className="img-wrapper">
              <img src={pic} />
            </div>
          )}
        </div>
        <p className="bio">{bio}</p>
      </div>
    </div>
  );
};

export default PostPage;
