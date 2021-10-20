import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

  const barClicked = () => {
    setShowSidebar(!showSidebar);
    setShow(!show);
  };

  const btnClicked = () => {
    setShowModal(!showModal);
  };

  return (
    <main className="main">
      {!showSidebar && <FaBars onClick={barClicked} className="bars" />}
      <Sidebar barClicked={barClicked} show={show} />
      {!showModal && (
        <button onClick={btnClicked} className="btn">
          Show Modal
        </button>
      )}
      {showModal && <Modal btnClicked={btnClicked} />}
    </main>
  );
}

export default App;
