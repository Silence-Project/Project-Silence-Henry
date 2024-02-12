import Head from '../../Common/Header/Head';
import Footer from '../../Common/FooterView/Footer';
import Descuento from '../../Common/Descuento/Descuento';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

import styles from './Information.module.css';

function QuienesSomos() {
    return (
        <div>
            <Descuento />
            <Head />
            <div className={styles.container_information}>
                <div className={styles.frontPage}>
                </div>
                <div>
                    <h4>Contactanos!</h4>
                    <div className={styles.redes}>
                        <a href="https://www.instagram.com/silencebsas/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                        <a href="https://www.facebook.com/SilenceBsAs" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
                        <a href="https://www.tiktok.com/@silence.ba" target="_blank" rel="noopener noreferrer"><FaTiktok/></a>
                    </div>
                </div>
                <div>
                    <h4>Nosotros</h4>
                    <p>Somos una ONG Argentina dedicada a la venta de ropa básica y luxury que persigue el propósito de ser esa tienda en la que piensas cuando buscas tus infaltables del día a día; además, apoyamos el talento local a través de la venta de camisas que llevan en sus logotipos: ARTE.</p>
                </div>
                <div>
                    <h4>Misión</h4>
                    <p>Proveer ropa de calidad y básica que todo armario debería tener</p>
                </div>
                <div>
                    <h4>Visión</h4>
                    <p>Ser reconocidos en toda Argentina y LATAM por el estilo y el apoyo al talento local, ya que buscamos ser una marca que te identifique</p>
                </div>
                <div>
                    <h4>Historia</h4>
                    <p>Nacimos en el año 2019...</p>
                </div>
                <div>
                    <h4>Nuestro equipo</h4>
                    <p>Organizar Cards con los admi</p>
                </div>
                <div>
                    <button className={styles.floating_btn}>
                        <NavLink to={'/home'}>Back</NavLink>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default QuienesSomos;
