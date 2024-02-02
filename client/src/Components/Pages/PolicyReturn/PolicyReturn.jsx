import styles from "./PolicyReturn.module.css";
import Head from "../../Common/Header/Head.jsx";
import Footer from "../../Common/FooterView/Footer.jsx";

const PolicyReturn = () => {
  return (
    <>
      <Head />
      <div className={styles.container}>
        <h1>Politica de devolución de Silence Bs As</h1>
        <p>
          En Silence Buenos Aires, nos comprometemos a ofrecer prendas de vestir
          minimalistas de alta calidad, diseñadas para acompañar tu estilo de
          vida versátil. Si por alguna razón necesitas realizar una devolución o
          cambio, estamos aquí para ayudarte.
          <h3>Condiciones de Devolución:</h3>
          <ul className={styles.ul}>
            <li>
              Plazo: Dispones de 15 días a partir de la recepción de tu compra
              para solicitar una devolución.
            </li>
            <li>
              Proceso de Devolución o Cambio: Si deseas cambiar un artículo,
              completa la ficha de cambio que se incluye con tu pedido y
              comunícate con nuestro equipo a través de WhatsApp al
              +5491166305651 para gestionar el proceso.
            </li>
            <li>
              Exclusiones de devolución: No realizamos cambios de ropa interior
              ni de artículos en liquidación.
            </li>
            <li>
              Condiciones de las prendas: Únicamente se aceptarán devoluciones
              de prendas en su estado original, sin haber sido usadas ni
              presentar manchas, con su etiqueta original.
            </li>
          </ul>
          <h3>Información adicional:</h3>
          <ul className={styles.ul}>
            <li>
              Tiempos de Procesamiento de Devoluciones: El proceso de cambio
              tarda entre 3 a 5 días hábiles en completarse una vez recibido el
              artículo devuelto.
            </li>
            <li>
              Métodos de Reembolso: Para la devolución del dinero, realizamos un
              reintegro mediante una gift card con una caducidad de hasta 6
              meses para ser utilizada en futuras compras.
            </li>
            <li>
              Importante: Nos reservamos el derecho de rechazar prendas que no
              cumplan con las condiciones mencionadas anteriormente.
            </li>
            <li>
              Estamos comprometidos a garantizar tu satisfacción con nuestros
              productos. Si tienes alguna pregunta adicional sobre nuestra
              política de devolución, no dudes en contactarnos.
            </li>
          </ul>
          <h3>Gracias por confiar en Silence.</h3>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PolicyReturn;
