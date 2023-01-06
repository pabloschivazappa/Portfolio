import React from 'react';
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#home">Example</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header