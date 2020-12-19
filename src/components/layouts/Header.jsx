import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header>
            <Link className={styles.header_text} to="/">
                Show Finder
            </Link>
        </header>
    );
};

export default Header;
