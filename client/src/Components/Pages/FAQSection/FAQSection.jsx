import styles from "./FAQSection.module.css";

import Header from '../../Common/Header/Header'
import Footer from '../../Common/Footer/Footer'
import QuestionData from "./QuestionData";
import Question from "./Question";

export default function App() {
  return (
    <>
      <Header/>      
      <div className={styles.container}>
        <h2 className={styles.title}>Preguntas frecuentes</h2>
        <div className={styles.questions}>
          {QuestionData.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}