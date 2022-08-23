import React from "react";

const PostCard = ({ post }) => {
  return <div>{post.node.title}</div>;
};

export default PostCard;
