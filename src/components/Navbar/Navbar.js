//css
import "./Navbar.css";
//react icons
import { FiMenu } from "react-icons/fi";
//components
import LateralMenu from "../LateralMenu/LateralMenu";
import Deliveries from "../Deliveries/Deliveries";
import HeaderDesktop from "../HeaderDesktop/HeaderDesktop";
//react
import { NavLink } from "react-router-dom";

const Navbar = () => {
  function OpenOrCloseMenu() {
    const Menu = document.querySelector(".LateralMenu");
    const Line = document.querySelector(".Line");

    if (Menu.classList.contains("LateralMenu")) {
      Line.classList.toggle("active");
      Menu.classList.toggle("LateralMenuJS");
    }
  }

  return (
    <div className="Navbar_content-infos">
      <div className="Section_promotions">
        <Deliveries />
      </div>
      <div className="Navbar">
        <div className="Navbar_content">
          <NavLink to="/">
            <div className="Navbar_box-logo"></div>
            <div className="Navbar_box-brand">
              <p>Equilíbrio</p>
              <p>Oriental</p>
            </div>
          </NavLink>
        </div>
        <div className="Navbar_box-menu">
          <div className="Navbar_boxesHamburger" onClick={OpenOrCloseMenu}>
            <span className="Line"></span>
          </div>
        </div>
        <div className="Navbar_box-menuDeskTop">
          <HeaderDesktop />
        </div>
      </div>
      <div>
        <LateralMenu />
      </div>
    </div>
  );
};

export default Navbar;
