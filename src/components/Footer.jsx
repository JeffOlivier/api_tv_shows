
import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <div>Visit <a href='https://jeffolivier.codes' target='_blank' rel='noreferrer' title='Jeff Olivier&quot; programming portfolio.'>Jeff's Coding Portfolio</a></div>
            {/* <div className={styles.contact}>
                <p>&copy; {new Date().getFullYear()}</p>
                <p><strong>Brent Danley</strong><br />
                <a href="tel:207-423-7145" title="Brent's phone number">(207) 423-7145</a><br />
                <a href="mailto:brentdanley@gmail.com" title="Brent's email address">brentdanley@gmail.com</a>
                </p>
            </div> */}
        </footer>
    )
}

export default Footer