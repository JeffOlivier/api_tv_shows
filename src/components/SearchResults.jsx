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

      this.updateCurrentShowState = this.updateCurrentShowState.bind(this);
      this.updateShowId = this.updateShowId.bind(this);
      this.updateEpisodessState = this.updateEpisodessState.bind(this);

      if (this.props.searchTerm.trim() !== '') {
        this.state.showShows = true;
      }
    }

    componentDidUpdate(previousProps, previouState) {
        if (previousProps.searchTerm !== this.props.searchTerm) {
            this.setState({ showShows: true, showEpisodes: false });
        }
    }

    updateCurrentShowState = (currentShow) => {
        this.setState({ currentShow: currentShow });
    }

    updateShowId = (showId) => {
        this.setState({ showId: showId, showShows: false, showEpisodes: true });
    }

    updateEpisodessState = (episodes) => {
        this.setState({ episodes: episodes });
    }

    render() {
        return (
            <div className={styles.searchResultsBlock}>
                {(() => {
                    if (this.state.showShows) {
                        return <ListOfShows searchTerm={this.props.searchTerm} updateShowId={this.updateShowId} />
                    }
                    if (this.state.showEpisodes) {
                        return <ListOfEpisodes showId={this.state.showId} />
                    }
                })()}
            </div>
        );
    }
    
}
    
export default SearchResults;
