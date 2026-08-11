import { HeaderLogo } from "@/widgets/header/ui/Header-logo"
import { FooterMenu } from "./Footer-menu"
import { FooterCatalog } from "./Footer-catalog"
import { FooterCooperation } from "./Footer-cooperation"
import { FooterSocials } from "./Footer-socials"
import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.mainFooter}>
        <HeaderLogo/>
        <FooterMenu />
        <FooterCatalog />
        <FooterCooperation />
        <FooterSocials />
        </footer>
    )
}