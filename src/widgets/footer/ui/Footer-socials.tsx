import {
  FacebookFilled,
  InstagramFilled,
  TelegramFilled,
} from "@ant-design/icons";
import styles from "./Footer.module.css";

export const FooterSocials = () => {
  return (
    <div className={styles.footerSocialsBlock}>
      <h3 className={styles.footerSocials}>Подписывайтесь на нас</h3>
      <div className={styles.footerListSocials}>
        <FacebookFilled style={{ fontSize: '32px' }}/>
        <InstagramFilled style={{ fontSize: '32px' }}/>
        <TelegramFilled style={{ fontSize: '32px' }}/>
      </div>
    </div>
  );
};
