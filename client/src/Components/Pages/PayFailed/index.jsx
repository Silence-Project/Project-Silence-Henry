// import React from 'react'
import Head from "../../Common/Header/Head";
import Footer from "../../Common/FooterView/Footer";
import { NavLink } from 'react-router-dom';
import image from '../../../assets/failed.svg';
import styles from './payFailed.module.css';

function PayFailed() {
    return (
        <>
            <Head />
            <div className={styles.parent_element}>
                <div className={styles.container_approved}>
                    <img src={image} alt="failed" className={styles.image} />
                    <p>Lo sentimos, tu pago ha sido rechazado! Te invitamos a re intentar a través del mismo u otro medio de pago. </p>
                    <button className={styles.floating_btn}>
                        <NavLink to={"/home"}>Back home</NavLink>
                    </button>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default PayFailed