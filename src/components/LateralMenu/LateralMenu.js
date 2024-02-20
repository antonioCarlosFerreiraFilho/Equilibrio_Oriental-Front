//css
import "./LateralMenu.css";
//react
import { useEffect, useState } from "react";
//react router dom
import { useParams, useNavigate, NavLink } from "react-router-dom";
//hooks
import { useAuth } from "../../hooks/useAuth";
//slices
import { logout, reset } from "../../slices/authSlice";
//redux
import { useDispatch, useSelector } from "react-redux";

const LateralMenu = () => {
  //verify auth
  const { auth } = useAuth();

  //redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //logout User
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/login");
  };

  function ClickUser() {
    const Menu = document.querySelector(".LateralMenu");
    const Line = document.querySelector(".Line");

    if (Menu.classList.contains("LateralMenu")) {
      Line.classList.toggle("active");
      Menu.classList.toggle("LateralMenuJS");
    }
  }

  return (
    <div>
      <div>
        <div className="LateralMenu" onClick={ClickUser}>
          <div className="LateralMenu_user-name_user-image">
            <div className="LateralMenu_user-image"></div>
            <p>Rato.infra</p>
          </div>
          <div className="LateralMenu_boxContent">
            <div className="LateralMenu_Content-Links">
              <NavLink to="/menu" className="LateralMenu_Link">
                Cardapio Delivery
              </NavLink>
              <NavLink to="/" className="LateralMenu_Link">
                Início
              </NavLink>
              {!auth && (
                <>
                  <NavLink to="/login" className="LateralMenu_Link">
                    Login
                  </NavLink>
                </>
              )}
              <NavLink className="LateralMenu_Link">Contato</NavLink>
              {auth && (
                <>
                  <NavLink className="LateralMenu_Link" onClick={handleLogout}>
                    Sair
                  </NavLink>
                </>
              )}
            </div>
            <div>
              <div className="LateralMenu_boxButtons">
                <NavLink className="LateralMenu_Button_link">
                  Fazer Pedido
                </NavLink>
              </div>
              <div className="LateralMenu_boxButtons">
                <NavLink className="LateralMenu_Button_link_reservations">
                  Reservas
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LateralMenu;
