import React from 'react';
import styles from './SingleEpisode.module.scss';

const SingleEpisode = (props) => {
    const title = (props.name != null) ? props.name : 'Untitled';
    // const season = (props.season != null) ? props.season : 0;
    const episode = (props.number != null) ? String(props.number).padStart(2, '0') : 0;
    const runtime = (props.runtime != null) ? `${props.runtime} minutes` : '';
    const airdate = (props.airdate != null) ? new Date(props.airdate).toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"}) : '(Airdate unknown)';
    const episodeImage = ((props.image != null) && (props.image.medium != null)) ?
        <img className={styles.episodeImage} src={props.image.medium} alt='episode pic'/>
    : '';

    return (
        <div className={styles.episodeBlock}>
            <div className={styles.episodeNumber}>{episode}</div>
            <div className={styles.episodeTitle}>{title}</div>
            <div className={styles.episodeData}>{airdate} ({runtime})</div>
            {episodeImage}
        </div>
    );
}

export default SingleEpisode;
