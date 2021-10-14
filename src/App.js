import logo from './logo.svg';
import unnamed from './unnamed.png';
import bryan from './bryan.png';
import proyectos from './proyectos.png';
import './App.css';
import { faCss3, faFigma, faGithub, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHtml5} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <main className="Content">
      <nav className="Content-Nav">
        <ul>
          <li><img src={unnamed} alt="logo"/></li>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Portafolio</a></li>
          <li className="iconYt"><FontAwesomeIcon icon={faYoutube}/></li>
          <li className="iconIn"><FontAwesomeIcon icon={faInstagram}/></li>
          <li className="iconGit"><FontAwesomeIcon icon={faGithub}/></li>
        </ul>
      </nav>
      <div className="Content_Back">
        <div className="tarjeta">
          <h1>HOLA MI NOMBRE ES</h1>
          <h2>BRYAN RAFAEL</h2>
          <p>Diseñador & Desarrollador Front-End</p>
        </div>

        <div className="textos">
          <h1>HABILIDADES:</h1>
          <ul>
            <li className="iconHtml5" ><FontAwesomeIcon icon={faHtml5}/></li>
            <li className="iconFigma"><FontAwesomeIcon icon={faFigma}/></li>
            <li className="iconCss3"><FontAwesomeIcon icon={faCss3}/></li>
            <li className="iconReact"><FontAwesomeIcon icon={faReact}/></li>
            <li className="iconNode"><FontAwesomeIcon icon={faNode}/></li>
          </ul>
        </div>

        <div className="proyectos">
          <h1>Proyectos Recientes:</h1>
              <img src={proyectos} alt="bryan"/>
        </div>

        <div className="Circulo">
          <img src={bryan} alt="proyectos"/>
        </div>

      </div>
    </main>
  );
}

export default App;
