import styles from "./FAQSection.module.css";

import { useState } from "react";

export default function Question({ question }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className={styles.question}>
      <div className={isOpen ? styles.open : styles.closed}>
        <h4>{question.title}</h4>
        <button className={styles.button} onClick={() => setOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
      </div>
      <div className={styles.info}>
        {isOpen && <p>{question.info}</p>}
      </div>      
    </section>
  );
}
