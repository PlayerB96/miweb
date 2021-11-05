import React from 'react'
import './contacto.css';

export default function Contacto() {
    return (
        <div className="content-contacto">
                <div className="des-contacto">
                    <h1>Escríbeme.....</h1>
                    <h2><a href="mailto:player.b.96@hotmail.com" Target="_blank" >CORREO</a></h2>
                </div>
              
                <div className="des-contacto">
                    <h1>Llámame.....</h1>
                    <h2><a href="https://api.whatsapp.com/send?phone=933713615" Target="_blank" >WHATTSAPP</a></h2>
                </div>

                <div className="des-contacto">
                    <h1>Contáctame.....</h1>
                    <h2><a href="https://www.facebook.com/anonimo96l/" Target="_blank" >FACEBOOK</a></h2>
                </div>
        </div>
    )
}
