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
              <li className="iconYt"><a href="https://www.youtube.com/channel/UCICXxu3dIj1PJQjcNwi3AIw"><FontAwesomeIcon icon={faYoutube}/></a></li>
              <li className="iconIn"><a href="https://www.instagram.com/player96.raf/"><FontAwesomeIcon icon={faInstagram}/></a></li>
              <li className="iconGit"><a href="https://github.com/PlayerB96"><FontAwesomeIcon icon={faGithub}/></a></li>
            </ul>
          </nav>
        </div>
    )
}
