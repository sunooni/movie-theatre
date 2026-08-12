import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";
import { HeaderUserNav } from "./HeaderUserNav";
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
