import style from "./index.module.css";
import Gpt from "images/common/icon-gpt.svg";
import SampleImg from "images/sample/sample-img.png";
import ThinArrow from "images/common/icon-right-arrow-thin.svg";

function IntroduceSection () {
  return (
    <div className={style.container}>
      <h2 className={style.title}>
        <img alt="gpt" src={Gpt} />
        ChatGPT 를 활용하는 BIZAI에요. <br />
        지금 사용중인 시스템에 연결해보세요.
      </h2>

      <div className={style.intro_box}>
        <img alt="소개 이미지" src={SampleImg} />
        <div className={style.right}>
          <h3 className={style.intro_title}>
            더 적은 비용으로도<br />
            더 빠르고 정확한 업무처리<br />
            더 많은 비즈니스 기회가 가능해집니다.
          </h3>

          <b>BIZAI - Customer</b>

          <p>기존 시스템의 데이터를 기반으로 조회하고자 하는 내용을<br/> 기능개발 없이 바로 확인 가능해요</p>
          <a href="#!" className={style.intro_link}>
            지금 해보세요
            <img alt="화살표" src={ThinArrow} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default IntroduceSection;