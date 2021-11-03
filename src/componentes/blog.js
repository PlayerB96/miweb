import React from 'react';
import './blog.css';

import Frame18 from '../Frame18.png';
import Frame19 from '../Frame19.png';

export default function Blog() {
    return (
        <div className="content-blog">
            <div className="front-end">
                <div className="des-front-end">
                    <h1>CURSOS DISPONIBLES</h1>
                    <h2>DESARROLLO FRONT-END</h2>
                </div>
                <div className="cursos-front">
                    <div className="niveles">
                        <h1>NIVEL I</h1>
                        <h2>CURSO COMPLETO PARA DESARROLLO FRONT-END</h2>
                        <img src={Frame18} alt="nivel I " />
                    </div>
                    <div className="niveles">
                        <h1>NIVEL II</h1>
                        <h2>MASTER EN FRONT-END (NODE.JS & REACT.JS)</h2>
                        <img src={Frame19} alt="nivel II " />
                    </div>
                </div>
            </div>            
        </div>
    )
}
