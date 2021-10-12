import logo from './logo.svg';
import unnamed from './unnamed.png';
import './App.css';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBell} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="Content">
      <nav className="Content-Nav">
        <ul>
          <li><img src={unnamed}/></li>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Portafolio</a></li>
          <li className="iconYt"><FontAwesomeIcon icon={faYoutube}/></li>
          <li className="iconIn"><FontAwesomeIcon icon={faInstagram}/></li>
          <li className="iconGit"><FontAwesomeIcon icon={faGithub}/></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
