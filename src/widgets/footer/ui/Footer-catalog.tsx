import styles from "./Footer.module.css";

const catalogLinks = [
  { href: "/catalog", label: "Весь каталог" },
  { href: "/comedies", label: "Комедии" },
  { href: "/dramas", label: "Драма" },
  { href: "/fantasy", label: "Фэнтези" },
  { href: "/thrillers", label: "Триллеры" },
  { href: "/detectives", label: "Детективы" },
];

export const FooterCatalog = () => {
  return (
    <nav className={styles.footerCatalog}>
        <h3 className={styles.footerHeader}>Кино и сериалы</h3>
      <ul className={styles.footerList}>
        {catalogLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={styles.footerCatalogLink}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};