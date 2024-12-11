import style from "./index.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import SampleImg from "images/sample/sample-banner.png";
import { useState } from "react";
import Play from "images/common/icon-play.svg";

function Banner () {
  const [swiper, setSwiper] = useState(null);  // Swiper 인스턴스 상태 관리
  const [isAutoplaying, setIsAutoplaying] = useState(true);

  const toggleAutoplay = () => {
    if (swiper !== null) {
      if (isAutoplaying) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.start();
      }
      setIsAutoplaying(!isAutoplaying);
    }
  };

  return (
    <div className={style.container}>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
          el:".swiper-pagination",
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className={style.banner_swipe}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        navigation={true}
        // loop={true}
      >
        <SwiperSlide>
          <img alt="" src={SampleImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={SampleImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={SampleImg} />
        </SwiperSlide>
      </Swiper>

      <div className={style.paging_box}>
        <div className="swiper-pagination"></div>

        <button onClick={toggleAutoplay} type="button" className={style.play_control}>
          {isAutoplaying ? <img src={Play} alt="정지" /> : <img src={Play} alt="재생" />}
        </button>
      </div>
      
    </div>
  )
}

export default Banner;