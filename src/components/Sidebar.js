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

const Sidebar = ({ barClicked }) => {
  return (
    <div className="sidebar">
      <header>
        <h1 className="title">
          Coding <span>Addict</span>
        </h1>
        <FaTimes onClick={barClicked} />
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
