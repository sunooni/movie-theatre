import { BellOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./Header.module.css";

export const HeaderUserNav = () => {
  return (
    <div className={styles.userNav}>
      <button
        type="button"
        className={styles.iconButton}
        aria-label="Поиск по сайту">
        <SearchOutlined />
      </button>

      <button
        type="button"
        className={styles.iconButton}
        aria-label="Уведомления">
        <BellOutlined />
      </button>

      <button
        type="button"
        className={styles.iconButton}
        aria-label="Личный кабинет">
        <UserOutlined />
      </button>
    </div>
  );
};
