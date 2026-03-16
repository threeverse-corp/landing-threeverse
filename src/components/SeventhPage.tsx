import StepItem from "./StepItem";
import styles from "./SeventhPage.module.css";

const steps = [
  {
    title: "Diagnóstico",
    textHighlight: "Analizamos ",
    textEnd: `tu negocio, \n sistemas y oportunidades`,
    offset: -60,
  },
  {
    title: "Arquitectura",
    textHighlight: "Diseñamos ",
    textEnd: `la estructura \n digital que necesitas`,
    offset: 30,
  },
  {
    title: "Implementación",
    textStar: `Construimos, integramos y \n`,
    textHighlight: " optimizamos ",
    textEnd: "cada componente",
    offset: 45,
  },
  {
    title: "Escalabilidad",
    textStar: `Medimos, ajustamos y \n preparamos tu `,
    textHighlight: " crecimiento",
    offset: -65,
  },
];

export const SeventhPage = () => {
  return (
    <section id="process" className={styles.wrapper}>
      <div className={styles.contentTitle}>
        <h2 className={styles.title} id="process-title">
          Así construimos tu universo digital
        </h2>
        <p className={styles.subtitle}>
          Cada proyecto sigue un{" "}
          <span className={styles.highlight}>proceso estratégico</span> diseñado
          para escalar
        </p>
      </div>
      <ol className={styles.contentSteps}>
        {steps.map((step, index) => (
          <li key={index} className={styles.stepListItem}>
            <StepItem number={index + 1} {...step} />
          </li>
        ))}
      </ol>
    </section>
  );
};
