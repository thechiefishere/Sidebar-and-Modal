import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const barClicked = () => {
    setShowSidebar(!showSidebar);
  };

  const btnClicked = () => {
    setShowModal(!showModal);
  };

  return (
    <main>
      <FaBars onClick={barClicked} className="bar-icon" />
      {showSidebar && <Sidebar barClicked={barClicked} />}
      <button onClick={btnClicked} className="btn">
        Show Modal
      </button>
      {showModal && <Modal btnClicked={btnClicked} />}
    </main>
  );
}

export default App;
