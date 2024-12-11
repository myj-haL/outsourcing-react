import style from "./index.module.css";
import Message from "images/common/icon-message-white.svg";

function ContactFormSection () {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <h2 className={style.title}>문의하기</h2>

        <form action="" className={style.input_form}>
          <span>* 필수입력</span>
          <ul className={style.input_list}>
            <li className={style.input_item}>
              <span className={style.category}>연락처</span>
              <div className={style.write_box}>
                <input type="text" name="" id="" className={style.basic_input} placeholder="연락처를 입력해주세요." />
              </div>
            </li>
            <li className={style.input_item}>
              <span className={style.category}>이름</span>
              <div className={style.write_box}>
                <input type="text" name="" id="" className={style.basic_input} placeholder="이름을 입력해주세요." />
              </div>
            </li>
            <li className={style.input_item}>
              <span className={style.category}>이메일 주소</span>
              <div className={style.write_box}>
                <input type="text" name="" id="" className={style.basic_input} placeholder="이메일을 입력해주세요." />
              </div>
            </li>
            <li className={style.input_item}>
              <span className={style.category}>휴대폰</span>
              <div className={style.write_box}>
                <select name="" id="">
                  <option value="" checked>한국(+82)</option>
                  <option value="" checked>기타</option>
                </select>
                <input type="text" name="" id="" className={style.basic_input} placeholder="(-)를 제외한 숫자만 입력해주세요." />
              </div>
            </li>
            <li className={style.input_item}>
              <span className={style.category}>제목</span>
              <div className={style.write_box}>
                <input type="text" name="" id="" className={style.basic_input} placeholder="제목을 입력해주세요." />
              </div>
            </li>
            <li className={style.input_item}>
              <span className={style.category}>내용</span>
              <div className={style.write_box}>
                <textarea name="" id="" placeholder="내용을 입력해주세요." className={style.text_area}></textarea>
              </div>
            </li>
          </ul>

          {/* TODO : 약관 동의 */}
          <div className={style.agree_form}>
            <div className={style.label_item}>
              <label htmlFor="check1">
                <input type="checkbox" name="check1" id="check1" className={style.custom_check} />
                <div name="check1" id="" className={style.custom_check} />
                개인정보 수집 및 이용에 동의합니다 <span>(필수)</span>
              </label>
              <button type="button" className={style.detail_agree}>전문보기</button>
            </div>
            <div className={style.label_item}>
              <label htmlFor="check2">
                <input type="checkbox" name="check2" id="check2" className={style.custom_check} />
                <div name="check1" id="" className={style.custom_check} />
                개인정보 제3자 제공에 동의합니다 <span>(필수)</span>
              </label>
              <button type="button" className={style.detail_agree}>전문보기</button>
            </div>

            <button type="button" className={style.contact_btn}>
              <img alt="메시지" src={Message} />
              문의하기
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default ContactFormSection;