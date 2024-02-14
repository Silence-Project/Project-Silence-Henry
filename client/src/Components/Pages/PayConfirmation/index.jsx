// import React from 'react'
import Head from "../../Common/Header/Head";
import Footer from "../../Common/FooterView/Footer";
import { NavLink } from 'react-router-dom';
import image from '../../../assets/Approved.svg';
import styles from './payConfirmation.module.css';

function PayConfirmation() {
    return (
        <>
            <Head />
            <div className={styles.parent_element}>
                <div className={styles.container_approved}>
                    <img src={image} alt="approved" className={styles.image} />
                    <p>Tu pago ha sido procesado! Podés regresar al home o revisar tus órdenes, y el estado de la misma</p>
                    <button className={styles.floating_btn}>
                        <NavLink to={"/home"}>Back home</NavLink>
                    </button>
                    <button className={styles.floating_btn}>
                        <NavLink to={"/profile"}>Ordenes</NavLink>
                    </button>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default PayConfirmation;