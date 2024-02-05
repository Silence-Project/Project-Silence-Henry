import styles from "./FAQSection.module.css";

import Head from "../../Common/Header/Head";
import Footer from "../../Common/FooterView/Footer";
import QuestionDataDevoluciones from "./QuestionDataDevoluciones";
import Question from "./Question";

export default function App() {
  const headings = [
    { index: 0, title: "Devoluciones y cambios:" },
    { index: 9, title: "Seguimiento de pedido:" },
    { index: 11, title: "Asistencia en la Selección de Productos y talles:" },
    { index: 13, title: "Atencion al cliente:" },
    { index: 15, title: "Métodos de pago:" },
    { index: 17, title: "Cuidado de Prendas:" },
  ];

  return (
    <>
      <Head />
      <h2 className={styles.title}>Preguntas frecuentes</h2>
      <div className={styles.container}>
        <div className={styles.questions}>
          {QuestionDataDevoluciones.map((question, index) => {
            const heading = headings.find((h) => h.index === index);

            if (heading) {
              return (
                <>
                  <h3 className={styles.heading}>{heading.title}</h3>
                  <Question key={question.id} question={question} />
                </>
              );
            } else {
              return <Question key={question.id} question={question} />;
            }
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
