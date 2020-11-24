import React, { Component } from "react";
import PageLayout from './components/PageLayout'

import "./App.css";

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      // searchTerm: '',
      // loading: false,
      // shows: [],
      // loadingEpisodes: false,
      // episodes: [],
      // showWhat: ''
    };
  }

//   fetchEpisodes = (showId) => {
//     const apiEpisodesUrl = `https://api.tvmaze.com/shows/${showId}/episodes`;
    
// // console.log('Request to get episodes for show ID:'+showId);
// console.log('apiEpisodesUrl', apiEpisodesUrl);

//     this.setState({ loadingEpisodes: true });
    
//     fetch(apiEpisodesUrl)
//         .then(response => response.json())
//         .then(response => this.setState({ episodes: response, loadingEpisodes: false }))
// // .then(response => console.log('EPISODES', this.state.episodes))
//         .catch(err => { console.log(err); });
    
//     this.setState({ showWhat: 'episodes' });
//   }

  render() {
    return (
      <React.Fragment>
        <PageLayout />
      </React.Fragment>
    );
  }

}

export default App;
