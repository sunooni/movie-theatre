import styles from "./Footer.module.css";

const cooperationLinks = [
  { href: "/ad", label: "Размещение рекламы" },
  { href: "/partnership", label: "Партнерам" },
  { href: "/partnership-program", label: "Партнерская программа" },
  { href: "/user-agreement", label: "Пользовательское соглашение" },
  { href: "/privacy-policy", label: "Политика конфиденциальности" },
];

export const FooterCooperation = () => {
  return (
    <nav className={styles.footerCooperation}>
      <h3 className={styles.footerHeader}>Сотрудничество</h3>
      <ul className={styles.footerList}>
        {cooperationLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={styles.footerCooperationLink}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
