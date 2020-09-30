import React from 'react';
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://cdn.vox-cdn.com/thumbor/xKP-5pKiQRRCcPZke5gg1xcSqJQ=/0x0:4436x2957/1200x800/filters:focal(1807x1044:2515x1752)/cdn.vox-cdn.com/uploads/chorus_image/image/65846603/1192494773.jpg.0.jpg"
        profileSrc="https://media.squawka.com/images/en/2019/12/07202837/son-heung-min-tottenham-burnley-2019.jpg"
        title="Sony Goal!!!!"
      />
      <Story
        image="https://lh3.googleusercontent.com/gTw96cHiHZ_G6jvfbZNXyuhPAJIMQJH1aq_DWXFWWseuntuy9_beFzkLm4wC9e0uU4yvyMHBfzkvyq4lHhUebDL848TkdacSHQ=w1200-h630-rj-pp-e365"
        profileSrc="https://gdimg.gmarket.co.kr/1577537563/still/600?ver=1552902446"
        title="BTS"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWeFzDhZ6FeoDKkAywY-zmBgAK0iEfvTALdg&usqp=CAU"
        profileSrc="https://blog.kakaocdn.net/dn/cvoxQ0/btqBFNMhwXt/btqiFB0YXNnvm7PYzK1GHK/img.png"
        title="python"
      />
      <Story
        image="https://miro.medium.com/max/12500/1*1mpE6fsq5LNxH31xeTWi5w.jpeg"
        profileSrc="https://miro.medium.com/max/1024/0*6XnccoRFvqi4GkXu.jpeg"
        title="Neurun"
      />
    </div>
  )
}

export default StoryReel;
