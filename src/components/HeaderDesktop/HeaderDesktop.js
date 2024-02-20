//CSS
import "./HeaderDesktop.css";
//react icons
import { LiaShoppingBasketSolid } from "react-icons/lia";
//react
import { NavLink } from "react-router-dom";

const HeaderDesktop = () => {
  return (
    <div>
      <div>
        <div className="HeaderDesktop_content-boxes">
          <div className="HeaderDesktop_links">
            <NavLink to="/login">Logar</NavLink>
          </div>
          <div className="HeaderDesktop_link">
            <NavLink to="/menu">Fazer Pedido</NavLink>
          </div>
          <div className="HeaderDesktop_content-linkCar">
            <NavLink to="/Kindness" className="HeaderDesktop_linkCar">
              <div className="HeaderDesktop_content-itensNumber">
                <p>0</p>
              </div>
              <LiaShoppingBasketSolid className="HeaderDesktop_IconCar" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
