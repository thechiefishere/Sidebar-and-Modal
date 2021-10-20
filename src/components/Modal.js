import { FaTimes } from "react-icons/fa";

const Modal = ({ btnClicked }) => {
  return (
    <div className="modal">
      <FaTimes onClick={btnClicked} />
      <h3>Modal Content</h3>
    </div>
  );
};

export default Modal;
