import React, { Component } from "react";
// import SingleShow from "./components/singleShow";
// import SingleEpisode from "./components/singleEpisode";
import PageLayout from './components/PageLayout'

import "./App.css";

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      loading: false,
      shows: [],
      loadingEpisodes: false,
      episodes: [],
      showWhat: ''
    };
  }





  fetchEpisodes = (showId) => {
    const apiEpisodesUrl = `https://api.tvmaze.com/shows/${showId}/episodes`;
    
// console.log('Request to get episodes for show ID:'+showId);
console.log('apiEpisodesUrl', apiEpisodesUrl);

    this.setState({ loadingEpisodes: true });
    
    fetch(apiEpisodesUrl)
        .then(response => response.json())
        .then(response => this.setState({ episodes: response, loadingEpisodes: false }))
// .then(response => console.log('EPISODES', this.state.episodes))
        .catch(err => { console.log(err); });
    
    this.setState({ showWhat: 'episodes' });
  }

  render() {
    // let foundShowsOutput;
    // if (!this.state.hasSearchedBefore) {
    //   foundShowsOutput = <div className="centerMe">Use the search field above to find TV shows</div> 
    // } else if (this.state.loading) {
    //    return <div className="centerMe">finding TV shows ...</div>
    // } else if (this.state.showWhat === 'episodes') {
    //   foundShowsOutput = this.state.episodes.map((episode) => (
    //     <SingleEpisode {...episode} key={episode.id} />
    //   ))
    // } else if (this.state.hasSearchedBefore && this.state.shows.length === 0) {
    //   foundShowsOutput = <div className="centerMe">Could not find any shows matching "<strong>{this.state.searchTerm}</strong>"</div>
    // } else {
    //   foundShowsOutput = this.state.shows.map((show) => (
    //     <SingleShow {...show.show} key={show.show.id} showEpisodes={this.fetchEpisodes}/>
    //   ))
    // }

    return (
      <React.Fragment>
        <PageLayout />
        {/* <div id="listOfShows" className="results_block">
          {foundShowsOutput}
        </div> */}
      </React.Fragment>
    );
  }

}

export default App;
