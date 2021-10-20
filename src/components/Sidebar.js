import {
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaReddit,
  FaHome,
  FaFolderOpen,
  FaCalendarAlt,
} from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";

const Sidebar = ({ barClicked, show }) => {
  return (
    <div className={show ? "sidebar show-sidebar" : "sidebar"}>
      <header className="header">
        <h1 className="title">
          Coding <span>Addict</span>
        </h1>
        <FaTimes className="times" onClick={barClicked} />
      </header>
      <nav>
        <ul>
          <li>
            <a>
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a>
              <BsFillPeopleFill /> Team
            </a>
          </li>
          <li>
            <a>
              <FaFolderOpen /> Projects
            </a>
          </li>
          <li>
            <a>
              <FaCalendarAlt /> Calendar
            </a>
          </li>
          <li>
            <a>
              <GrDocumentText /> Documents
            </a>
          </li>
        </ul>
      </nav>
      <div className="social-icons">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaReddit />
      </div>
    </div>
  );
};

export default Sidebar;
