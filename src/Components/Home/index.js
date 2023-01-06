import React from "react";
import styles from './home.module.css';
import Avatar from '../../assets/Pablo-Schivazappa.jpg'
import CV from '../../assets/Resume-Pablo-Schivazappa-2023.pdf'

const Home = () => {
    return(
        <section id="home" className={styles.home}>
            <div className={styles.homeText}>
                <strong>Hello, it's me</strong>
                <h1>Pablo Schivazappa</h1>
                <p>Full stack developer with a background in photograohy. After over a decade working as photographer and videographer I came to the conclusion that it was time to take it a leap further and become a full time web developer.
                Jack of all trades, I like to learn new things constantly & different tools. Some of the ones I use the most are Javascript ES6, ReactJS, NodeJS, Express, MongoDB, HTML5 & CSS3. I look for a team to become part of where my skills are used and I can further grow in the web development world.</p>
                <a href={CV} className="btn-link" target="_blank" rel="noreferrer">Get CV <i class="fa-solid fa-download"></i></a>
            </div>
            <div className={styles.homeImg}>
                <div className={styles.imgBox}>
                    <img src={Avatar} alt="Avatar" />
                    <h2>Pablo<br />Schivazappa <br /><span>Full-Stack Developer</span></h2>
                    <div className={styles.social}>
                        <a href="https://www.linkedin.com/in/pablo-fernando-schivazappa-00503717b/" target="_blank" rel="noreferrer">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/pabloschivazappa" target="_blank" rel="noreferrer">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                    <a href="#!" className={styles.hireMe}>Hire me</a>
                </div>
            </div>
        </section>
    )
}

export default Home;