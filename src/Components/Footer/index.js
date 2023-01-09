import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={styles.copyright}>
                Copyright © {new Date().getFullYear()}
            </div>
            <div className={styles.socials}>
                <a href='https://www.instagram.com/pablo.schivazappa/' target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                <a href='https://www.youtube.com/channel/UCR16IUxEZ4amDETpPicvVmA' target="_blank" rel="noreferrer"><i class="fa-brands fa-youtube"></i></a>
            </div>
            <div className={styles.footerName}>Pablo Schivazappa</div>
        </footer>
    )
}

export default Footer