import React from "react";
import "./TodayStory.scss";

function TodayStory() {
  return (
    <div className="TodayStory">
      <h2 className="title">오늘의 스토리</h2>
      <div className="story-wrap">
        <div className="story">
          <img
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/161293490630338090.jpg?gi
        f=1&w=480&h=320&c=c&webp=1"
            className="story-img"
          />
          <p className="story-name">'투 머치 우드'여도 괜찮아</p>
          <div className="nickname">
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/161058866625462694.jpg?gif=1&w=240&h=240&c=c&webp=1"
              className="nickname-img"
            />
            <div className="nickname-name">ori_bori_</div>
          </div>
        </div>

        <div className="story">
          <img
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/161352155875806920.jpg?gif=1&w=360&h=240&c=c&webp=1"
            className="story-img"
          />
          <p className="story-name">
            핑크지만 튀지 않게, 모던하지만 따스하게 꾸민 신혼집
          </p>
          <div className="nickname">
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/161241075917342034.jpeg?gif=1&w=240&h=240&c=c&webp=1"
              className="nickname-img"
            />
            <div className="nickname-name">cocowany</div>
          </div>
        </div>

        <div className="story">
          <img
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/161149973039809930.jpeg?gif=1&w=360&h=240&c=c1"
            className="story-img"
          />
          <p className="story-name">
            독보적인 분위기의 빈티지 꽃무늬, 자취방 스튜디오
          </p>
          <div className="nickname">
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/161356415397391503.jpeg?gif=1&w=240&h=240&c=c"
              className="nickname-img"
            />
            <div className="nickname-name">금주geumju</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayStory;
