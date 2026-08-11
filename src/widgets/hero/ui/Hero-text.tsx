import { Button } from "@/shared/ui/button/Button";
import styles from "./Hero.module.css";

export const HeroText = () => {
  return (
    <div className={styles.textContainer}>
      <h1 className={styles.heroHeader}>
        Самые сочные премьеры кино - у вас дома
      </h1>
      <p className={styles.heroParagraph}>
        Ежедневно пополняемая библиотека с лучшими фильмами и сериалами — в
        дубляже и оригинале. Целый месяц бесплатно!
      </p>
      <Button variant="primary" size="large">
        Смотреть бесплатно
      </Button>
    </div>
  );
};
