import React from 'react';
import styles from './SingleEpisode.module.scss';

const SingleEpisode = (props) => {
    // const imageUrl = ((props.image != null) && (props.image.medium != null)) ? props.image.medium : './no-image.png';
    const title = (props.name != null) ? props.name : 'Untitled';
    // const season = (props.season != null) ? props.season : 0;
    const episode = (props.number != null) ? String(props.number).padStart(2, '0') : 0;
    const runtime = (props.runtime != null) ? `${props.runtime} minutes` : '';
    const airdate = (props.airdate != null) ? new Date(props.airdate).toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"}) : '(Airdate unknown)';
// //dateFormat(props.airdate, "mmmm d, yyyy")
//     let d = new Date(airdate);
//     // Date.prototype.getDate()
//     // Date.prototype.getUTCMonth() (0-11)
//     // Date.prototype.getFullYear()
//     const date2 = d.toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"}); 

    // const summary = (props.summary != null) ? props.summary : '';
    // const moreLink = (props.url != null) ? 
    //     `<a href=${props.url} target="new"><button class="btn ${styles.btn_episodes}" type='button'>More about this show</button></a>` 
    // : '';

    const episodeButtonClasses = `btn ${styles.btn_episode} ${styles.episodeNumber}`;

    const episodeImage = ((props.image != null) && (props.image.medium != null)) ?
        <img className={styles.episodeImage} src={props.image.medium} alt='episode pic'/>
    : '';

    return (
        // <div className={styles.showBlock}>
        //     <img src={imageUrl} alt='show pic'/>
        //     <div className={styles.showInfo}>
        //         <h1>{title}</h1>
        //         <div dangerouslySetInnerHTML={{__html: summary}}></div>
        //         {/* <div dangerouslySetInnerHTML={{__html: moreLink}}></div> */}
        //         <button className={episodesButtonClasses} onClick={() => props.showEpisodes(props.id)} type='button'>Show Episodes</button>
        //     </div>
        // </div>
        // <div><img src={imageUrl} alt='show pic'/> S{season}:E{episode} - {title} ({runtime} minutes)</div>

        <div className={styles.episodeBlock}>
            <div className={episodeButtonClasses}>{episode}</div>
            <div className={styles.episodeTitle}>{title}</div>
            <div className={styles.episodeData}>{airdate} ({runtime})</div>
            {/* <img className={styles.episodeImage} src={imageUrl} alt='episode pic'/> */}
            {episodeImage}
        </div>
    );
}

export default SingleEpisode;