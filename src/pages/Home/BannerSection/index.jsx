import style from "./index.module.css";
import Star from "images/common/icon-star.svg";
import Message from "images/common/icon-message.svg";
import Banner from "./Banner";

function BannerSection () {
  return (
    <div className={style.container}>
      <h2 className={style.title}>사용하시는 업무 시스템에<br />AI를 쉽고 빠르게 적용할 수 있어요.</h2>
      <div className={style.btn_box}>
        <button type="button" className={style.contact}>
          <img alt="메시지" src={Message} />
          문의하기
        </button>
        <button type="button" className={style.star}>
          <img alt="별" src={Star} />
          서비스 체험 바로가기
        </button>
      </div>

      <div className={style.banner}>
        <Banner />
      </div>
    </div>
  )
}

export default BannerSection;