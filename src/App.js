import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <main>
      <FaBars
        onClick={() => setShowSidebar(!showSidebar)}
        className="bar-icon"
      />
      {showSidebar && <Sidebar />}
      <button className="btn">Show Modal</button>
    </main>
  );
}

export default App;
