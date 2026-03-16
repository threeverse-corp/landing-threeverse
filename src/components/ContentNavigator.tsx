import { useEffect, useState } from "react";

import LeftCircleIcon from "../assets/icons/LeftCircleIcon";
import { RightCircleIcon } from "../assets/icons/RightCircleIcon";
import styles from "./ContentNavigator.module.css";
import Button from "../ui/button/Button";
import Logo from "../assets/images/Logo.svg";

import { FirstPage } from "./FirstPage";
import { SecondPage } from "./SecondPage";
import { ThirdPage } from "./ThirdPage";
import { FourthPage } from "./FourthPage";
import { FifthPage } from "./FifthPage";
import { SixthPage } from "./SixthPage";
import { SeventhPage } from "./SeventhPage";
import { EighthPage } from "./EighthPage";
import { NinthPage } from "./NinthPage";
import { TenthPage } from "./TenthPage";

const pages = [
  FirstPage,
  SecondPage,
  ThirdPage,
  FourthPage,
  FifthPage,
  SixthPage,
  SeventhPage,
  EighthPage,
  NinthPage,
  TenthPage,
];

export default function ContentNavigator() {
  const [current, setCurrent] = useState(0);
  const ActivePage = pages[current];

  const idToIndex: Record<string, number> = {
    hero: 0,
    development: 3,
    design: 4,
    strategy: 5,
    process: 6,
    results: 7,
    pledge: 8,
    contact: 9,
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
      <main key={current} className={styles.pages} aria-live="polite">
        <ActivePage />
      </main>

      {current > 0 && (
        <Button
          ariaLabel="Go to previous page"
          customClass={`${styles.navBtn} ${styles.left}`}
          Icon={LeftCircleIcon}
          onClick={goPrev}
        />
      )}

      {current < total - 1 && (
        <Button
          ariaLabel="Go to next page"
          customClass={`${styles.navBtn} ${styles.right}`}
          Icon={RightCircleIcon}
          onClick={goNext}
        />
      )}
    </div>
  );
}
