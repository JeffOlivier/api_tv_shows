import React, { Component } from 'react';
import SingleShow from './SingleShow';
import styles from './ListOfShows.module.scss';

class ListOfShows extends Component {
    constructor(props) {
        super(props);
        this.state = {
          shows: [],
        };

        this.fetchShows = this.fetchShows.bind(this);
    }

    componentDidMount() {
        if (this.props.searchTerm.trim() !== '') {
            this.fetchShows();
        }
    }

    componentDidUpdate(previousProps, previouState) {
        if (previousProps.searchTerm !== this.props.searchTerm) {
            this.fetchShows();
        }
    }

    fetchShows = async () => {
        const searchTerm = this.props.searchTerm.trim();
        if ((searchTerm == null) || (searchTerm === '')) return;
        const apiFullUrl = `https://api.tvmaze.com/search/shows?q=${searchTerm}`;
    
        const apiCall = await fetch(apiFullUrl)
        const response = await apiCall.json()
        this.setState({ shows: response });
            // .catch(err => { console.log(err); });
    
        // fetch(apiFullUrl)
        //     .then(response => response.json())
        //     .then(response => this.setState({ shows: response, loading: false }))
        //     .catch(err => { console.log(err); });
    };

    render() {
        return (
            <div className={styles.showsContainer}>
                { this.state.shows.map((show) => (
                    <SingleShow {...show.show} key={show.show.id} updateShowId={this.props.updateShowId} />
                )) }
            </div>
        );
    }
}
 
export default ListOfShows;