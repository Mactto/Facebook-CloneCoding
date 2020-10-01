import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post.js";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic=""
        message=""
        timestamp=""
        username=""
        image=""
      />
      <Post
        profilePic=""
        message=""
        timestamp=""
        username=""
        image=""
      />
      <Post
        profilePic=""
        message=""
        timestamp=""
        username=""
        image=""
      />
    </div>
  )
}

export default Feed;
