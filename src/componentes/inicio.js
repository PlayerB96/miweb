import React from 'react'
import bryan from '../bryan.png';
import './inicio.css';
import proyectos from '../proyectos.png';
import { faCss3, faFigma, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { faHtml5} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Inicio() {
    return (
        <div className="Content">
        
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
          
        </div>
    )
}
