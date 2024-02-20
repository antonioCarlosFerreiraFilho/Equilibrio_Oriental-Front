//CSS
import "./Home.css";
//components
import Banner from "../../components/Banner/Banner";
import Dishes from "../../components/Dishes/Dishes";
import About from "../../components/About/About";
import Drivethru from "../../components/Drivethru/Drivethru";
import Reservation from "../../components/Reservation/Reservation";
import Revenues from "../../components/Revenues/Revenues";
import Contact from "../../components/Contact/Contact";
import Kindness from "../../components/Kindness/Kindness";

const Home = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>

      <section>
        <Dishes />
      </section>

      <section>
        <About />
      </section>

      <section className="Home__Dirvethru-Reservation">
        <div className="Home__Dirvethru">
          <Drivethru />
        </div>
        <div className="Home__Reservation">
          <Reservation />
        </div>
      </section>

      <section>
        <Revenues />
      </section>

      <section>
        <Kindness />
      </section>

      <section>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
