import React, { Component } from "react";
// import FetchShows from "./components/fetchShows";

import "./App.css";

class App extends Component { 
  state = {
    hasSearchedBefore: false,
    searchTerm: '',
    loading: false,
    shows: {}
  };

  async fetchResults(searchTerm1) {
    const url = "https://api.tvmaze.com/search/shows?q=";
    const searchTerm = searchTerm1.trim();
    let listOfShows = [];

    if (searchTerm == null) return;
    
    this.setState({ loading: true });
    
    await fetch(url+searchTerm)
        .then(response => response.json())
        .then(response => { listOfShows = response; })
  //.then( data => {console.log('listOfShows',listOfShows); })
        .catch(err => { console.log(err); });
    
        // render() {
        //     if (!this.state.hasSearchedBefore) {
        //         return <div>Use the search field above to find shows</div> 
        //     }
    
        //     if (this.state.loading) {
        //         return <div>loading shows ...</div>
        //     }
    
        //     if (this.state.shows.length <= 0) {
        //         return <div>Could not find shows matching {this.state.searchTerm}</div>
        //     }
            
    // return (
    //     <div>
    //         <ul>
    //             {this.state.shows.map((returnedList) => (
    //                 <li key={returnedList.show.id}><a href={returnedList.show.url} target="new">{returnedList.show.name}</a> : ({returnedList.show.rating.average}) stars)</li>
    //             ))}
    //         </ul>
    //     </div>
    // );
console.log('listOfShows', listOfShows);

let tmpoutput = `<div class="results_block">`;
if (listOfShows.length > 0) {
    for (var i = 0; i < listOfShows.length; i++){
      var singleShowObj = listOfShows[i];
      tmpoutput += `<div class="showBlock">
  <img src=${singleShowObj.show.image.medium}>
  <div class="showInfo">
      <h1>${singleShowObj.show.name}</h1>
      <p>${singleShowObj.show.summary}</p>
      <a href=${singleShowObj.show.url} target="new">
        <button class="btn btn_episodes" type='button'>More about this show</button>
      </a>
  </div>
</div>`;
    }
    //${this.formatRating(singleShowObj.show.rating.average)}

    let showsOutput = document.getElementById("listOfShows");
//var text = document.createTextNode("This just got added");

    showsOutput.innerHTML = tmpoutput;
  }
  else { tmpoutput += `Could not find shows matching "<strong>${searchTerm1}</strong>"`; }

  tmpoutput += `</div>`;

  console.log(tmpoutput);
}

  render() {
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
          <div id="listOfShows"></div>
        </main>
      </React.Fragment>
    );
  }

  formatRating(rating) {
    return rating === null ? 'rating n/a' : `${rating} stars`;
  }
}

export default App;
