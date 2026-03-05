import { useEffect, useState } from "react";
import { FirstPage } from "./FirstPage";
import { SecondPage } from "./SecondPage";
import { ThirdPage } from "./ThirdPage";
import { FourthPage } from "./FourthPage";
import { FifthPage } from "./FifthPage";
import { SixthPage } from "./SixthPage";
import LeftCircle from "../assets/icons/left-circle.svg";
import RightCircle from "../assets/icons/right-circle.svg";
import styles from "./ContentNavigator.module.css";
import Button from "../ui/button/Button";
import Logo from "../assets/images/Logo.svg";

export default function ContentNavigator() {
  const pages = [
    FirstPage,
    SecondPage,
    ThirdPage,
    FourthPage,
    FifthPage,
    SixthPage,
  ];
  const [current, setCurrent] = useState(0);

  const idToIndex: Record<string, number> = {
    home: 0,
    development: 3,
    design: 4,
  };

  useEffect(() => {
    const onNavigate = (event: Event) => {
      const customEvent = event as CustomEvent<{ id: string }>;
      const id = customEvent.detail?.id;
      if (!id) return;
      const idx = idToIndex[id];
      if (typeof idx === "number") setCurrent(idx);
    };

    window.addEventListener("navigate", onNavigate);
    return () => window.removeEventListener("navigate", onNavigate);
  }, []);

  const total = pages.length;

  const goPrev = () => {
    if (current > 0) setCurrent((prev) => prev - 1);
  };

  const goNext = () => {
    if (current < total - 1) setCurrent((prev) => prev + 1);
  };

  return (
    <div className={styles.navigator}>
      {current > 0 && <img src={Logo.src} alt="logo" className={styles.logo} />}
      <div className={styles.pages}>
        {pages.map((Page, index) => (
          <div
            key={index}
            className={`${styles.page} ${
              index === current ? styles.active : ""
            }`}
          >
            <Page />
          </div>
        ))}
      </div>

      {current > 0 && (
        <Button
          customClass={`${styles.navBtn} ${styles.left}`}
          Icon={LeftCircle.src}
          onClick={goPrev}
        />
      )}

      {current < total - 1 && (
        <Button
          customClass={`${styles.navBtn} ${styles.right}`}
          Icon={RightCircle.src}
          onClick={goNext}
        />
      )}
    </div>
  );
}
