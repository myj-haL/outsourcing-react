import style from "./index.module.css";
import QnaSection from "./QnaSection";
import Layouts from "../../common/components/Layouts";
import ContactFormSection from "./ContactFormSection";

function Contact () {
  return (
    <Layouts>
      <div className={style.container}>
        <QnaSection />
        <ContactFormSection />
      </div>
    </Layouts>
  )
}

export default Contact;