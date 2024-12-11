import style from "./index.module.css";
import Enter from "images/common/icon-sent.svg";
import Star from "images/common/icon-star.svg";

function QnaSection () {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <h2 className={style.title}>질문을 해보세요.</h2>
        <p className={style.sub_title}>
          가상의 자동차 회사의 업무내용을 학습한 AI 가 있습니다. <br />
          BIZAI는 질문자를 판매 담당자 또는 서비스 담당자로 알고 있습니다. 직접 대화를 해보세요.
        </p>

        <form action="" className={style.contact_form}>
          {/* TODO : 대화 내용이 들어갑니다. */}
          <div className={style.contact_body}>
            <div className={style.message_box_left}>
              <span className={style.name}>상대방</span>
              <div className={style.left_message}>상대방 말풍선</div>
              <p className={style.date}>오후 11:11</p>
            </div>
            
            <div className={style.message_box_right}>
              <span className={style.name}>본인</span>
              <div className={style.right_message}>본인 말풍선</div>
              <p className={style.date}>오후 11:11</p>
            </div>
          </div>

          <div className={style.input_form}>
            <input type="text" name="" id="" className={style.user_input} placeholder="메시지 BIZAI" />
            <button type="button" className={style.sent}>
              <img alt="보내기" src={Enter} />
            </button>
          </div>
        </form>

        <button type="button" className={style.more}>
          <img alt="별" src={Star} />
          BIZAI를 더 알아보시겠어요?
        </button>
      </div>
    </div>
  )
}

export default QnaSection;