//css
import "./Article.css";
//components
import RecipeFindMore from "../../components/RecipeFindMore/RecipeFindMore";
import Comments from "../../components/Comments/Comments";
import Contact from "../../components/Contact/Contact";
import InfoPayMethod from '../../components/InfoPayMethod/InfoPayMethod';

const Article = () => {
  return (
    <div>
      <section>
        <RecipeFindMore />
      </section>

      <section>
        <Comments />
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

export default Article;
