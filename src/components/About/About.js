//css
import "./About.css";
//react icons
import { RiRestaurant2Fill } from "react-icons/ri";

const About = () => {
  return (
    <div>
      <div className="About">
        <div className="About_boxShadow">
          <div className="About_content">
            <h1>Fresco.</h1>
            <h1>Autêntico.</h1>
            <h1>Simples.</h1>
            <div className="About_content-slogan">
              <p>Levamos os Sabores do oriente ao seu prato.</p>
            </div>
            <div>
              <RiRestaurant2Fill className="About_content-icon" />
            </div>
            <div className="About_content-info">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam nemo dolores, iusto quasi reiciendis minima numquam
                porro nisi tenetur quos. Illo sunt asperiores eos minima placeat
                minus maiores atque rerum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
