//css
import "./BasketItens.css";
//react
import { NavLink } from "react-router-dom";

const BasketItens = () => {
  return (
    <div>
      <div>
        <div className="BasketItens">
          {/*CESTO VAZIO
        <div className="BasketItens_empty">
          <h1>Cesto</h1>
          <div className="BasketItens_content">
            <div className="BasketItens_box">
              <h1>O teu cesto está <strong>vazio</strong></h1>
              <div className="BasketItens_slogan">
                <p>Precisas de inspiração ?</p>
              </div>
              <div  className="BasketItens_sloganImage">

              </div>
              <div className="BasketItens_boxButton">
                <NavLink to="/menu">Obter Ideias</NavLink>
              </div>
            </div>
          </div>
        </div>
        */}

          {/*CESTO*/}
          <div className="BasketItens_empty">
            <h1>Cesto</h1>
            <div className="BasketItens_empty_itensAdd">

              <div className="BasketItens_content">
                <div className="BasketItens_ContentIten">
                  <div className="BasketItens_product">
                    <div className="BasketItens_productBox-image">
                      <img src="/dishes/lamen_00.png" alt="" />
                    </div>
                    <div className="BasketItens_product-name">
                      <h1>Lamen boca de sapo</h1>
                      <div className="BasketItens_product-category">
                        <p>
                          Categoria: <strong>Lamen</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="BasketItens_product-operations">
                    <div className="BasketItens_product-boxButton">
                      <button>Remover</button>
                    </div>
                    <div className="BasketItens_product-tot">
                      <p>27.99 $</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="BasketItens_content">
                <div className="BasketItens_ContentIten">
                  <div className="BasketItens_product">
                    <div className="BasketItens_productBox-image">
                      <img src="/dishes/lamen_00.png" alt="" />
                    </div>
                    <div className="BasketItens_product-name">
                      <h1>Lamen boca de sapo</h1>
                      <div className="BasketItens_product-category">
                        <p>
                          Categoria: <strong>Lamen</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="BasketItens_product-operations">
                    <div className="BasketItens_product-boxButton">
                      <button>Remover</button>
                    </div>
                    <div className="BasketItens_product-tot">
                      <p>27.99 $</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="BasketItens_content">
                <div className="BasketItens_ContentIten">
                  <div className="BasketItens_product">
                    <div className="BasketItens_productBox-image">
                      <img src="/dishes/lamen_00.png" alt="" />
                    </div>
                    <div className="BasketItens_product-name">
                      <h1>Lamen boca de sapo</h1>
                      <div className="BasketItens_product-category">
                        <p>
                          Categoria: <strong>Lamen</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="BasketItens_product-operations">
                    <div className="BasketItens_product-boxButton">
                      <button>Remover</button>
                    </div>
                    <div className="BasketItens_product-tot">
                      <p>27.99 $</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="BasketItens_content">
                <div className="BasketItens_ContentIten">
                  <div className="BasketItens_product">
                    <div className="BasketItens_productBox-image">
                      <img src="/dishes/lamen_00.png" alt="" />
                    </div>
                    <div className="BasketItens_product-name">
                      <h1>Lamen boca de sapo</h1>
                      <div className="BasketItens_product-category">
                        <p>
                          Categoria: <strong>Lamen</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="BasketItens_product-operations">
                    <div className="BasketItens_product-boxButton">
                      <button>Remover</button>
                    </div>
                    <div className="BasketItens_product-tot">
                      <p>27.99 $</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="BasketItens_content">
                <div className="BasketItens_ContentIten">
                  <div className="BasketItens_product">
                    <div className="BasketItens_productBox-image">
                      <img src="/dishes/lamen_00.png" alt="" />
                    </div>
                    <div className="BasketItens_product-name">
                      <h1>Lamen boca de sapo</h1>
                      <div className="BasketItens_product-category">
                        <p>
                          Categoria: <strong>Lamen</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="BasketItens_product-operations">
                    <div className="BasketItens_product-boxButton">
                      <button>Remover</button>
                    </div>
                    <div className="BasketItens_product-tot">
                      <p>27.99 $</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="BasketItens_content">
                <div className="BasketItens_ContentIten">
                  <div className="BasketItens_product">
                    <div className="BasketItens_productBox-image">
                      <img src="/dishes/lamen_00.png" alt="" />
                    </div>
                    <div className="BasketItens_product-name">
                      <h1>Lamen boca de sapo</h1>
                      <div className="BasketItens_product-category">
                        <p>
                          Categoria: <strong>Lamen</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="BasketItens_product-operations">
                    <div className="BasketItens_product-boxButton">
                      <button>Remover</button>
                    </div>
                    <div className="BasketItens_product-tot">
                      <p>27.99 $</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="BasketItens_content">
                <div className="BasketItens_ContentIten">
                  <div className="BasketItens_product">
                    <div className="BasketItens_productBox-image">
                      <img src="/dishes/lamen_00.png" alt="" />
                    </div>
                    <div className="BasketItens_product-name">
                      <h1>Lamen boca de sapo</h1>
                      <div className="BasketItens_product-category">
                        <p>
                          Categoria: <strong>Lamen</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="BasketItens_product-operations">
                    <div className="BasketItens_product-boxButton">
                      <button>Remover</button>
                    </div>
                    <div className="BasketItens_product-tot">
                      <p>27.99 $</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItens;
