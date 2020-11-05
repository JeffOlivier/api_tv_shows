import React from 'react';

const SingleShow = (props) => {
    return (
        <div class="showBlock">
        <img src={props.image.medium} alt='show pic'/>
        <div class="showInfo">
            <h1>{props.name}</h1>
            <div dangerouslySetInnerHTML={{__html: props.summary}}></div>
            <a href={props.url} target="new">
            <button class="btn btn_episodes" type='button'>More about this show</button>
            </a>
        </div>
        </div>
    );
}

export default SingleShow;