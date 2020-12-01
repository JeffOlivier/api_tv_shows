import React, { Component } from 'react';
import CurrentShow from './CurrentShow';
import SingleEpisode from './SingleEpisode';
import Seasons from './Seasons';
import styles from './ListOfEpisodes.module.scss';

class ListOfEpisodes extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: {},
          episodes: [],
          season: 1,
          numberOfSeasons: 1
        };

        this.fetchShowInfo = this.fetchShowInfo.bind(this);
        this.getNumberOfSeasons = this.getNumberOfSeasons.bind(this);
        this.updateSeason = this.updateSeason.bind(this);
    }

    componentDidMount() {
        this.fetchShowInfo();
    }
    
    fetchShowInfo = async () => {
        const showId = this.props.showId;
        if (showId !== undefined && Number.isInteger(showId) && showId > 0) {
            let apiFullUrl = `https://api.tvmaze.com/shows/${showId}`;
        
            const apiCall1 = await fetch(apiFullUrl)
            const response1 = await apiCall1.json()

            // If a show's information is return, then try to get all of it's episodes
            if (response1.status !== 404) {
                this.setState({ show: response1 });
                apiFullUrl += '/episodes';
                const apiCall2 = await fetch(apiFullUrl);
                const response2 = await apiCall2.json();

                // If episodes for the show are returned, then update the state of episodes
                if (response2.status !== 404) {
                    this.setState({ episodes: response2 });
                    this.getNumberOfSeasons(response2);
                }
            }
        } 
    };

    getNumberOfSeasons(response2) {
        let seasonNumber = 1;
        response2.map((episode) => (
            seasonNumber = (episode.season > seasonNumber) ? episode.season : seasonNumber
        ))
        this.setState({ numberOfSeasons: seasonNumber });
    }

    updateSeason(newSeason) {
        if (newSeason !== this.props.season) {
            this.setState({ season: newSeason });
        }
    }

    render() {
        return (
            <div className={styles.episodesContainer}>
                <CurrentShow {...this.state.show} />

                <div className={styles.episodesBlock}>
                    <Seasons totalSeasons={this.state.numberOfSeasons} chosenSeason={this.state.season} updateSeason={this.updateSeason} />

                    {this.state.episodes.map(episode => {
                        return (parseInt(episode.season) === parseInt(this.state.season)) ?
                            <SingleEpisode {...episode} key={episode.id} />
                        : '' }) 
                    }
                </div>
            </div>
        );
    }
}
 
export default ListOfEpisodes;
