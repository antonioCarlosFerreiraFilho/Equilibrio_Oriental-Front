//css
import "./FormUser.css";
//react
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//components
import MessageError from "../MessageError/MessageError";
//Slices
import { register, login, reset } from "../../slices/authSlice";

const FormUser = () => {
  //initial State Register
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //initial State login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //redux
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  //register User
  const SubmitRegister = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    dispatch(register(user));

    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setTimeout(()=> {

      dispatch(reset());
    }, 4000);
  };

  //login User
  const SubmitLogin = (e) => {
    e.preventDefault();

    const user = {
      email: loginEmail,
      password: loginPassword,
    };

    dispatch(login(user));

    setTimeout(()=> {

      dispatch(reset());
    }, 4000);
  };

  //reset
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  //Scrool form login
  function RegisterForm() {
    const FormLogin = document.querySelector(".FormUser_box-LoginForm");
    const FormRegister = document.querySelector(".FormUser_box-RegisterForm");

    if (FormLogin.classList.contains("FormUser_box-LoginForm")) {
      FormLogin.classList.toggle("FormUser_box-LoginFormJS");

      FormRegister.classList.toggle("FormUser_box-RegisterFormJS");
    }
  }

  return (
    <div>
      <div className="FormUser">
        <div className="FormUser_box-content">
          <div className="FormUser_box-Form">
            <div className="FormUser_box-FormShadow">
              <div className="FormUser_box-RegisterForm">
                <div className="FormUser_box-title">
                  <h1>
                    Cadastre-se e receba <strong>ofertas</strong> excluzivas por
                    email
                  </h1>
                </div>
                <form className="FormUser_Form" onSubmit={SubmitRegister}>
                  <input
                    type="text"
                    className="FormUser_Form-inputTXT"
                    placeholder="Nome de usuario"
                    onChange={(e) => setName(e.target.value)}
                    value={name || ""}
                  />
                  <input
                    type="text"
                    className="FormUser_Form-inputTXT"
                    placeholder="Endereço de Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email || ""}
                  />
                  <input
                    type="text"
                    className="FormUser_Form-inputTXT"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password || ""}
                  />
                  <input
                    type="text"
                    className="FormUser_Form-inputTXT"
                    placeholder="Confirme sua senha"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword || ""}
                  />
                  <div className="FormUser_Form-boxSubmit">
                    {!loading && (
                      <input
                        className="FormUser_Form-Submit"
                        type="submit"
                        value="cadastrar"
                      />
                    )}
                    {loading && (
                      <input
                        className="FormUser_Form-Submit"
                        type="submit"
                        value="Aguarde...."
                        disabled
                      />
                    )}
                  </div>
                </form>
                <div className="FormUser_Form-redirect">
                  <p>Ja Tens conta ?</p>
                  <NavLink onClick={RegisterForm}>Logar</NavLink>
                </div>
              </div>

              <div className="FormUser_box-LoginForm">
                <div className="FormUser_box-title LogForm">
                  <h1>
                    Confira as <strong>Promoções</strong> deste mes, sem{" "}
                    <strong>Taxa</strong> de entrega.
                  </h1>
                </div>
                <form className="FormUser_Form" onSubmit={SubmitLogin}>
                  <input
                    type="text"
                    className="FormUser_Form-inputTXTLogin "
                    placeholder="Endereço de Email"
                    onChange={(e) => setLoginEmail(e.target.value)}
                    value={loginEmail || ""}
                  />
                  <input
                    type="text"
                    className="FormUser_Form-inputTXTLogin "
                    placeholder="Senha"
                    onChange={(e) => setLoginPassword(e.target.value)}
                    value={loginPassword || ""}
                  />
                  <div className="FormUser_Form-boxSubmit">
                    {!loading && (
                      <input
                        className="FormUser_Form-Submit"
                        type="submit"
                        value="Logar"
                      />
                    )}
                    {loading && (
                      <input
                        className="FormUser_Form-Submit"
                        type="submit"
                        value="Aguarde...."
                        disabled
                      />
                    )}
                  </div>
                </form>
                <div className="FormUser_Form-redirect RegisterRed">
                  <p>Ainda não Tens conta ?</p>
                  <NavLink onClick={RegisterForm}>Cadastrar</NavLink>
                </div>
              </div>
            </div>
            <div>
            {error && <MessageError msg={error} type="error" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormUser;
