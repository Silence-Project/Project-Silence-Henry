import styles from './FAQSection.module.css'
import Header from '../../Common/Header/Header'
import Footer from '../../Common/Footer/Footer'

const FAQSection = () => {

  const estilosCss = 'FAQSection'

  return(
    <>

      <Header estilosCss={estilosCss}/>

      <div className={styles.container}>
        
        <h1 className={styles.h1}>FAQ Section</h1>

        <br />
        <hr />
        <br />

        <ol className={styles.ol}>

          <li>
            <h4>¿Cuál es el plazo para devolver un artículo?</h4>
            <ul className={styles.ul}>
              <li>Dispones de 15 días a partir de la recepción de tu compra para solicitar una devolución.</li>
            </ul>          
          </li>

          <br />

          <li>
            <h4>¿Cómo puedo realizar un cambio de producto?</h4>
            <ul className={styles.ul}>
              <li>
                Si deseas cambiar un artículo, completa la ficha de cambio que se incluye con tu pedido y comunícate con nuestro equipo a través de WhatsApp al +5491166305651 para gestionar el proceso.
              </li>
            </ul>
          </li>

          <br />

          <li>
            <h4>¿Qué artículos no son sujetos a devolución?</h4>
            <ul className={styles.ul}>
              <li>
                No realizamos cambios de ropa interior ni de artículos en liquidación.
              </li>
            </ul>
          </li>

          <br />

          <li>
            <h4>¿Cuál es el proceso de devolución y cuánto tiempo tarda?</h4>
            <ul className={styles.ul}>
              <li>
                Una vez recibido el artículo devuelto, el proceso de cambio tarda entre 3 a 5 días en completarse.
              </li>
            </ul>
          </li>

          <br />

          <li>
            <h4>¿Cómo se realiza el reembolso en caso de devolución?</h4>
            <ul className={styles.ul}>
              <li>
                Realizamos un reintegro mediante una gift card con una caducidad de hasta 6 meses para ser utilizada en futuras compras.
              </li>
            </ul>
          </li>

          <br />

          <li>
            <h4>¿Qué condiciones deben cumplir las prendas para ser devueltas?</h4>
            <ul className={styles.ul}>
              <li>
                Únicamente se aceptarán devoluciones de prendas en su estado original, sin haber sido usadas ni presentar manchas, con su etiqueta original.
              </li>
            </ul>
          </li>

          <br />

          <li>
            <h4>¿Cómo puedo contactar al servicio de atención al cliente de Silence Buenos Aires?</h4>
            <ul className={styles.ul}>
              <li>
                Puedes contactarnos a través de WhatsApp al +5491166305651 o mediante correo electrónico a silence.project.henry@gmail.com.
              </li>
            </ul>
          </li>

          <br />

          <li>
            <h4>¿Ofrecen envíos internacionales?</h4>
            <ul className={styles.ul}>
              <li>
                Por el momento, solo realizamos envíos dentro de Argentina.
              </li>
            </ul>
          </li>

          <br />

          <li>
            <h4>¿Dónde puedo encontrar información sobre las tallas de los productos?</h4>
            <ul className={styles.ul}>
              <li>
                Puedes encontrar una guía de tallas en nuestro sitio web o contactar a nuestro equipo para recibir asesoramiento sobre tallas específicas.
              </li>
            </ul>
          </li>

          <br />

          <li>
            <h4>¿Qué tipo de prendas ofrece Silence Buenos Aires?</h4>
            <ul className={styles.ul}>
              <li>
                Ofrecemos prendas de vestir minimalistas de alta calidad diseñadas para personas versátiles, adecuadas para diversos estilos y ocasiones.
              </li>
            </ul>
          </li>

          <br />

          <li>
            <h4>¿Puedo realizar devoluciones en tiendas físicas o únicamente a través de envíos?</h4>
            <ul className={styles.ul}>
              <li>
                Actualmente, las devoluciones solo se reciben a través de envíos o en nuestro warehouse ubicado en Palermo. Contacta a nuestro equipo para obtener más detalles sobre las ubicaciones.
              </li>
            </ul>
          </li>

          <br />

          <li>
            <h4>¿Ofrecen garantía en sus productos?</h4>
            <ul className={styles.ul}>
              <li>
                Sí, ofrecemos garantía de calidad en nuestros productos. Nuestras prendas pasan por un alto proceso de control pero si encuentras algún defecto o problema con tu compra, por favor contáctanos para brindarte asistencia.
              </li>
            </ul>
          </li>

          <br />

          <li>
            <h4>¿Cómo puedo realizar un seguimiento de mi pedido?</h4>
            <ul className={styles.ul}>
              <li>
                Una vez que tu pedido haya sido procesado y enviado, recibirás un correo electrónico con el número de seguimiento para rastrear tu paquete. También puedes contactarnos para obtener ayuda con el seguimiento de tu pedido.
              </li>
            </ul>
          </li>

          <br />

          <li>
            <h4>¿Aceptan cambios o devoluciones en artículos de rebajas o promocionales?</h4>
            <ul className={styles.ul}>
              <li>
                Los artículos en liquidación o promocionales no son sujetos a cambios o devoluciones, a menos que presenten defectos de fabricación. Te recomendamos revisar las condiciones de compra de dichos productos antes de confirmar tu pedido.
              </li>
            </ul>
          </li>

          <br />

          <li>
            <h4>¿Cuáles son los métodos de pago aceptados por Silence Buenos Aires?</h4>
            <ul className={styles.ul}>
              <li>
                Aceptamos pagos en efectivo al momento de retiro, tarjetas de crédito, débito y otros métodos de pago disponibles en nuestro sitio web. Para obtener más información sobre los métodos de pago, consulta nuestra sección de preguntas frecuentes en el sitio o comunícate con nuestro equipo de atención al cliente.
              </li>
            </ul>
          </li>

        </ol>

      </div>

      <Footer/>
      
    </>
  )
}

export default FAQSection