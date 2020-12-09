import React from 'react';
import StarRating from './StarRating';
import styles from './SingleShow.module.scss';

const SingleShow = (props) => {
    const imageUrl = ((props.image != null) && (props.image.medium != null)) ? props.image.medium : './images/no-image.png';
    const title = (props.name != null) ? props.name : 'Untitled';
    const summary = (props.summary != null) ? props.summary : '';
    const rating = (props.rating && props.rating.average != null) ? props.rating.average : 0;
    // const moreLink = (props.url != null) ? 
    //     `<a href=${props.url} target="new"><button class="btn ${styles.btn_episodes}" type='button'>More about this show</button></a>` 
    // : '';

    const episodesButtonClasses = `btn ${styles.btn_episodes}`;

    return (
        <div className={styles.showBlock}>
            <img src={imageUrl} alt='show pic'/>
            <div className={styles.showInfo}>
                <h1>{title}</h1>
                <StarRating rating={rating} />
                <div className={styles.showSummary} dangerouslySetInnerHTML={{__html: summary}}></div>
                {/* <div dangerouslySetInnerHTML={{__html: moreLink}}></div> */}
                
                <button className={episodesButtonClasses} onClick={() => props.updateShowId(props.id)} type='button'>Episodes</button>
                {/* className={episodesButtonClasses} */}
            </div>
        </div>
    );
}

export default SingleShow;