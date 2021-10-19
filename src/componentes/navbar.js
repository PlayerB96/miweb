import React from 'react';
import './navbar.css';
import unnamed from '../unnamed.png';
import { faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCss3, faFigma, faGithub, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { faHtml5} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Navbar() {
    return (
        <div>
          <nav className="content-navbar">
            <ul>
              <li><img src={unnamed} alt="logo"/></li>
              <li><a href="/">Inicio</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Portafolio</a></li>
              <li className="iconYt"><FontAwesomeIcon icon={faYoutube}/></li>
              <li className="iconIn"><FontAwesomeIcon icon={faInstagram}/></li>
              <li className="iconGit"><FontAwesomeIcon icon={faGithub}/></li>
            </ul>
          </nav>
        </div>
    )
}
