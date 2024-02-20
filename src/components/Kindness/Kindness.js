import "./Kindness.css";
//react icons
import { LiaShoppingBasketSolid } from "react-icons/lia";
//react
import { NavLink } from "react-router-dom";

const Kindness = () => {
  return (
    <div>
      <div className="Kindness">

        <div>
          <NavLink to="/kindness" className="Kindness_linkCar">
            <div className="Kindness_content-itensNumber">
              <p>0</p>
            </div>
            <div className="Kindness_carIcon">

            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Kindness;
