import { useState } from "react";
import styles from "./BurgerMenu.module.css";

const menuItems = [
  { label: "Inicio", href: "#hero" },
  {
    label: "Soluciones",
    children: [
      { label: "Desarrollo", href: "#development" },
      { label: "Diseño", href: "#design" },
      { label: "Estrategia", href: "#" },
    ],
  },
  { label: "Proceso", href: "#process" },
  { label: "Resultados", href: "#" },
  { label: "Inversión", href: "#" },
  { label: "Contacto", href: "#" },
];

const solutionsItem = menuItems.find((m) => m.label === "Soluciones")!;

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const [activeMain, setActiveMain] = useState("Inicio");
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const isSolutionsActive = activeMain === "Soluciones";

  const closeAll = () => {
    setOpen(false);
    setSolutionsOpen(false);
  };

  const toggleMenu = () => {
    setOpen((prev) => {
      if (!prev && (isSolutionsActive || activeSub)) setSolutionsOpen(true);
      return !prev;
    });
  };

  const handleMainClick = (item: (typeof menuItems)[number]) => {
    setActiveMain(item.label);

    if (item.label === "Soluciones") {
      setSolutionsOpen((p) => !p);
      return;
    }

    setActiveSub(null);
    closeAll();
  };

  const handleSubClick = (child: { label: string; href: string }) => {
    setActiveMain("Soluciones");
    setActiveSub(child.label);

    const targetId = child.href.startsWith("#") ? child.href.slice(1) : child.href;

    window.dispatchEvent(
      new CustomEvent("navigate", { detail: { id: targetId } })
    );
    closeAll();
  };

  const renderSublinks = (mobile = false) =>
    solutionsItem.children!.map((child) => (
      <a
        key={child.label}
        href={child.href}
        className={`${styles.sublink} ${activeSub === child.label ? styles.activeSub : ""}`}
        onClick={(e) => {
          e.preventDefault();
          handleSubClick(child);
        }}
      >
        {child.label}
      </a>
    ));

  return (
    <>
      <button
        type="button"
        className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
        onClick={toggleMenu}
        aria-expanded={open}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        aria-hidden={!open}
      >
        <nav className={styles.menu}>
          <div className={styles.mainCol}>
            {menuItems.map((item) => {
              const isActive = activeMain === item.label;
              const hasChildren = Boolean(item.children?.length);

              return (
                <div key={item.label} className={styles.itemRow}>
                  {hasChildren ? (
                    <button
                      type="button"
                      className={`${styles.link} ${styles.linkBtn} ${isActive ? styles.active : ""}`}
                      onClick={() => handleMainClick(item)}
                      aria-expanded={solutionsOpen}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className={`${styles.link} ${isActive ? styles.active : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMainClick(item)}}
                    >
                      {item.label}
                    </a>
                  )}
                  {item.label === "Soluciones" && solutionsOpen && (
                    <div
                      className={`${styles.submenu} ${styles.solutionsSubmenu} ${styles.mobileOnly} ${solutionsOpen ? styles.solutionsSubmenuOpen  : ""}`}
                    >
                      {renderSublinks()}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div
            className={`${isSolutionsActive ? styles.sideCol : ""} ${styles.desktopOnly}`}
          >
            <div
              className={`${styles.submenuRight} ${isSolutionsActive && solutionsOpen ? styles.submenuRightOpen  : ""}`}
            >
              {renderSublinks()}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}