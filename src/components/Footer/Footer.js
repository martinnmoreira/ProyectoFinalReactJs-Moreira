import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-solid-svg-icons'
//import { faFaceSmile} from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faTwitter, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'




export default function Footer() {
  return (
    <>
        {/* Inicio del footer */}
        <footer className="container-fluid bgBlack clBlanco">
            <div className="container-fluid py-5">
                <div className="row w-100 d-flex justify-content-around">
                    <div className="col-12 col-lg-3">
                        <h2 className="redesFooter">Contacto</h2>
                        <p>Tel. (54-11) 41234-5678/5679</p>
                        <p>administracion@todolibreria.com.ar</p>
                        <p>AV. Siempre Viva 3145 (ex 247), Villa Ballester. Buenos Aires.</p>
                    </div>
                    <div className="col-12 col-lg-3">
                        <ul className="linksFooter">
                            <h2 className="redesFooter">Info</h2>
                            <li className="transicion"><Link to="/" className="clBlanco">Inicio</Link></li>
                            <li className="transicion"><Link to="/nosotros" className="clBlanco">Nosotros</Link></li>
                            <li className="transicion"><Link to="/productos" className="clBlanco">Productos</Link></li>
                            <li className="transicion"><Link to="/contacto" className="clBlanco">Contacto</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-3 marginTarjetasMovil">
                        <h2 className="redesFooter">Nuestras redes</h2>
                        <div className="redesFooter">
                        <a href="https://www.facebook.com" target='blank'><FontAwesomeIcon icon={faFacebook} /></a> {"  "}
                        <a href="https://www.instagram.com" target='blank'><FontAwesomeIcon icon={faInstagram} /></a> {"  "}
                        <a href="https://www.twitter.com" target='blank'><FontAwesomeIcon icon={faTwitter} /></a> {"  "}
                        <a href="https://www.whatsapp.com" target='blank'><FontAwesomeIcon icon={faWhatsapp} /></a> {"  "}
                        </div>
                    </div>
                    <p className='derechos'>&reg;Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
        {/* Fin del footer */}
    </>
    )
}