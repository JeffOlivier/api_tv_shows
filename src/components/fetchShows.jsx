import React from 'react';

class FetchShows extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasSearchedBefore: false,
            loading: true,
            shows: {}
        };
    }

    componentDidMount() {
console.log(this.props);
        const url = "https://api.tvmaze.com/search/shows?q=";
        const searchTerm = this.props.searchTerm;
const searchTermTEST = 'walking';
console.log('CALLED componentDidMount - searchTerm: '+searchTermTEST);
        if (searchTerm == null) return;

//const searchTerm = this.state.searchTerm.trim();
this.setState({ loading: true });

        fetch(url+searchTerm)
            .then(response => response.json())
            //.then(data => this.setState({ hasSearchedBefore: true, shows: data, loading: false, searchTerm: searchTerm }))
.then(data => this.props.onFetch(data))
            .then(data => this.setState({ hasSearchedBefore: true, loading: false }))
            //.then(data => this.setState({ hasSearchedBefore: true, shows: data, loading: false }))
            .catch(err => { console.log(err); });
        
console.log ('searchTerm: '+this.props.searchTerm);
//console.log (this.props.state.shows);
    }

    render() {
        if (!this.state.hasSearchedBefore) {
            return <div>Use the search field above to find shows</div> 
        }

        if (this.state.loading) {
            return <div>loading shows ...</div>
        }

        if (this.state.shows.length <= 0) {
            return <div>Could not find shows matching {this.state.searchTerm}</div>
        }
        
        return (
            <div>
                <ul>
                    {this.state.shows.map((show) => (
                        <li key={show.show.id}><a href={show.show.url} target="new">{show.show.name}</a> : ({this.formatRating(null)}{show.show.rating.average}) stars)</li>
                    ))}
                </ul>
            </div>
        );
    }

    formatRating(rating) {
        return rating === null ? '--' : rating;
    }
}

export default FetchShows;
