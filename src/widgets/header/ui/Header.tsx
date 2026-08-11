import { HeaderLogo } from "./Header-logo";
import { HeaderNav } from "./Header-nav";
import { HeaderUserNav } from "./Header-user-nav";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.container}>
        <HeaderLogo />
        <HeaderNav />
        <HeaderUserNav />
      </div>
    </header>
  );
};
