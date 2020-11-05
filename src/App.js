import React from "react";
import FetchShows from "./components/fetchShows";

import "./App.css";

class App extends React.Component { 
  state = {
    hasSearchedBefore: false,
    loading: true,
    searchTerm: '',
    shows: {}
  };


  handleFetchResults(shows) {
    this.setState({shows: shows});
    console.log(shows);
  }

  onWantSearch(searchTerm) {
    console.log('CALLED onWantSearch()');
    if (searchTerm != null) {
      this.setState({searchTerm: searchTerm});

      console.log('searchTerm: '+searchTerm);
      console.log(this.state);
    } 
    else {console.log('NO SEARCH TERM');}
  }

  render() {
    return (
      <React.Fragment>

        <div className="App">
          <header className="App-header">
            <h2>Find TV Shows</h2>
            
            Enter a term to search for: <input id="findSearchTerm" type="text" required />

            <button className="btn btn-primary" type='button' onClick={() => this.onWantSearch(document.getElementById('findSearchTerm').value)}>SEARCH</button>
          </header>
        </div>

        <main className="container">
          <FetchShows
            searchTerm={this.state.searchTerm}
            onFetch={this.handleFetchResults}
          />
        </main>
      </React.Fragment>
    );
  }

  formatRating(rating) {
    return rating === null ? '--' : rating;
  }
}

export default App;
