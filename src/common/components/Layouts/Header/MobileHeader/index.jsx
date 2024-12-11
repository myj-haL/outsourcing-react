import style from "./index.module.css";
import Logo from "images/common/logo.svg";
import Hamburger from "images/common/icon-hamburger.svg";
import Close from "images/common/icon-close.svg";
import RightArrow from "images/common/icon-right-arrow.svg";
import Global from "images/common/icon-global.svg";
import BoldArrow from "images/common/icon-bold-arrow.svg";
import { menuList } from "../menu";
import { useEffect, useState } from "react";

function MobileHeader () {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLang, setIsOpenLang] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    if(window.scrollY > 0){
      setScroll(true);
    }else{
      setScroll(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleOpenLang = () => {
    setIsOpenLang(!isOpenLang);
  }

  return (
    <div className={`${style.container} ${scroll > 0 ? style.bg : ""}`}>
      <div className={style.inner}>
        <img src={Logo} alt="로고" />
        <button type="button" className={style.hamburger} onClick={handleOpen}>
          <img alt="햄버거 버튼" src={Hamburger} />
        </button>
      </div>

      <div className={`${style.lnb_container} ${isOpen ? style.open : ""}`}>
        <div className={style.top}>
          <img src={Logo} alt="로고" />
          <button type="button" className={style.close} onClick={handleOpen}>
            <img alt="닫기" src={Close} />
          </button>
        </div>
        <div className={style.contents}>
          {menuList.map(item => (
            <a key={item.id} href={item.link} className={style.menu_items}>
              {item.name}
              <img alt="화살표" src={RightArrow} />
            </a>
          ))}
        </div>
        {/* TODO : 언어 선택 */}
        <div className={style.foot}>
          <button type="button" className={style.language} onClick={handleOpenLang}>
            <img alt="언어" src={Global} className={style.global} />
            {/* TODO : 선택한 언어의 약자가 출력되어야 함. */}
            KR
            <img alt="펼치기" src={BoldArrow} className={style.open_lang} />

            <div className={`${style.lang_box} ${isOpenLang ? style.open : ""}`}>
              {/* TODO : 선택한 언어에 클래스 active 추가 */}
              <span className={style.active}>KR</span>
              <span>EN</span>
            </div>
          </button>
          
        </div>
      </div>
    </div> 
  )
}

export default MobileHeader;