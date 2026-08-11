import styles from "./Footer.module.css";

const menuLinks = [
  { href: "/movies", label: "Фильмы" },
  { href: "/series", label: "Сериалы" },
  { href: "/selection", label: "Подборки" },
];

export const FooterMenu = () => {
  return (
    <nav className={styles.footerMenu}>
        <h3 className={styles.footerHeader}>Меню</h3>
      <ul className={styles.footerList}>
        {menuLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={styles.footerMenuLink}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
