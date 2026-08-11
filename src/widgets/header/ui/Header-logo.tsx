import styles from './Header.module.css'

export const HeaderLogo = () => {
    return (
    <a href="/" className={styles.logo}>
        <div className={styles.logoText}>Кинодом</div>
    </a>
    )
}