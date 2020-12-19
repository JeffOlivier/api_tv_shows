import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./navBar.module.scss";

const NavBar = () => {
    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className={styles.nav_container}>
            <div className={styles.nav_item}>
                <Link className={styles.nav_link} to="/">
                    TV Show Finder
                </Link>
            </div>
            <div className={styles.nav_spacer}> | </div>
            <div className={styles.nav_item}>
                <NavLink to="/readme" className={styles.nav_link}>
                    ReadMe / Purpose
                </NavLink>
            </div>
            <div className={styles.nav_spacer}> | </div>
            <div className={styles.nav_item}>
                <a
                    href="https://github.com/JeffOlivier/api_tv_shows"
                    target="_blank"
                    rel="noreferrer"
                    title="tv show finder on GitHub"
                    className={styles.nav_link}
                >
                    <i className="fas fa-code-branch"></i>{" "}
                    <i className="fab fa-github"></i> GitHub Repo
                </a>
            </div>
            {/* <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/readme" className="nav-item nav-link">
                                ReadMe / Purpose
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a
                                href="https://github.com/JeffOlivier/api_tv_shows"
                                target="_blank"
                                rel="noreferrer"
                                title="tv show finder on GitHub"
                                className="nav-item nav-link"
                            >
                                <i className="fas fa-code-branch"></i>{" "}
                                <i className="fab fa-github"></i> GitHub Repo
                            </a>
                        </li>
                    </ul>
                </div> */}
        </div>
        // </nav>
    );
};

export default NavBar;
