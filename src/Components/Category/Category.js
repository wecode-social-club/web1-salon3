import React from "react";
import "./Category.scss";

function Category() {
  return (
    <div className="Category">
      <div>
        <div className="Main-title">
          <a className="title1" aria-label="오늘의 집" href="https://ohou.se/">
            오늘의 집
          </a>
          <a className="title2" aria-label="커뮤니티" href="https://ohou.se/">
            커뮤니티
          </a>
          <a
            className="title3"
            aria-label="스토어"
            href="https://ohou.se/store"
          >
            스토어
          </a>
          <a
            className="title4"
            aria-label="인테리어 시공"
            href="https://ohou.se/experts"
          >
            인테리어 시공
          </a>
        </div>
        <div className="sub-title">
          <button className="home"> 홈 </button>
          <a>집들이</a>
          <a>노하우</a>
          <a>전문가집들이</a>
          <a>셀프가이드</a>
          <a>질문과답변</a>
          <a>이벤트</a>
        </div>
      </div>
    </div>
  );
}

export default Category;
