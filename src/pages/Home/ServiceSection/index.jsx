import style from "./index.module.css";
import { useCalWindowWidth } from "common/hooks";
import { bannerList, bannerMList } from "./banner";

function ServiceSection () {
  const windowWidth = useCalWindowWidth();

  return (
    <div className={style.container}>
      <h2 className={style.title}>
        다양한 AI 서비스를 만나보세요.
      </h2>

      <ul className={style.service_list}>
        {windowWidth > 992 ?
          <>
            {bannerList.map(item => (
              <li key={item.id}>
                <a href={item.link}>
                  <img src={item.img} alt="서비스 이미지" />
                </a>
              </li>
            ))}
          </>
        : 
          <>
            {bannerMList.map(item => (
              <li key={item.id}>
                <a href={item.link}>
                  <img src={item.img} alt="서비스 이미지" />
                </a>
              </li>
            ))}
          </>
        }
      </ul>
    </div>
  )
}

export default ServiceSection;