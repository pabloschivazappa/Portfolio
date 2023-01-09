import React from "react";
import styles from './contact.module.css';

const Contact = () => {
    return(
        <section id="contact" className={styles.contact} data-aos="zoom-in">
            <strong>What's next</strong>
            <h3>Let's Work Together</h3>
            <a href="mailto:pablo.schivazappa@gmail.com" className="btn-link contact-btn">
                Write me an E-mail <i class="fa-regular fa-envelope"></i>
            </a>
        </section>
    )
}

export default Contact;