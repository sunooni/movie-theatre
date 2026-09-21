import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/movies", label: "Фильмы" },
  { href: "/series", label: "Сериалы" },
  { href: "/selection", label: "Подборки" },
  { href: "/favorites", label: "Избранное" },
];

export const HeaderNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link to={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
