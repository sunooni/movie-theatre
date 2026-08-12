import styles from "./Header.module.css";

const navLinks = [
  { href: "/movies", label: "Фильмы" },
  { href: "/series", label: "Сериалы" },
  { href: "/selection", label: "Подборки" },
];

export const HeaderNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
