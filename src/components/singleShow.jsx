import React from 'react';
import styles from './singleShow.module.scss';

const SingleShow = (props) => {
    const imageUrl = ((props.image != null) && (props.image.medium != null)) ? props.image.medium : './no-image.png';
    const title = (props.name != null) ? props.name : 'Untitled';
    const summary = (props.summary != null) ? props.summary : '';
    // const moreLink = (props.url != null) ? 
    //     `<a href=${props.url} target="new"><button class="btn ${styles.btn_episodes}" type='button'>More about this show</button></a>` 
    // : '';

    // const episodesButtonClasses = `btn ${styles.btn_episodes}`;
// console.log('singleShow props',props);
    return (
        <div className={styles.showBlock}>
            <img src={imageUrl} alt='show pic'/>
            <div className={styles.showInfo}>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{__html: summary}}></div>
                {/* <div dangerouslySetInnerHTML={{__html: moreLink}}></div> */}
                
                <button  onClick={() => props.updateShowId(props.id)} type='button'>Show Episodes</button>
                {/* className={episodesButtonClasses} */}
            </div>
        </div>
    );
}

export default SingleShow;