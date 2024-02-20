import "./RecipeFindMore.css";
//react icons
import { FaCartPlus } from "react-icons/fa6";
//react
import { NavLink } from "react-router-dom";

const RecipeFindMore = () => {
  return (
    <div>
      <div className="Article">
        <div className="Article_box-content">
          <div className="Article_content-info">
            <div className="Article_box-image">
              <img src="/Revenues/harumaki.jpg" alt="" />
            </div>

            <div className="Article_boxTitle">
              <h1>Lamen Boca de Sapo</h1>
              <div className="Article_box-contentCategory">
                <p>
                  Categoria: <strong>Lamen</strong>{" "}
                </p>
              </div>
            </div>
            <div className="Article_boxGeneral-Ingredients">
              <h1>Ingredientes (1 porção)</h1>
              <div className="Article_box-Ingredients">
                <p>400 g de lombo de porco</p>
                <p>1 cebola média</p>
                <p>3 dentes de alho</p>
                <p>1 pedaço bem pequeno de gengibre</p>
                <p>óleo de gergelim para refogar</p>
                <p>250 g de carne de porco moída</p>
                <p>100 ml de shoyu</p>
                <p>cebolinha picada</p>
              </div>
            </div>
            <div className="Article_priceBox">
              <h1>25.00 $</h1>
              <div>
                <NavLink className="Article_contentLink">
                  <div className="Article_kindness-box">
                    <FaCartPlus className="Re_new-iconkindness" />
                    <p>Adicionar ao carinho</p>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeFindMore;
