//Css
import "./BannerDishes.css";
//react 
import {NavLink} from 'react-router-dom';

const BannerDishes = () => {
  return (
    <div>
      <div className="BannerDishes">
        <div className="BannerDishes_box-content">
          <div className="BannerDishes_box-shadow">
            <div className="BannerDishes-promotions">
              <h1>Terça Gastronômica</h1>
              <p>
                Ofertas especiais a partir de Terça-feira, Entradas variadas,
                sushis, sashimis e sobremesa com <strong>reposição</strong> +
                bebida
              </p>
              <div className="BannerDishes-boxButton">
                <NavLink>Saiba Mais</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDishes;
