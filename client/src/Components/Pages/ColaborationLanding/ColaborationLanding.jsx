import React from "react";
import styles from "./ColaborationLanding.module.css";
import Head from "../../Common/Header/Head";
import Footer from "../../Common/FooterView/Footer";
import andinophoto1 from "../../../assets/andino/capsula-andino-image(6)-sq.jpeg";
import andinophoto2 from "../../../assets/andino/capsula-andino-image (18).jpeg";
import andinowearphoto1 from "../../../assets/andino/screen-motion-andino-1-crop.png";


const ColaborationLanding = () => {

  return (
    <>
      <Head />
      <div className={styles.frontPage}></div>

      <div className={styles.introSection}>
        <div className={styles.leftItem}>
          <img src={andinowearphoto1} alt="andino wear photo" />
        </div>
        <div className={styles.rightItem}>
          <small>PRESENTANDO</small>
          <h2>Cápsula Andino</h2>
          <p>
            Descubre la esencia de la naturaleza a través de los ojos de Andino, un artista argentino cuyas raíces en el corazón de Junín de los Andes inspiran cada trazo de sus obras.
          </p>
          
          <p>
          Con una pasión inquebrantable por la pintura, Andino nos lleva en un viaje espiritual a través de sus creaciones.
          </p>
        </div>
      </div>

      <div className={styles.container_information}>
        <p>
          En Silence, apoyamos a los artistas locales y damos vida a sus visiones únicas. La cápsula "Andino" es un tributo a la majestuosidad de la fauna y la conexión espiritual que compartimos con ella. Cada remera oversize cuenta con un diseño de un animal pintado a mano, con un significado espiritual único:
        </p>


        <div className={styles.photoset}>

          <div className={styles.card}>
            <img src={andinophoto2} alt="Image 1" />
            <div className={styles.card_content}>
              <h2>Águila</h2>
              <p>Símbolo de la visión clara y la elevación del espíritu.</p>
            </div>
          </div>

          <div className={styles.card}>
            <img src={andinophoto2} alt="Image 2" />
            <div className={styles.card_content}>
              <h2>Lobo</h2>
              <p>Representa la valentía, la intuición y la conexión con la manada.</p>
            </div>
          </div>

          <div className={styles.card}>
            <img src={andinophoto2} alt="Image 2" />
            <div className={styles.card_content}>
              <h2>Jirafa</h2>
              <p>Encarna la sabiduría, la perspectiva y la gracia.</p>
            </div>
          </div>

          <div className={styles.card}>
            <img src={andinophoto2} alt="Image 2" />
            <div className={styles.card_content}>
              <h2>Tigre</h2>
              <p>Un emblema de la fuerza interior y el poder controlado.</p>
            </div>
          </div>

          <div className={styles.card}>
            <img src={andinophoto2} alt="Image 2" />
            <div className={styles.card_content}>
              <h2>Zebra</h2>
              <p>Refleja la armonía y el equilibrio en medio de la diversidad.</p>
            </div>
          </div>

        </div>


        <p>
          Cada una de estas obras maestras es una manifestación del arte y la espiritualidad, y se convierte en una declaración de estilo único que trasciende las tendencias.
          Las remeras que forman parte de la cápsula "Andino" son más que prendas, son una expresión de tu conexión con la naturaleza y tu espíritu.
        </p>
        <p>
          Todas las remeras se confeccionan artesanalmente bajo pedido, lo que garantiza la calidad y la atención al detalle que buscamos para nuestra comunidad. Por favor, ten en cuenta que el proceso de creación requiere 10 días hábiles, pero la espera valdrá la pena.
          Vistiendo el arte de Andino llevás la espiritualidad de la naturaleza en cada paso que des.
        </p>

      </div>

      <Footer />
    </>
  )
}

export default ColaborationLanding;