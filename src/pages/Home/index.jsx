import style from "./index.module.css";
import Layouts from "../../common/components/Layouts";
import BannerSection from "./BannerSection";
import IntroduceSection from "./IntroduceSection";
import ServiceSection from "./ServiceSection";

function Home () {
  return (
    <Layouts>
      <div className={style.container}>
        <BannerSection />
        <IntroduceSection />
        <ServiceSection />
      </div>
    </Layouts>
  )
}

export default Home;