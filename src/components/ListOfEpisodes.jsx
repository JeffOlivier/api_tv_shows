import React, { Component } from 'react';
import CurrentShow from './CurrentShow';
import SingleEpisode from './SingleEpisode';
import styles from './ListOfEpisodes.module.scss';

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
        // this.seasonChooser = this.seasonChooser.bind(this);
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

// console.log('response1', response1);
            if (response1.status !== 404) {
// console.log('NOW, I am fetching episodes');
                this.setState({ show: response1 });
                apiFullUrl += '/episodes';
                const apiCall2 = await fetch(apiFullUrl);
                const response2 = await apiCall2.json();

                if (response2.status !== 404) {
                    this.setState({ episodes: response2 });
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

    updateSeason(event) {
        const newSeason = event.target.value;
        if (newSeason !== this.props.season) {
            this.setState({ season: newSeason });
        }
    }

    // seasonChooser() {
        // if (this.state.numberOfSeason <= 1) return;

        // // onChange={(event) => this.updateSearchTerm(event.target.value)}
        // let retVal = '<select id="seasonSelector" onchange="(event) => this.updateSeason(event.target.value)">';
        // // let retVal = `<select id="seasonSelector" onchange=${this.updateSeason}>`;

        // let selected = '';
        // for (let i=1; i<= this.state.numberOfSeason; i++) {
        //     selected = (i === this.state.season) ? 'selected' : '';
        //     retVal += `<option value=${i} ${selected}>Season ${i}</option>`;
        // }
        // retVal += '</select>';
        
        // return retVal;
    // }

    render() {
        let seasonOptions = [];
        for (let i=1; i<= this.state.numberOfSeason; i++) {
            seasonOptions.push(<option value={i} key={i}>Season {i}</option>);
        }

        return (
            <div className={styles.episodesContainer}>
                <CurrentShow {...this.state.show} />
                <div className={styles.episodesBlock}>
                    {/* <div dangerouslySetInnerHTML={{__html: this.seasonChooser()}}></div> */}
                    {/* {this.seasonChooser()} */}
                    
<select className={styles.seasonOptions} value={this.state.season} onChange={this.updateSeason}>
{seasonOptions}
</select>

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