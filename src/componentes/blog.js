import React from 'react';
import './blog.css';

import Frame18 from '../Frame18.png';
import Frame19 from '../Frame19.png';
import criptoinv from '../criptoinv.jpg';
import criptotend from '../criptotend.jpg';

export default function Blog() {
    return (
        <div className="content-blog">
            <div className="front-end">
                
                <div className="des-front-end">
                    <h1>CURSOS DISPONIBLES</h1>
                    <h2>CRIPTOMONEDAS DE 0 A 100</h2>
                </div>
                <div className="cursos-front">
                    <div className="niveles">
                        <h1>NIVEL I</h1>
                        <h2><a href="https://www.udemy.com/course/curso-completo-de-criptomonedas-de-0-a-100/?referralCode=4378E02C88C3605EF6A3" Target="_blank" >CURSO COMPLETO DE CRIPTOMONEDAS</a></h2>
                        <img src={criptoinv} alt="criptoinv " />
                    </div>
                    <div className="niveles">
                        <h1>NIVEL I</h1>
                        <h2><a href="https://www.udemy.com/course/master-en-trading-de-criptomonedas-en-tendencias-alcistas/?referralCode=8CE48F9AE4887F56727E" Target="_blank" >CURSO DE TRADING EN TENDENCIAS ALCISTAS</a></h2>
                        <img src={criptotend} alt="criptoend " />
                    </div>
                </div>
                <div className="des-front-end">
                    <h1>PRÓXIMAMENTE DISPONIBLES</h1>
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
