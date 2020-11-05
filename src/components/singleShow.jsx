import React from 'react';
import styles from './singleShow.module.css';

const SingleShow = (props) => {
    return (
        <div className={styles.showBlock}>
            <img src={props.image.medium} alt='show pic'/>
            <div className={styles.showInfo}>
                <h1>{props.name}</h1>
                <div dangerouslySetInnerHTML={{__html: props.summary}}></div>
                <a href={props.url} target="new">
                    <button className={`btn ${styles.btn_episodes}`} type='button'>More about this show</button>
                </a>
            </div>
        </div>
    );
}

export default SingleShow;