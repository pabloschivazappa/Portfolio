import React from 'react';
import styles from './header.module.css'

const Header = () => {
    return (
        <header>
            <nav className={styles.navbar}>
                <a href="#home">Home</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header