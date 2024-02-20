//css
import "./KindnessChek.css";
//components
import BasketItens from "../../components/BasketItens/BasketItens";
import InfoPayMethod from "../../components/InfoPayMethod/InfoPayMethod";
import Contact from "../../components/Contact/Contact";

const KindnessChek = () => {
  return (
    <div>
      <section>
        <div className="KindnessCheck_Component">
          <BasketItens />
        </div>
        <div>
          <InfoPayMethod />
        </div>
        <div>
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default KindnessChek;
