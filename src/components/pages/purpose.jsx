import React from "react";
// import { Link } from "react-router-dom";
import styles from "./purpose.module.scss";

const ReadMe = () => {
    return (
        <div className={styles.readmeContainer}>
            <div className={styles.readmeImage}>
                <img src="/images/television.png" alt="TV" />
            </div>
            <div className={styles.purposeContainer}>
                <h3>THE PURPOSE OF THIS APP WAS TO DEMONSTRATE THE USE OF:</h3>
                {/* <strong>This app was created to demonstrate the use of:</strong> */}
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Local state management</li>
                    <li>Multiple React components</li>
                    <li>
                        Passing state and pointers to functions to child
                        components
                    </li>
                    <li>Accessing URL parameters</li>
                    <li>Responsive CSS Grid</li>
                    <li>Modular Sass</li>
                    <li>JavaScript ES6</li>
                    <li>JavaScript Fetch API with async/await</li>
                </ul>

                <h3>FUTURE ENHANCEMENTS</h3>
                <ul>
                    <li>React Hooks</li>
                    <li>Helmet to inject meta into the &lt;head&gt;</li>
                </ul>
            </div>

            <div className={styles.howtoContainer}>
                <h3>HOW TO USE THIS APP</h3>
                <ul>
                    <li>Type a search term in the search box</li>
                    <li>
                        After 1 second (1000 ms), an API call to api.tvmaze.com
                        will be made and return a list of the top 10 shows based
                        on relevance to your search term
                    </li>
                    <li>
                        You can then click on the <strong>EPISODES</strong>{" "}
                        button to get a list of all the show's episodes broken
                        out by season
                    </li>
                    <li>
                        You can link to a specific show by knowing it's ID and
                        appending "/show/[show ID]" to the URL
                    </li>
                </ul>
            </div>

            {/* <div className="menuItem">
                <a
                    href="https://github.com/JeffOlivier/api_tv_shows"
                    target="_blank"
                    rel="noreferrer"
                    title="tv show finder on GitHub"
                >
                    <i className="fas fa-code-branch"></i>{" "}
                    <i className="fab fa-github"></i>
                    GitHub REPO
                </a>
            </div> */}
        </div>
    );
};

export default ReadMe;
