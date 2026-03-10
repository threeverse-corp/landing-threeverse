import ResultItem from "./ResultItem";

import orbitImage from "../assets/images/orbit.svg";
import planet1 from "../assets/images/planet1.svg";
import planet2 from "../assets/images/planet2.svg";

import styles from "./EighthPage.module.css";

const results = [
  {
    planet: planet2.src,
    position: "item1",
    title: "CRECE SIN COMPLICACIONES",
    textStart: "Sistemas que te permiten ",
    highlight: `expandirte \n`,
    textEnd: " sin rehacer todo desde cero",
    align: "right",
  },
  {
    planet: planet1.src,
    position: "item2",
    title: "REDUCE TRABAJO MANUAL",
    textStart: `Automatizamos \n procesos para que \n ahorres `,
    highlight: "tiempo y dinero",
    align: "right",
  },
  {
    planet: planet2.src,
    position: "item3",
    title: "ATRAE MÁS CLIENTES",
    textStart: `Estrategia y tecnología \n alineadas para convertir \n visitas en `,
    highlight: "clientes",
    align: "left",
  },
  {
    planet: planet1.src,
    position: "item4",
    title: "MARCA QUE SE DIFERENCIA",
    textStart: `Construimos una \n `,
    highlight: " identidad ",
    textEnd: `que te hace ver \n profesional y confiable`,
    align: "left",
  },
] as const;

export const EighthPage = () => {
  return (
    <div className={styles.wrapper} id="results">
      <h1 className={styles.title}>Resultados que transforman negocios</h1>

      <div className={styles.orbitContainer}>
        <img src={orbitImage.src} className={styles.orbit} alt="" />
        <p className={styles.centerLabel}>Tu Negocio</p>

        {results.map(({ position, ...props }, index) => (
          <div className={`${styles.results} ${styles[position]}`} key={index}>
            <ResultItem {...props}  />
          </div>
        ))}
      </div>
    </div>
  );
};

