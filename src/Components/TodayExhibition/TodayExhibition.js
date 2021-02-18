import React from "react";
import "./TodayExhibition.scss";

function TodayExhibition() {
  return (
    <div className="TodayExhibition">
      <div className="title-area">
        <div className="title"> 오늘의 기획전 </div>
      </div>
      {/* 1번 콘텐츠 */}
      <div className="container">
        <div className="content-wrap">
          <div className="card-wrap">
            <div className="card">
              <img
                className="content-image"
                src="https://image.ohou.se/i/bucketplace-v2-development/uploads/exhibitions/cover_image/161338595800427639.jpg?gif=1&w=1280&h=854&c=c&webp=1"
              />
            </div>
          </div>
          <div className="content-area">
            <div className="sub-content">
              이사 시즌엔 오늘의집! 1만개 상품 초특가 세일중
            </div>
            <div className="main-content">
              [오다페] 천만 회원의 축제! 오늘의집 다꾸며 페스티벌
            </div>
          </div>
        </div>

        {/* 2번 콘텐츠 */}
        <div className="content-wrap">
          <div className="card-wrap">
            <div className="card">
              <img
                className="content-image"
                src="https://image.ohou.se/i/bucketplace-v2-development/uploads/exhibitions/cover_image/161347344315597628.png?gif=1&w=850&h=567&c=c&webp=1"
              />
            </div>
          </div>
          <div className="content-area">
            <div className="sub-content">최대 20만원 쿠폰 할인 찬스!</div>
            <div className="main-content">
              [전품목 특가] 삼성전자 비스포크 페스티벌 ~48%
            </div>
          </div>
        </div>

        {/* 3번 콘텐츠 */}
        <div className="content-wrap">
          <div className="card-wrap">
            <div className="card">
              <img
                className="content-image"
                src="https://image.ohou.se/i/bucketplace-v2-development/uploads/exhibitions/cover_image/161354319467998047.jpg?gif=1&w=640&h=427&c=c&webp=1"
              />
            </div>
          </div>
          <div className="content-area">
            <div className="sub-content">내 예산 안에서 PICK!</div>
            <div className="main-content">가격대별 인기소파 동시세일 ~75%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayExhibition;
