//css
import "./Banner.css";
//react 
import {NavLink} from 'react-router-dom';

const Banner = () => {
  return (
    <div>
      <div className="Banner">
        <div className="Banner_container">
          <div className="Banner_boxPromotion">
            <h1>O verdadeiro Sabor Oriental</h1>
            <p>Aqui Servimos a autêntica comida Oriental.</p>
            <NavLink>Fazer Pedido</NavLink>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
