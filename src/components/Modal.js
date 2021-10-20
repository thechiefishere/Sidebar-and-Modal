import { FaTimes } from "react-icons/fa";

const Modal = ({ btnClicked }) => {
  return (
    <div className="modal">
      <FaTimes className="times" onClick={btnClicked} />
      <h3 className="content">Modal Content</h3>
    </div>
  );
};

export default Modal;
