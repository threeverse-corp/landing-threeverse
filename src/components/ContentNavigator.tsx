import { useEffect, useState, lazy, Suspense } from "react";

import LeftCircle from "../assets/icons/left-circle.svg";
import RightCircle from "../assets/icons/right-circle.svg";
import styles from "./ContentNavigator.module.css";
import Button from "../ui/button/Button";
import Logo from "../assets/images/Logo.svg";

const pages = [
  lazy(() => import("./FirstPage").then((m) => ({ default: m.FirstPage }))),
  lazy(() => import("./SecondPage").then((m) => ({ default: m.SecondPage }))),
  lazy(() => import("./ThirdPage").then((m) => ({ default: m.ThirdPage }))),
  lazy(() => import("./FourthPage").then((m) => ({ default: m.FourthPage }))),
  lazy(() => import("./FifthPage").then((m) => ({ default: m.FifthPage }))),
  lazy(() => import("./SixthPage").then((m) => ({ default: m.SixthPage }))),
  lazy(() => import("./SeventhPage").then((m) => ({ default: m.SeventhPage }))),
  lazy(() => import("./EighthPage").then((m) => ({ default: m.EighthPage }))),
  lazy(() => import("./TenthPage").then((m) => ({ default: m.TenthPage }))),
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
        <Suspense fallback={<div className={styles.loaderPage} />}>
          <div key={current} className={styles.pageFadeIn}>
            <ActivePage />
          </div>
        </Suspense>
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
