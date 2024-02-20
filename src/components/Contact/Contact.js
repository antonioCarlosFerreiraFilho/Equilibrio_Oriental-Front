//css
import "./Contact.css";
//react icons
import { FaFacebookF } from "react-icons/fa";
import { CgInstagram } from "react-icons/cg";
import { IoLogoTwitter } from "react-icons/io";


const Contact = () => {
  return (
    <div>

      <div className="Contact">
        <div className="Contact_content">
          <div>
            <h1>Contato</h1>
            <p>(11)3456-7890</p>
            <p>info@gmail.com</p>
          </div>
          <div>
            <h1>Endereço</h1>
            <p>Rua Palmira Bastos n1 Queluz</p>
            <p>Lisboa Queluz 2745-308</p>
          </div>
          <div>
            <h1>Horario</h1>
            <p>Seg a Sex: 12:00 as 22:00</p>
            <p>Sabado: 19:00 as 00:00</p>
            <p>Domingo: 19:00 as 00:00</p>
          </div>
          <div>
            <h1>Redes sociais</h1>
            <FaFacebookF className="Contact_iconsSocial"/>
            <CgInstagram className="Contact_iconsSocial"/>
            <IoLogoTwitter className="Contact_iconsSocial"/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
