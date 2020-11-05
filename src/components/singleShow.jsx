import React from 'react';
import styles from './singleShow.module.css';

const SingleShow = (props) => {
    const imageUrl = ((props.image != null) && (props.image.medium != null)) ? props.image.medium : './no-image.png';
    const title = (props.name != null) ? props.name : 'Untitled';
    const summary = (props.summary != null) ? props.summary : '';
    const moreLink = (props.url != null) ? props.url : '';

    return (
        <div className={styles.showBlock}>
            <img src={imageUrl} alt='show pic'/>
            <div className={styles.showInfo}>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{__html: summary}}></div>
                <a href={moreLink} target="new">
                    <button className={`btn ${styles.btn_episodes}`} type='button'>More about this show</button>
                </a>
            </div>
        </div>
    );
}

export default SingleShow;