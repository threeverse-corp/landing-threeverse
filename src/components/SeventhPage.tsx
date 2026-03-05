import StepItem from "./StepItem";
import styles from "./SeventhPage.module.css";
import Circle from "../assets/images/Circle.svg"

const steps = [
  {
    title: "Diagnóstico",
    textHighlight: "Analizamos ",
    textEnd: `tu negocio, \n sistemas y oportunidades`,
    offset: -60
  },
  {
    title: "Arquitectura",
    textHighlight: "Diseñamos ",
    textEnd: `la estructura \n digital que necesitas`,
    offset: 30
  },
  {
    title: "Implementación",
    textStar: `Construimos, integramos y \n`,
    textHighlight: " optimizamos ",
    textEnd: "cada componente",
    offset: 45
  },
  {
    title: "Escalabilidad",
    textStar: `Medimos, ajustamos y \n preparamos tu `,
    textHighlight: " crecimiento",
    offset: -65
  },
];

export const SeventhPage = () => {
  return (
    <div id="process" className={styles.wrapper}>
        <div className={styles.contentTitle}>
          <h1 className={styles.title}>Así construimos tu universo digital</h1>
          <p className={styles.subtitle}>Cada proyecto sigue un <span className={styles.highlight}>proceso estratégico</span> diseñado para escalar</p>

      </div>
      <div className={styles.contentSteps}>
        {steps.map((step, index) => (
          <StepItem number={index+1}
          {...step} />
        ))}

      </div>
    </div>
  );
}