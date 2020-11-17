import React from 'react';
import SingleShow from "./singleShow";
// import styles from './fetchShows.module.css';


const FetchShows = (props) => {
    const searchTerm = props.searchTerm.trim();
    const apiFullUrl = `https://api.tvmaze.com/search/shows?q=${searchTerm}`;

    if ((searchTerm == null) || (searchTerm === '')) return;
    
    // this.setState({ loading: true });
    
    let shows = [];
    fetch(apiFullUrl)
        .then(response => response.json())
        // .then(response => props.updateShows(response))
        .then(response => shows = response)
        .catch(err => { console.log(err); });
    
    // this.setState({ showWhat: 'shows' });

    // return('<h1>boogers</h1>');

    props.updateShows(shows, searchTerm);

    let retVal = ''
    if (shows.length === 0) {
        retVal = `<div className="centerMe">Could not find any shows matching "<strong>{this.state.searchTerm}</strong>"</div>`
    } else {
        retVal = 
            shows.map((show) => (
                <SingleShow {...show.show} key={show.show.id} showEpisodes={this.fetchEpisodes}/>
            ))
    }

    return (
        {retVal}
    )
  }


export default FetchShows;