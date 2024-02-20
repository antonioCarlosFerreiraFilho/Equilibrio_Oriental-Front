//css
import "./Dishes.css";
//react
import {NavLink} from 'react-router-dom';

const Dishes = () => {
  return (
    <div>
      <div className="Dishes">
        <div className="Dishes_boxes">

          <div className="Dishes_box">
            <div className="Dishes_imageDishes"></div>
            <div className="Dishes_info">
              <h1>Sopas</h1>
              <p>Tigela de infinitos sabores do oriente</p>
              <NavLink>Fazer pedido</NavLink>
            </div>
          </div>
          
          <div className="Dishes_box">
            <div className="Dishes_imageDishes0"></div>
            <div className="Dishes_info">
              <h1>Lamen</h1>
              <p>Do jeito que a massa deve ser, no ponto</p>
              <NavLink>Fazer pedido</NavLink>
            </div>
          </div>

          <div className="Dishes_box">
            <div className="Dishes_imageDishes01"></div>
            <div className="Dishes_info">
              <h1>Bolinhos</h1>
              <p>O segredo está no recheio, E na massa</p>
              <NavLink>Fazer pedido</NavLink>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dishes;
