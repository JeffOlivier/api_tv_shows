import React, { Component } from 'react'
import SingleShow from './singleShow'
// import SingleEpisode from './SingleEpisode'

import styles from './SearchResults.module.scss'

class SearchResults extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        shows: [],
        episodes: [],
        showWhat: ''
      };
    }
 
    // componentDidUpdate(previousProps, previouState) {
    //     if (previouState.shows !== this.state.shows) {
    //       clearTimeout(this.timerId);
    //       setTimeout(this.searchForShows.bind(this), 1000);
    //     }
    // }

 /* <div id="listOfShows" className="results_block">
    {foundShowsOutput}
</div> */
handleDelete = (counterId) => {
    console.log("Event Handler Called -", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
    // or for simplicity, since the key-value names are the same: this.setState({ counters });
  };
//   onClick={() => this.props.onIncrement(this.props.counter)}

fetchShows = async () => {
    console.log('I am fetching shows!');
    const searchTerm = this.props.searchTerm.trim();
    const apiFullUrl = `https://api.tvmaze.com/search/shows?q=${searchTerm}`;

    // if ((searchTerm == null) || (searchTerm === '')) return;
    
    // this.setState({ loading: true });

    const apiCall = await fetch(apiFullUrl)
    const response = await apiCall.json()
    this.setState({ shows: response, loading: false });
        // .catch(err => { console.log(err); });

    // fetch(apiFullUrl)
    //     .then(response => response.json())
    //     .then(response => this.setState({ shows: response, loading: false }))
    //     .catch(err => { console.log(err); });

    // fetch = async () => {
    //     const apiCall = await fetch(apiFullUrl)
    //     const response = await apiCall.json()
        
    // }
    
    // this.setState({ showWhat: 'shows' });
};

    render() {
        let foundShowsOutput;
        // if (!this.props.hasSearchedBefore) {
    // }
        if (this.props.searchTerm === '') {
            console.log('SearchResults.jsx - 1');
            foundShowsOutput = '<div class="centerMe">Use the search field above to find TV shows</div>';
        } else if (this.state.shows.length === 0) {
            console.log('SearchResults.jsx - 2');
            this.fetchShows();
        } else {
            console.log('SearchResults.jsx - 3');
            foundShowsOutput = this.state.shows.map((show) => (
                <SingleShow {...show.show} key={show.show.id} /> //showEpisodes={this.fetchEpisodes}/>
            ))
            // foundShowsOutput = `The Results 2 : ${this.props.searchTerm}`;

            // foundShowsOutput = `<div id="listOfShows" className="results_block">${foundShowsOutput}</div>`;
        // } else if (this.state.showWhat === 'episodes') {
        //     foundShowsOutput = this.state.episodes.map((episode) => (
        //       <SingleEpisode {...episode} key={episode.id} />
        //     ))
        //   } else if (this.state.hasSearchedBefore && this.state.shows.length === 0) {
        //     foundShowsOutput = <div className="centerMe">Could not find any shows matching "<strong>{this.state.searchTerm}</strong>"</div>
        //   } else {
        //     foundShowsOutput = this.state.shows.map((show) => (
        //       <SingleShow {...show.show} key={show.show.id} showEpisodes={this.fetchEpisodes}/>
        //     ))

        // } else if (this.state.loading) {
        //     return <div className="centerMe">finding TV shows ...</div>
        // } else if (this.state.showWhat === 'episodes') {
        //     foundShowsOutput = this.state.episodes.map((episode) => (
        //     <SingleEpisode {...episode} key={episode.id} />
        //     ))
        // } else if (this.state.hasSearchedBefore && this.state.shows.length === 0) {
        //     foundShowsOutput = <div className="centerMe">Could not find any shows matching "<strong>{this.state.searchTerm}</strong>"</div>
        // } else {
        //     foundShowsOutput = this.state.shows.map((show) => (
        //     <SingleShow {...show.show} key={show.show.id} showEpisodes={this.fetchEpisodes}/>
        //     ))
        }
    console.log('foundShowsOutput',foundShowsOutput);

        return (
            <React.Fragment>
                <div className={styles.searchResultsBlock}>
                    {/* <div dangerouslySetInnerHTML={{__html: foundShowsOutput}}></div> */}
                    {foundShowsOutput}
                </div>
            {/* <SingleShow {...show.show} key={show.show.id} showEpisodes={this.fetchEpisodes}/> */}
            </React.Fragment>
        );
    }
    
}
    
export default SearchResults;
