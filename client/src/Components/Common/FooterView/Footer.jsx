import styles from './Footer.module.css'

import { NavLink } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper";

const Footer = () => {
  return (
    <>
      <div className={styles.ghost}></div>
      <footer className={styles.footer}>
        <NavLink to={ROUTES.FAQSECTION} className={styles.faqSection}>FaqSection</NavLink>
        <NavLink to={ROUTES.PolicyReturn} className={styles.policyreturn}>PolicyRetun</NavLink>
      </footer>
    </>
  )
}

export default Footer