
import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contact}>
                <div>&copy; {new Date().getFullYear()}</div>
                <p><strong>Jeff Olivier</strong><br />
                {/* <a href="tel:207-423-7145" title="Brent's phone number">(207) 423-7145</a><br /> */}
                <a href="mailto:jeffolivier99@gmail.com" title="Jeff's email address">jeffolivier99@gmail.com</a>
                </p>
                {/* <div>Visit <a href='https://jeffolivier.codes' target='_blank' rel='noreferrer' title='Jeff Olivier&quot; programming portfolio.'>Jeff's Coding Portfolio</a></div> */}
            </div>
        </footer>
    )
}

export default Footer