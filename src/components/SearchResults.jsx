import React, { Component } from 'react';
import ListOfShows from './ListOfShows';
import ListOfEpisodes from './ListOfEpisodes';

import styles from './SearchResults.module.scss';

class SearchResults extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        episodes: [],

        showId: 0,
        showShows: false,
        showEpisodes: false
      };

      if (this.props.searchTerm.trim() !== '') {
        this.state.showShows = true;
      }
    }
 
    // componentDidMount() {
    //     if (this.props.searchTerm !== '') {
    //         this.setState({ showShows: true });
    //     }
    // }

    componentDidUpdate(previousProps, previouState) {
        if (previousProps.searchTerm !== this.props.searchTerm) {
            this.setState({ showShows: true, showEpisodes: false });
            console.log('searchTerm changed from '+previousProps.searchTerm+' to '+this.props.searchTerm);
        // } else if ((this.state.showId !== 0) && (previouState.showId !== this.state.showId)) {
        //     this.setState({ showShows: false, showEpisodes: true });
        //     console.log('showId changed from '+previouState.showId+' to '+this.state.showId);
        // } else {
        //     this.setState({ showShows: false, showEpisodes: true });
        //     console.log('clearing shit out');
        }


        // if (previouState.shows !== this.state.shows) {
        //   clearTimeout(this.timerId);
        //   setTimeout(this.searchForShows.bind(this), 1000);
        // }

        // if (this.props.searchTerm === '') {
        //     console.log('SearchResults.jsx - 1');
        //     // foundShowsOutput = '';
        //     this.setState({ showShows: false, showEpisodes: false });
        // } else if (!this.state.showEpisodes) {
        //     console.log('SearchResults.jsx - 2');
        //     // this.fetchShows();
        //     this.setState({ showShows: true, showEpisodes: false });
        // } else {
        //     console.log('SearchResults.jsx - 3');
        //     // foundShowsOutput = this.state.shows.map((show) => (
        //     //     <SingleShow {...show.show} key={show.show.id} /> //showEpisodes={this.fetchEpisodes}/>
        //     // ))
        //     this.setState({ showShows: false, showEpisodes: true });
    }

    // updateShowsState = (shows) => {
    //     this.setState({ shows: shows });
    // }

    updateCurrentShowState = (currentShow) => {
        this.setState({ currentShow: currentShow });
    }

    updateShowId = (showId) => {
        console.log('Updating the show ID to be '+showId);
        this.setState({ showId: showId, showShows: false, showEpisodes: true });
    }

    updateEpisodessState = (episodes) => {
        this.setState({ episodes: episodes });
    }


 /* <div id="listOfShows" className="results_block">
    {foundShowsOutput}
</div> */
// handleDelete = (counterId) => {
//     console.log("Event Handler Called -", counterId);
//     const counters = this.state.counters.filter((c) => c.id !== counterId);
//     this.setState({ counters: counters });
//     // or for simplicity, since the key-value names are the same: this.setState({ counters });
//   };
//   onClick={() => this.props.onIncrement(this.props.counter)}

    render() {
        // let fubar = '';
        // if (this.state.showShows) {
        //     console.log('CALLING <ListOfShows>');
        //     fubar = <ListOfShows searchTerm={this.props.searchTerm} updateShowId={this.updateShowId} />
        // }
        // else if (this.state.showEpisodes) {
        //     console.log('CALLING <ListOfEpisodes>');
        //     fubar = <ListOfEpisodes showId={this.state.showId} />
        // }
        return (
            <div className={styles.searchResultsBlock}>
                {(() => {
                    if (this.state.showShows) {
                        console.log('CALLING <ListOfShows>');
                        return <ListOfShows searchTerm={this.props.searchTerm} updateShowId={this.updateShowId} />
                    }
                    if (this.state.showEpisodes) {
                        console.log('CALLING <ListOfEpisodes>');
                        return <ListOfEpisodes showId={this.state.showId} />
                    }
                })()}
                {/* {fubar} */}
            </div>
        );
    }
    
}
    
export default SearchResults;
