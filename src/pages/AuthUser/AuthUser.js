//CSS
import "./AuthUser.css";
//components
import FormUser from "../../components/FormUser/FormUser";
import Contact from "../../components/Contact/Contact";

const AuthUser = () => {
  return (
    <div>
      <section>
        <div>
          <FormUser />
        </div>
        <div>
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default AuthUser;
