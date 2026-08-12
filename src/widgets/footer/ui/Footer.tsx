import { HeaderLogo } from "@/widgets/header/ui/HeaderLogo";
import { FooterMenu } from "./FooterMenu";
import { FooterCatalog } from "./FooterCatalog";
import { FooterCooperation } from "./FooterCooperation";
import { FooterSocials } from "./FooterSocials";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <HeaderLogo />
      <FooterMenu />
      <FooterCatalog />
      <FooterCooperation />
      <FooterSocials />
    </footer>
  );
};
