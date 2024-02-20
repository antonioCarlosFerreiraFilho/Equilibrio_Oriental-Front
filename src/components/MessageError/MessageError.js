import "./MessageError.css";

const MessageError = ({msg, type}) => {
  return (
    <div>
      <div className="MessageError_box">
        <div className={`MessageError_box-content ${type}`}>
          <p>{msg}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageError;
