import React from "react";
import styles from './projects.module.css';
import Trackgenix from '../../assets/TrackGenix-project.png';
import Tilt from 'react-vanilla-tilt';

const Projects = () => {
    return(
        <section id="projects" className={styles.container}>
            <h3 className={styles.projectTitle}>Projects</h3>
            <div className={styles.project}>
                <Tilt style={{margin: 0}}>
                    <div className={styles.card}>
                        <img src={Trackgenix} alt="TrackGenix-project" />
                    </div>
                </Tilt>
                <div className={styles.content}>
                    <h3>TrackGenix</h3>
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor N. del T. persona que se dedica a la imprenta desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
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