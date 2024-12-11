import MobileHeader from "./MobileHeader";
import PcHeader from "./PcHeader";
import { useCalWindowWidth } from "common/hooks";

function Header () {
  const windowWidth = useCalWindowWidth();

  return (
    <>
      {windowWidth > 992 ? <PcHeader /> : <MobileHeader />}
    </>
  )
}

export default Header;