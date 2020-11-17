import React,{ Component } from 'react';
// import styles from './showEpisodes.module.css';

class ShowEpisodes extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showId: props.showId,
          loadingEpisodes: false,
          episodes: [],
          season: 1
        };
    
        //this.handleValidateInput = this.handleValidateInput.bind(this);
      }
//console.log('I am getting episodes');
//const ShowEpisodes = (props) => {

    // // const imageUrl = ((props.image != null) && (props.image.medium != null)) ? props.image.medium : './no-image.png';
    // const title = (props.name != null) ? props.name : 'Untitled';
    // // const season = (props.season != null) ? props.season : 0;
    // const episode = (props.number != null) ? String(props.number).padStart(2, '0') : 0;
    // const runtime = (props.runtime != null) ? `${props.runtime} minutes | ` : '';
    // const airdate = (props.airdate != null) ? new Date(props.airdate).toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"}) : '(Airdate unknown)';

    fetchEpisodes = () => {
    // fetchEpisodes = (props.showId) => {
        const apiEpisodesUrl = `https://api.tvmaze.com/shows/${this.state.showId}/episodes`;
        
    // console.log('Request to get episodes for show ID:'+showId);
    console.log('apiEpisodesUrl', apiEpisodesUrl);
    
        // this.setState({ loadingEpisodes: true });
        
    //     fetch(apiEpisodesUrl)
    //         .then(response => response.json())
    //         .then(response => props.updateEpisodesState(response))
    // // .then(response => console.log('EPISODES', this.state.episodes))
    //         .catch(err => { console.log(err); });
    // //   }

    // //   foundShowsOutput = this.state.episodes.map((episode) => (
    // this.state.episodes.map((episode) => (
    //     // <SingleEpisode {...episode} key={episode.id} />
    //     console.log('episode ID: '+episode.id);
    //   ))
    }


    render() {
        const fubar="fubar";
        return (
            <div>{fubar}</div>
            // <div className={styles.showBlock}>
            //     <img src={imageUrl} alt='show pic'/>
            //     <div className={styles.showInfo}>
            //         <h1>{title}</h1>
            //         <div dangerouslySetInnerHTML={{__html: summary}}></div>
            //         {/* <div dangerouslySetInnerHTML={{__html: moreLink}}></div> */}
            //         <button className={episodesButtonClasses} onClick={() => props.showEpisodes(props.id)} type='button'>Show Episodes</button>
            //     </div>
            // </div>
            // <div><img src={imageUrl} alt='show pic'/> S{season}:E{episode} - {title} ({runtime} minutes)</div>

            // <div className={styles.episodeBlock}>
            //     <div className={episodeButtonClasses}>{episode}</div>
            //     {/* <div className={styles.episodeInfo}> */}
            //         <div className={styles.episodeTitle}>{title}</div>
            //         <div className={styles.episodeData}>{runtime}{airdate}</div>
            //     {/* </div> */}
            // </div>
        );
    }
}

export default ShowEpisodes;