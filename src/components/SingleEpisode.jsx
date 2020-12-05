import React from 'react';
import styles from './SingleEpisode.module.scss';

const SingleEpisode = (props) => {
    const title = (props.name != null) ? props.name : 'Untitled';
    const season = (props.season != null) ? props.season : 0;
    const episode = (props.number != null) ? String(props.number).padStart(2, '0') : 0;
    const episodeSm = (props.number != null) ? props.number : 0;
    const runtime = (props.runtime != null) ? `(${props.runtime}m)` : '';
    const airdate = (props.airdate != null) ? new Date(props.airdate).toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"}) : '(Airdate unknown)';
    const episodeImage = ((props.image != null) && (props.image.medium != null)) ?
        <img className={styles.image} src={props.image.medium} alt='episode pic'/>
    : '';

    const summary = (props.summary != null) ? props.summary : null;

    let fubar = '';
    if (summary) {
        fubar = `<div className={styles.arrow}><i class="fas fa-chevron-down"></i></div>
        <div className={styles.summary}>{summary}</div>`
    }

    return (
        <div className={styles.episodeWrapper}>
        <div className={styles.episodeBlock}>
            <div className={styles.numberWrapper}><div>{episode}</div></div>
            <div className={styles.title}><span className={styles.seasonEpisode}>S{season}:E{episodeSm} </span>{title} <span className={styles.runtime}>{runtime}</span></div>
            <div className={styles.meta}>{airdate}</div>
            <div className={styles.arrow}><i className="fas fa-chevron-down"></i></div>
            {episodeImage}
        </div>
        <div className={styles.summaryWrapper}><div className={styles.summary} dangerouslySetInnerHTML={{__html: summary}}></div></div>
        </div>
    );
}

export default SingleEpisode;
