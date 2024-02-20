//css
import "./Drivethru.css";
//react
import { NavLink } from "react-router-dom";

const Drivethru = () => {
  return (
    <div>
      <div className="DriveThru">
        <div className="DriveThru_info">
          <div className="DriveThru_image"></div>
          <div className="DriveThru_content">
            <p>Faça seu pedido</p>
            <h1>Nosso noodles está a caminho</h1>
            <NavLink>Fazer pedido</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drivethru;
