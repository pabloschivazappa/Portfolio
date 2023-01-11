import React from "react";
import styles from './projects.module.css';
import Trackgenix from '../../assets/TrackGenix-project.png';
import Tilt from 'react-vanilla-tilt';

const Projects = () => {
    return(
        <section id="projects" className={styles.container}>
            <h3 className={styles.projectTitle} data-aos="zoom-out">Projects</h3>
            <div className={styles.project}>
                <Tilt style={{margin: 0}}>
                    <div className={styles.card}>
                        <img src={Trackgenix} alt="TrackGenix-project" />
                    </div>
                </Tilt>
                <div className={styles.content} data-aos="fade-left">
                    <h3>TrackGenix</h3>
                    <p>Trackgenix is ​​a web application that helps organize companies' assignments. You can access through the login, and depending on your role you will have certain functionalities and permissions; for example: create or edit projects, add employees to projects, create tasks, track hours, and much more...</p>
                    <div className={styles.porjectBtns}>
                    <a href="https://trackgenix-app-rosy.vercel.app/home" target="_blank" rel="noreferrer" className={styles.seeLiveBtn}>See Live</a>
                    <a href="https://github.com/pabloschivazappa/Trackgenix-app" target="_blank" rel="noreferrer" className={styles.sourceCodeBtn}>Source Code</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;