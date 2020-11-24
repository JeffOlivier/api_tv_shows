import React from 'react';
// import styles from './currentShow.module.scss';

const CurrentShow = (props) => {
    // if (typeof(props) !== undefined && props.length <= 0) return;

    const imageUrl = ((props.image != null) && (props.image.medium != null)) ? props.image.medium : './no-image.png';
    const title = (props.name != null) ? props.name : 'Untitled';
    const summary = (props.summary != null) ? props.summary : '';
    const rating = (props.rating != null) ? props.rating : 0;

    return (
        <React.Fragment>
            <img src={imageUrl} alt='show pic'/>
            <h2>{title}</h2>
            <h1>{rating} STARS</h1>
            <div dangerouslySetInnerHTML={{__html: summary}}></div>
        </React.Fragment>
    )
}
 
export default CurrentShow;
