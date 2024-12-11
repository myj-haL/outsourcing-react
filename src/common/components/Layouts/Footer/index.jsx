import style from "./index.module.css";
import Logo from "images/common/logo.svg";

function Footer () {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <img alt="로고" src={Logo} />

        <ul className={style.info_list}>
          <li>서울 모빌리티 주식회사</li>
          <li>서울특별시 마포구 월드컵로8길 45-8 양성빌딩 3층</li>
          <li>사업자등록번호 852-81-02072</li>
          <li>통신판매업 신고번호 : 2021-서울마포-1866 </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;