import React from 'react';
// import styles from './singleEpisode.module.css';

const SingleEpisode = (props) => {
    // const imageUrl = ((props.image != null) && (props.image.medium != null)) ? props.image.medium : './no-image.png';
    const title = (props.name != null) ? props.name : 'Untitled';
    const season = (props.season != null) ? props.season : 0;
    const episode = (props.number != null) ? props.number : 0;
    const runtime = (props.runtime != null) ? props.runtime : '00';
    // const summary = (props.summary != null) ? props.summary : '';
    // const moreLink = (props.url != null) ? 
    //     `<a href=${props.url} target="new"><button class="btn ${styles.btn_episodes}" type='button'>More about this show</button></a>` 
    // : '';

    // const episodesButtonClasses = `btn ${styles.btn_episodes}`;

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
        <div>S{season}:E{episode} - {title} ({runtime} minutes)</div>
    );
}

export default SingleEpisode;