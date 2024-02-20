//CSS
import "./InfoPayMethod.css";
//react icons
import { MdDeliveryDining } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";

const infoPayMethod = () => {
  return (
    <div>
      <div className="InfoPayMethod">
        <div className="InfoPayMethod_content-infos">
          <div className="InfoPayMethod_info-boxes">
            <div className="InfoPayMethod_info-box">
              <MdDeliveryDining className="InfoPayMethod_iconInfo"/>
              <div className="InfoPayMethod_content-box">
                <p className="InfoPayMethod_contentPay-info">frete grátis</p>
                <p className="InfoPayMethod_Txt">Confira as Condições</p>
              </div>
            </div>
            <div className="InfoPayMethod_info-box">
              <FaLocationDot className="InfoPayMethod_iconInfo"/>
              <div className="InfoPayMethod_content-box">
                <p className="InfoPayMethod_contentPay-info">enviamos</p>
                <p className="InfoPayMethod_Txt">Para toda grande Lisboa</p>
              </div>
            </div>
            <div className="InfoPayMethod_info-box">
              <FaRegCreditCard className="InfoPayMethod_iconInfo"/>
              <div className="InfoPayMethod_content-box">
                <p className="InfoPayMethod_contentPay-info">pagamento</p>
                <p className="InfoPayMethod_Txt">MBway PayPal Debito</p>
              </div>
            </div>
            <div className="InfoPayMethod_info-box">
            <RiSecurePaymentFill className="InfoPayMethod_iconInfo"/>
              <div className="InfoPayMethod_content-box">
                <p className="InfoPayMethod_contentPay-info">100% Seguro</p>        
                <p className="InfoPayMethod_Txt">Certificado e criptografado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default infoPayMethod;
