import { BellOutlined, UserOutlined } from "@ant-design/icons";

import { Search } from "@/features/search/ui/Search";

import styles from "./Header.module.css";

export const HeaderUserNav = () => {
  return (
    <div className={styles.userNav}>
      <Search />

      <button type="button" className={styles.iconButton} aria-label="Уведомления">
        <BellOutlined />
      </button>

      <button type="button" className={styles.iconButton} aria-label="Личный кабинет">
        <UserOutlined />
      </button>
    </div>
  );
};
