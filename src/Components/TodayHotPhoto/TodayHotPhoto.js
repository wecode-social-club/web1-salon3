import React from "react";
import "./TodayHotPhoto.scss";

function TodayHotPhoto() {
  return (
    <div className="TodayHotPhoto">
      <div className="titleArea">
        <h1 className="sectionTitle">오늘의 인기 사진</h1>
        <a className="moreLink">더보기</a>
      </div>
      <div className="photoArea">
        <a className="photoCard" href="#">
          <img
            className="cardImg"
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/161335354434792844.jpeg?gif=1&w=320&h=320&c=c&webp=1"
          />
          <span className="rankIcon">1</span>
          <svg
            class="multiphotoIcon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fill-rule="evenodd"
              d="M20.21 5.053h.788A3.004 3.004 0 0 1 24 8.055v12.943A3.004 3.004 0 0 1 20.998 24H8.055a3.004 3.004 0 0 1-3.002-3.002v-.787h11.165c2.199 0 3.993-1.788 3.993-3.993V5.053zM0 3.003A3.004 3.004 0 0 1 3.002 0h12.943a3.004 3.004 0 0 1 3.002 3.002v12.943a3.004 3.004 0 0 1-3.002 3.002H3.002A3.004 3.004 0 0 1 0 15.945V3.002z"
            ></path>
          </svg>
          <div className="profileArea">
            <img
              className="profileImg"
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/161312604317072772.jpeg?gif=1&w=36&h=36&c=c&webp=1"
            />
            <span className="profileName">cosy_daily</span>
          </div>
        </a>
        <a className="photoCard" href="#">
          <img
            className="cardImg"
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/161336155684961013.jpeg?gif=1&w=320&h=320&c=c&webp=1"
          />
          <span className="rankIcon">2</span>
          <svg
            class="multiphotoIcon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fill-rule="evenodd"
              d="M20.21 5.053h.788A3.004 3.004 0 0 1 24 8.055v12.943A3.004 3.004 0 0 1 20.998 24H8.055a3.004 3.004 0 0 1-3.002-3.002v-.787h11.165c2.199 0 3.993-1.788 3.993-3.993V5.053zM0 3.003A3.004 3.004 0 0 1 3.002 0h12.943a3.004 3.004 0 0 1 3.002 3.002v12.943a3.004 3.004 0 0 1-3.002 3.002H3.002A3.004 3.004 0 0 1 0 15.945V3.002z"
            ></path>
          </svg>
          <div className="profileArea">
            <img
              className="profileImg"
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/161356326129321802.jpeg?gif=1&w=36&h=36&c=c&webp=1"
            />
            <span className="profileName">Reden78</span>
          </div>
        </a>
        <a className="photoCard" href="#">
          <img
            className="cardImg"
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/161336955205573354.jpg?gif=1&w=320&h=320&c=c&webp=1"
          />
          <span className="rankIcon">3</span>
          <svg
            class="multiphotoIcon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fill-rule="evenodd"
              d="M20.21 5.053h.788A3.004 3.004 0 0 1 24 8.055v12.943A3.004 3.004 0 0 1 20.998 24H8.055a3.004 3.004 0 0 1-3.002-3.002v-.787h11.165c2.199 0 3.993-1.788 3.993-3.993V5.053zM0 3.003A3.004 3.004 0 0 1 3.002 0h12.943a3.004 3.004 0 0 1 3.002 3.002v12.943a3.004 3.004 0 0 1-3.002 3.002H3.002A3.004 3.004 0 0 1 0 15.945V3.002z"
            ></path>
          </svg>
          <div className="profileArea">
            <img
              className="profileImg"
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/1609843008_zuTa8tnHl4.jpeg?gif=1&w=36&h=36&c=c&webp=1"
            />
            <span className="profileName">Genderless</span>
          </div>
        </a>
        <a className="photoCard" href="#">
          <img
            className="cardImg"
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/161338407952705682.jpeg?gif=1&w=320&h=320&c=c&webp=1"
          />
          <svg
            class="multiphotoIcon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fill-rule="evenodd"
              d="M20.21 5.053h.788A3.004 3.004 0 0 1 24 8.055v12.943A3.004 3.004 0 0 1 20.998 24H8.055a3.004 3.004 0 0 1-3.002-3.002v-.787h11.165c2.199 0 3.993-1.788 3.993-3.993V5.053zM0 3.003A3.004 3.004 0 0 1 3.002 0h12.943a3.004 3.004 0 0 1 3.002 3.002v12.943a3.004 3.004 0 0 1-3.002 3.002H3.002A3.004 3.004 0 0 1 0 15.945V3.002z"
            ></path>
          </svg>
          <div className="profileArea">
            <img
              className="profileImg"
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/160966511110526507.jpeg?gif=1&w=36&h=36&c=c&webp=1"
            />
            <span className="profileName">Hareumhouse</span>
          </div>
        </a>
        <a className="photoCard" href="#">
          <img
            className="cardImg"
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/161334610578153826.jpeg?gif=1&w=320&h=320&c=c&webp=1"
          />
          <svg
            class="multiphotoIcon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fill-rule="evenodd"
              d="M20.21 5.053h.788A3.004 3.004 0 0 1 24 8.055v12.943A3.004 3.004 0 0 1 20.998 24H8.055a3.004 3.004 0 0 1-3.002-3.002v-.787h11.165c2.199 0 3.993-1.788 3.993-3.993V5.053zM0 3.003A3.004 3.004 0 0 1 3.002 0h12.943a3.004 3.004 0 0 1 3.002 3.002v12.943a3.004 3.004 0 0 1-3.002 3.002H3.002A3.004 3.004 0 0 1 0 15.945V3.002z"
            ></path>
          </svg>
          <div className="profileArea">
            <img
              className="profileImg"
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/160345733976486088.jpeg?gif=1&w=36&h=36&c=c&webp=1"
            />
            <span className="profileName">그래니놀라</span>
          </div>
        </a>
        <a className="photoCard" href="#">
          <img
            className="cardImg"
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/161339735192509425.jpeg?gif=1&w=640&h=640&c=c&webp=1"
          />
          <div className="profileArea">
            <img
              className="profileImg"
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/161303887805785531.jpeg?gif=1&w=72&h=72&c=c&webp=1"
            />
            <span className="profileName">uncool</span>
          </div>
        </a>
        <a className="photoCard" href="#">
          <img
            className="cardImg"
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/161337836885533776.jpeg?gif=1&w=640&h=640&c=c&webp=1"
          />
          <div className="profileArea">
            <img
              className="profileImg"
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/160835595646336389.jpeg?gif=1&w=72&h=72&c=c&webp=1"
            />
            <span className="profileName">조명이있는하얀집</span>
          </div>
        </a>
        <a className="photoCard" href="#">
          <img
            className="cardImg"
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/161338002805993550.jpeg?gif=1&w=640&h=640&c=c&webp=1"
          />
          <svg
            class="multiphotoIcon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fill-rule="evenodd"
              d="M20.21 5.053h.788A3.004 3.004 0 0 1 24 8.055v12.943A3.004 3.004 0 0 1 20.998 24H8.055a3.004 3.004 0 0 1-3.002-3.002v-.787h11.165c2.199 0 3.993-1.788 3.993-3.993V5.053zM0 3.003A3.004 3.004 0 0 1 3.002 0h12.943a3.004 3.004 0 0 1 3.002 3.002v12.943a3.004 3.004 0 0 1-3.002 3.002H3.002A3.004 3.004 0 0 1 0 15.945V3.002z"
            ></path>
          </svg>
          <div className="profileArea">
            <img
              className="profileImg"
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/160069572991323943.jpeg?gif=1&w=72&h=72&c=c&webp=1"
            />
            <span className="profileName">gamja_room</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default TodayHotPhoto;
