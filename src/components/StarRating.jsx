import React from 'react';
import styles from './StarRating.module.scss';
// import "./StarRating.module.scss";

const StarRating = (props) => {
    const rating = (props.rating) ? props.rating : 100;
    const starPercentage = ((rating / 10) * 100)+'%';

    return (
        <div className={styles.starsOuter}>
            <div className={styles.starsInner} style={{width: starPercentage}}></div>
        </div>
    );
}
 
export default StarRating;
