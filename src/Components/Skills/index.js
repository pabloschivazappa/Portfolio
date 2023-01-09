import React from "react";
import styles from './skills.module.css';

const Skills = () => {
    const data = [
        {
            title: "Languages",
            content: ["Javascript", "React JS", "Node JS", "Express", "Python", "SQL"]
        },
        {
            title: "Software",
            content: ["VS Code", "Postman", "GIT"]
        },
        {
            title: "Database",
            content: ["MongoDB"]
        },
    ]
    return (
        <section id="skills" className={styles.container}>
            <h3 className={styles.skillsTitle} data-aos="zoom-out">Skills</h3 >
            <div className={styles.skills}>
                {
                    data.map(item => (
                        <div className={styles.languagesBox} key={item.title} data-aos="zoom-in">
                            <h3>{item.title}</h3>
                            <ul>
                                {
                                    item.content.map(content => (
                                        <li key={content}>{content}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </section>
    )
};

export default Skills;