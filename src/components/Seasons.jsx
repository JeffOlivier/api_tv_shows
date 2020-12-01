import React from 'react';
import styles from './Seasons.module.scss';

const Seasons = (props) => {
    let seasonOptions2 = [];
    for (let i=1; i<= props.totalSeasons; i++) {
        seasonOptions2.push(<div className={(i === props.chosenSeason) ? `btn ${styles.btn_season} ${styles.active}` : `btn ${styles.btn_season}`} key={i} onClick={() => props.updateSeason(i)}>{i}</div>);
    }

    return (
        <div className={styles.seasonsWrapper}>
            <div className={styles.title}>Seasons:</div>  {seasonOptions2}
        </div>
    );
}
 
export default Seasons;
