import "./Reservation.css";
//react icons
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { LuUsers2 } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";

//react
import { useEffect } from "react";

const Reservation = () => {
  useEffect(() => {
    const TimeInputRadio = setTimeout(() => {
      closeSelect();
      TimeSelect();
    }, 1000);

    return () => clearTimeout(TimeInputRadio);
  }, []);

  function checkPeople() {
    const SelectOpenClose = document.querySelector(".Reservation_options");

    if (SelectOpenClose.classList.contains("Reservation_options")) {
      SelectOpenClose.classList.toggle("Reservation_optionsJS");
    }
  }

  function checkTime() {
    const SelectOpenClose = document.querySelector(".Reservation_options-Time");

    if (SelectOpenClose.classList.contains("Reservation_options-Time")) {
      SelectOpenClose.classList.toggle("Reservation_options-TimeJS");
    }
  }

  const closeSelect = () => {
    const inputsOptions = document.querySelectorAll(
      ".Reservation_option input"
    );
    const selectValue = document.getElementById("Reservation_select-value");
    const dataValue = document.querySelectorAll("[data-label]");

    inputsOptions.forEach((Element) => {
      Element.addEventListener("click", () => {
        selectValue.textContent = Element.value;
      });
    });
  };

  const TimeSelect = () => {
    const inputsOptions = document.querySelectorAll(
      ".Reservation_option-Time input"
    );
    const selectValue = document.getElementById(
      "Reservation_select-value-Time"
    );

    inputsOptions.forEach((Element) => {
      Element.addEventListener("click", () => {
        selectValue.textContent = Element.value;
      });
    });
  };

  return (
    <div>
      <div className="Reservation">
        <div className="Reservation_box">
          <div className="Reservation_content-title">
            <h1>Reserve uma mesa</h1>
          </div>
          <div className="Reservation_boxForm">
            <form className="Reservation_form">
              {/* People */}
              <div className="Res_Inputs-box">
                <div id="category-select" onClick={checkPeople}>
                  <label
                    className="Reservation_LabelChek"
                    htmlFor="options-view-button"
                  >
                    Pessouas
                  </label>
                  <input
                    type="checkbox"
                    id="options-view-button"
                    className="Reservation_options-view-button"
                  />

                  <div id="Reservation_select-button">
                    <div id="Reservation_select-value">Numero de Reservas</div>
                    <div id="Reservation_chevrons">
                      <IoIosArrowDown className="Reservation_arrowDown" />

                      <IoIosArrowUp className="Reservation_arrowUp" />
                    </div>
                  </div>
                </div>
                <div className="Reservation_content-options">
                  <ul className="Reservation_options" onClick={closeSelect}>
                    <li className="Reservation_option">
                      <input
                        type="radio"
                        name="category"
                        value="1ª cadeira"
                        data-label="1ª cadeira"
                      />
                      <AiOutlineUser className="Reservation_icon-user" />
                      <span className="Reservation_people">1ª cadeira</span>
                      <FaCheck className="Reservation_iconCheck" />
                    </li>
                    <li className="Reservation_option">
                      <input
                        type="radio"
                        name="category"
                        value="2ª cadeiras"
                        data-label="2ª cadeira"
                      />
                      <LuUsers2 className="Reservation_icon-user" />
                      <span className="Reservation_people">2ª cadeiras</span>
                      <FaCheck className="Reservation_iconCheck" />
                    </li>
                    <li className="Reservation_option">
                      <input
                        type="radio"
                        name="category"
                        value="3ª cadeiras"
                        data-label="3ª cadeira"
                      />
                      <LuUsers2 className="Reservation_icon-user" />
                      <span className="Reservation_people">3ª cadeiras</span>
                      <FaCheck className="Reservation_iconCheck" />
                    </li>
                    <li className="Reservation_option">
                      <input
                        type="radio"
                        name="category"
                        value="4ª cadeiras"
                        data-label="4ª cadeira"
                      />
                      <LuUsers2 className="Reservation_icon-user" />
                      <span className="Reservation_people">4ª cadeiras</span>
                      <FaCheck className="Reservation_iconCheck" />
                    </li>
                  </ul>
                </div>
              </div>
              {/* Phone */}
              <div className="Reservation_inputPhone Res_Inputs-box">
                <div className="Reservation_content-inputs">
                  <label className="Reservation_labelPhone" htmlFor="">
                    Numero Telemovel
                  </label>
                  <input
                    type="text"
                    className="Reservation_inputPhone"
                    placeholder="xxx-xxx"
                  />
                </div>
              </div>
              {/* Name */}
              <div className="Reservation_inputPhone Res_Inputs-box">
                <div className="Reservation_content-inputs">
                  <label className="Reservation_labelPhone" htmlFor="">
                    Nome da Reserva
                  </label>
                  <input
                    type="text"
                    className="Reservation_inputPhone"
                    placeholder="Nome completo"
                  />
                </div>
              </div>
              {/* time */}
              <div className="Res_Inputs-box">
                <div id="category-select" onClick={checkTime}>
                  <label
                    className="Reservation_LabelChek"
                    htmlFor="options-view-button"
                  >
                    Selecione um Horário
                  </label>
                  <input
                    type="checkbox"
                    id="options-view-button"
                    className="Reservation_options-view-button"
                  />

                  <div id="Reservation_select-button">
                    <div id="Reservation_select-value-Time">Horário</div>
                    <div id="Reservation_chevrons">
                      <IoIosArrowDown className="Reservation_arrowDown" />

                      <IoIosArrowUp className="Reservation_arrowUp" />
                    </div>
                  </div>
                </div>
                <div className="Reservation_content-options">
                  <ul className="Reservation_options-Time" onClick={TimeSelect}>
                    <li className="Reservation_option-Time">
                      <input
                        type="radio"
                        name="Time"
                        value="12:00"
                        data-label="1ª cadeira"
                      />
                      <IoMdTime className="Reservation_icon-Time" />
                      <span className="Reservation_people-Time">12:00</span>
                      <FaCheck className="Reservation_iconCheck-Time" />
                    </li>
                    <li className="Reservation_option-Time">
                      <input
                        type="radio"
                        name="Time"
                        value="13:00"
                        data-label="2ª cadeira"
                      />
                      <IoMdTime className="Reservation_icon-Time" />
                      <span className="Reservation_people-Time">13:00</span>
                      <FaCheck className="Reservation_iconCheck-Time" />
                    </li>
                    <li className="Reservation_option-Time">
                      <input
                        type="radio"
                        name="Time"
                        value="14:00"
                        data-label="3ª cadeira"
                      />
                      <IoMdTime className="Reservation_icon-Time" />
                      <span className="Reservation_people-Time">14:00</span>
                      <FaCheck className="Reservation_iconCheck-Time" />
                    </li>
                    <li className="Reservation_option-Time">
                      <input
                        type="radio"
                        name="Time"
                        value="15:00"
                        data-label="4ª cadeira"
                      />
                      <IoMdTime className="Reservation_icon-Time" />
                      <span className="Reservation_people-Time">15:00</span>
                      <FaCheck className="Reservation_iconCheck-Time" />
                    </li>
                    <li className="Reservation_option-Time">
                      <input
                        type="radio"
                        name="Time"
                        value="16:00"
                        data-label="4ª cadeira"
                      />
                      <IoMdTime className="Reservation_icon-Time" />
                      <span className="Reservation_people-Time">16:00</span>
                      <FaCheck className="Reservation_iconCheck-Time" />
                    </li>
                    <li className="Reservation_option-Time">
                      <input
                        type="radio"
                        name="Time"
                        value="19:00"
                        data-label="4ª cadeira"
                      />
                      <IoMdTime className="Reservation_icon-Time" />
                      <span className="Reservation_people-Time">19:00</span>
                      <FaCheck className="Reservation_iconCheck-Time" />
                    </li>
                    <li className="Reservation_option-Time">
                      <input
                        type="radio"
                        name="Time"
                        value="20:00"
                        data-label="4ª cadeira"
                      />
                      <IoMdTime className="Reservation_icon-Time" />
                      <span className="Reservation_people-Time">20:00</span>
                      <FaCheck className="Reservation_iconCheck-Time" />
                    </li>
                    <li className="Reservation_option-Time">
                      <input
                        type="radio"
                        name="Time"
                        value="21:00"
                        data-label="4ª cadeira"
                      />
                      <IoMdTime className="Reservation_icon-Time" />
                      <span className="Reservation_people-Time">21:00</span>
                      <FaCheck className="Reservation_iconCheck-Time" />
                    </li>
                    <li className="Reservation_option-Time">
                      <input
                        type="radio"
                        name="Time"
                        value="22:00"
                        data-label="4ª cadeira"
                      />
                      <IoMdTime className="Reservation_icon-Time" />
                      <span className="Reservation_people-Time">22:00</span>
                      <FaCheck className="Reservation_iconCheck-Time" />
                    </li>
                  </ul>
                </div>
              </div>
              {/* submit */}
              <div className="Res_Inputs-box">
                <div className="Reservation_box-button">
                  <input
                    type="submit"
                    value="Pedir Reserva"
                    className="Reservation_button"
                  />
                </div>
              </div>
              {/* info cost */}
              <div className="Res_Inputs-box">
                <div className="Reservation_InfoCost">
                  <p>Voce recebera uma ligação marcando <strong>Mes</strong> e <strong>dia</strong></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
