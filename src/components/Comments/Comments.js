import "./Comments.css";

const Comments = () => {
  return (
    <div>
      <div className="Comments">

        <div className="Comments_boxes">
          <div className="Comments_infoCounter">
            <h1>Comentarios (04)</h1>
            <div className="Comments_Line">

            </div>
          </div>

          <div className="Comments_boxesComments">
            <div className="Comments_boxImage">
              <img src="/userDefault/Man.png" alt="" />
            </div>
            <div className="Comments_CommmetUser">
              <h1>Carlos Antonio</h1>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil, minima, iste dicta dolorum accusantium libero
                  reprehenderit aut itaque ipsa tenetur aperiam molestias ab
                  excepturi doloremque consequuntur maxime soluta modi quam!
                </p>
              </div>
            </div>
          </div>

          <div className="Comments_boxesComments">
            <div className="Comments_boxImage">
              <img src="/userDefault/Man.png" alt="" />
            </div>
            <div className="Comments_CommmetUser">
              <h1>Carlos Antonio</h1>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil, minima, iste dicta dolorum accusantium libero
                  reprehenderit aut itaque ipsa tenetur aperiam molestias ab
                  excepturi doloremque consequuntur maxime soluta modi quam!
                </p>
              </div>
            </div>
          </div>

          <div className="Comments_boxesComments">
            <div className="Comments_boxImage">
              <img src="/userDefault/Man.png" alt="" />
            </div>
            <div className="Comments_CommmetUser">
              <h1>Carlos Antonio</h1>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil, minima, iste dicta dolorum accusantium libero
                  reprehenderit aut itaque ipsa tenetur aperiam molestias ab
                  excepturi doloremque consequuntur maxime soluta modi quam!
                </p>
              </div>
            </div>
          </div>

          <div className="Comments_boxesComments">
            <div className="Comments_boxImage">
              <img src="/userDefault/Man.png" alt="" />
            </div>
            <div className="Comments_CommmetUser">
              <h1>Carlos Antonio</h1>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil, minima, iste dicta dolorum accusantium libero
                  reprehenderit aut itaque ipsa tenetur aperiam molestias ab
                  excepturi doloremque consequuntur maxime soluta modi quam!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="Commetns_form">
        <div className="Commetns_box-content">
          <form className="Commetns_form-inpus">
            <textarea id="" cols="30" rows="10" placeholder="Insira seu comentario"></textarea>
            <div className="Commetns_form-boxcontent-input">
              <input type="submit" value="Commentar"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comments;
