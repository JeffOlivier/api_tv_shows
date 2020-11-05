import React, { Component } from "react";
import SingleShow from "./components/singleShow";

import "./App.css";

class App extends Component { 
  state = {
    hasSearchedBefore: false,
    searchTerm: '',
    loading: false,
    shows: []
  };

  async fetchResults(searchTerm1) {
    const searchTerm = searchTerm1.trim();
    const apiFullUrl = `https://api.tvmaze.com/search/shows?q=${searchTerm}`;

    if (searchTerm == null) return;
    
    this.setState({ loading: true });
    
    await fetch(apiFullUrl)
        .then(response => response.json())
        .then(response => this.setState({ shows: response, hasSearchedBefore: true, loading: false, searchTerm: searchTerm }))
        .catch(err => { console.log(err); });
  }

  render() {
    let foundShowsOutput;
    if (this.state.hasSearchedBefore && this.state.shows.length === 0) {
      foundShowsOutput = <div>Could not find any shows matching "<strong>{this.state.searchTerm}</strong>"</div>
    } else {
      foundShowsOutput = this.state.shows.map((show) => (
        <SingleShow {...show.show}/>
      ))
    }

    return (
      <React.Fragment>

        <div className="App">
          <header className="App-header2">
            <div className="fubar">
            <span className="fas fa-search fa-2x"></span>
            <input id="findSearchTerm" className="input_searchterm" type="text" placeholder="Enter search term" required />
            <button className="btn btn_search" type='button' onClick={() => this.fetchResults(document.getElementById('findSearchTerm').value)}>SEARCH</button>
            </div>
          </header>
        </div>

        <main className="container">
          <div id="listOfShows" className="results_block">
            {foundShowsOutput}
          </div>
        </main>
      </React.Fragment>
    );
  }

}

export default App;
