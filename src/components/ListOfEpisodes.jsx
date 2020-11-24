import React, { Component } from 'react';
import CurrentShow from './CurrentShow';
import SingleEpisode from './singleEpisode';
import styles from './listOfEpisodes.module.scss';

class ListOfEpisodes extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: {},
          episodes: [],
          season: 1,
          numberOfSeason: 1
        };

        this.fetchShowInfo = this.fetchShowInfo.bind(this);
        this.getNumberOfSeasons = this.getNumberOfSeasons.bind(this);
        this.seasonChooser = this.seasonChooser.bind(this);
    }

    componentDidMount() {
        this.fetchShowInfo();
    }

    // componentDidUpdate(previousProps, previouState) {
    //     // if (previouState.season !== this.state.season) {
    //     //     this.fetchEpisodes();
    //     // }
    //     if (previousProps.showId !== this.props.showId) {
    //         // this.fetchShow();
    //     }

    //     if (previouState.season !== this.state.season) {
    //         // this.fetchShow();
    //     }
    // }

    
    fetchShowInfo = async () => {
        console.log('I am fetching a single show!');
        const showId = this.props.showId;
        if (showId !== undefined && Number.isInteger(showId) && showId > 0) {
            let apiFullUrl = `https://api.tvmaze.com/shows/${showId}`;
        
            const apiCall1 = await fetch(apiFullUrl)
            const response1 = await apiCall1.json()

console.log('response1', response1);
            if (response1.status !== 404) {
console.log('NOW, I am fetching episodes');
                this.setState({ show: response1 });
                apiFullUrl += '/episodes';
                const apiCall2 = await fetch(apiFullUrl);
                const response2 = await apiCall2.json();

                if (response2.status !== 404) {
                    this.setState({ episodes: response2 });
                    console.log('response2', response2);
                    this.getNumberOfSeasons(response2);
                }
            }

        } else { console.log('FAILED TO FETCH A SHOW'); return; }
    };

    getNumberOfSeasons(response2) {
        let seasonNumber = 1;
        response2.map((episode) => (
            seasonNumber = (episode.season > seasonNumber) ? episode.season : seasonNumber
        ))

        this.setState({ numberOfSeason: seasonNumber });
    }

    seasonChooser() {
        if (this.state.numberOfSeason <= 1) return;

        let retVal = '<select>';
        let selected = '';
        for (let i=1; i<= this.state.numberOfSeason; i++) {
            selected = (i === this.state.season) ? 'selected' : '';
            retVal += `<option value=${i} ${selected}>Season ${i}</option>`;
        }
        retVal += '</select>';
        
        return retVal;
    }

    // fetchEpisodes = async () => {
    //     console.log('I am fetching episodes for season '+this.state.season+'!');
    //     // const searchTerm = this.state.searchTerm.trim();
    //     // if ((searchTerm == null) || (searchTerm === '')) return;
    //     const apiFullUrl = `https://api.tvmaze.com/search/shows?q=${season}`;
    
    //     const apiCall = await fetch(apiFullUrl)
    //     const response = await apiCall.json()
    //     this.setState({ episodes: response });
    // };

    render() {

        return (
            <React.Fragment>
                {/* {(() => { if (this.state.show.length > 0) { return <div className={styles.showContainer}><CurrentShow {...this.state.show} /></div> })()} */}
                <div className={styles.showContainer}><CurrentShow {...this.state.show} /></div>
                <div className={styles.episodesContainer}>
                    <div dangerouslySetInnerHTML={{__html: this.seasonChooser()}}></div>
                    {/* {this.seasonChooser()} */}
                    {this.state.episodes.map(episode => {
                        return (episode.season === this.state.season) ?
                            <SingleEpisode {...episode} key={episode.id} />
                        : '' }) 
                    }
                    {/* {this.state.episodes.map(episode => ( <SingleEpisode {...episode} key={episode.id} />)) } */}
                </div>
            </React.Fragment>
        );
    }
}
 
export default ListOfEpisodes;