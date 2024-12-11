import style from "./index.module.css";

function Popup () {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.contents}>
          <p>내용이 들어가야 합니다.</p>
        </div>

        <div className={style.btns}>
          <button className={style.back} type="button">취소</button>
          <button className={style.check} type="button">확인</button>
        </div>
      </div>

    </div>
  )
} 
 
export default Popup;