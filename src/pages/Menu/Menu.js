//CSS
import './Menu.css';
//components
import InfoPayMethod from '../../components/InfoPayMethod/InfoPayMethod';
import Shopping from '../../components/Shopping/Shopping';
import BannerDishes from '../../components/BennerDishes/BannerDishes';
import SignIt from '../../components/SignIt/SignIt';
import Revenues from '../../components/Revenues/Revenues';
import Contact from '../../components/Contact/Contact';

const Menu = () => {
  return (
    <div>

      <section>
        <BannerDishes />
      </section>

      <section>
        <Shopping />
      </section>

      <section>
        <Revenues />
      </section>

      <section>
        <InfoPayMethod />
      </section>

      <section>
        <Contact />
      </section>
      
    </div>
  );
};

export default Menu