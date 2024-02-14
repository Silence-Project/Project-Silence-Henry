// import React from 'react'
import Head from "../../Common/Header/Head";
import Footer from "../../Common/FooterView/Footer";
import {NavLink} from 'react-router-dom';
import image from '../../../assets/Approved.svg';

function PayConfirmation() {
    return (
        <>
            <Head />
            <img src={image} alt="approved" />
            <p>Tu pago ha sido procesado! Puedes regresar al HOME o revisar tus ordenes, y el estado de tu orden</p>
            <div>
                <button >
                    <NavLink to={"/home"}>Back home</NavLink>
                </button>
            </div>
            <Footer />
        </>

    )
}

export default PayConfirmation;