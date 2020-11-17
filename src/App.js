import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";

// import { useParams } from "react-router";

import FetchShows from "./components/fetchShows";

// import SingleShow from "./components/singleShow";

// import SingleEpisode from "./components/singleEpisode";
import ShowEpisodes from "./components/showEpisodes";

import "./App.css";

// A custom hook that builds on useLocation to parse
// the query string for you.
// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// This is my layout component
class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      hasSearchedBefore: false,
      searchTerm: 'jeff',
      loading: false,
      shows: [],
      isSearchFormValid: true,
      loadingEpisodes: false,
      episodes: [],
      showWhat: ''
    };

    this.handleValidateInput = this.handleValidateInput.bind(this);
  }

  handleValidateInput = e => {
    const validChars = /^[a-zA-Z0-9]+$/i;
    const searchInput = e.target.value;

    const isFormInputValid = validChars.test(searchInput);
    this.setState({ isSearchFormValid: isFormInputValid });

    document.getElementById('searchBtn').disabled = !(isFormInputValid);
  
    if (isFormInputValid) {
      document.getElementById("findSearchTerm").classList.remove("textInputError");
      document.getElementById("searchBtn").classList.remove("submitButtonDisable");
      document.getElementById("inputErrorMessage").style.display = "none";
    } else {
      document.getElementById("findSearchTerm").classList.add("textInputError");
      document.getElementById("searchBtn").classList.add("submitButtonDisable");
      document.getElementById("inputErrorMessage").style.display = "block";
    }
  }

  // fetchShows = (searchTerm1) => {
  //   const searchTerm = searchTerm1.trim();
  //   const apiFullUrl = `https://api.tvmaze.com/search/shows?q=${searchTerm}`;

  //   if ((searchTerm == null) || (searchTerm === '')) return;
    
  //   this.setState({ loading: true });
    
  //   fetch(apiFullUrl)
  //       .then(response => response.json())
  //       .then(response => this.setState({ shows: response, hasSearchedBefore: true, loading: false, searchTerm: searchTerm }))
  //       .catch(err => { console.log(err); });
    
  //   this.setState({ showWhat: 'shows' });

  //   return('<h1>boogers</h1>');
  // }

  fetchEpisodes = (showId) => {
//     const apiEpisodesUrl = `https://api.tvmaze.com/shows/${showId}/episodes`;
    
// // console.log('Request to get episodes for show ID:'+showId);
// console.log('apiEpisodesUrl', apiEpisodesUrl);

//     this.setState({ loadingEpisodes: true });
    
//     fetch(apiEpisodesUrl)
//         .then(response => response.json())
//         .then(response => this.setState({ episodes: response, loadingEpisodes: false }))
// // .then(response => console.log('EPISODES', this.state.episodes))
//         .catch(err => { console.log(err); });
    
//     this.setState({ showWhat: 'episodes' });

console.log('Clicked on SHOW EPISODES for show ID:'+showId);
    <ShowEpisodes showId={showId} updateEpisodesState={this.updateEpisodesState} />
  }

  updateEpisodesState = (episodes) => {
    this.setState({ episodes: episodes, showWhat: 'episodes' });
  }

  updateShowSearchState = (shows, searchTerm) => {
    this.setState({ shows: shows, searchTerm: searchTerm });
  }

  getAndUpdateSearchTerm = () => {
    if (document.getElementById('findSearchTerm') != null) {
      this.setState({ searchTerm: document.getElementById('findSearchTerm').value });
    }
  }

  render() {
    // let query = useQuery();
    // let term = query.get("term");

    // let foundShowsOutput;
    // if (!this.state.hasSearchedBefore) {
    //   foundShowsOutput = <div className="centerMe">Use the search field above to find TV shows</div> 
    // } else if (this.state.loading) {
    //    return <div className="centerMe">finding TV shows ...</div>
//     } else if (this.state.showWhat === 'episodes') {
//       // foundShowsOutput = this.state.episodes.map((episode) => (
//       //   <SingleEpisode {...episode} key={episode.id} />
//       // ))
// foundShowsOutput = 'THIS IS WHERE I GO OUT AND GET ALL OF THE EPISODES';
    // } else if (this.state.hasSearchedBefore && this.state.shows.length === 0) {
    //   foundShowsOutput = <div className="centerMe">Could not find any shows matching "<strong>{this.state.searchTerm}</strong>"</div>
    // } else {
    //   foundShowsOutput = this.state.shows.map((show) => (
    //     <SingleShow {...show.show} key={show.show.id} showEpisodes={this.fetchEpisodes}/>
    //   ))
    // }

    // let searchTerm = '';
    // if (document.getElementById('findSearchTerm') != null) {
    //   searchTerm = document.getElementById('findSearchTerm').value;
    //   this.setState({ searchTerm: searchTerm });
    // } else {
    //   searchTerm = 'zippy';
    // }
    // // if (searchTerm !== '') { this.setState({ searchTerm: searchTerm }); }
    // console.log('searchTerm='+searchTerm);

    // {document.getElementById('findSearchTerm').value}

//     // let params = new URLSearchParams(location.search);
//     let query = useQuery();
//     let fooSearch = query.get("term");
// console.log('fooSearch='+fooSearch);

    return (
      <Router>
        <div className="searchContainer">
            <div id="inputErrorMessage" className="inputErrorMessage">Only letters and numbers are allowed in this search form</div>
            <span className="fas fa-search fa-2x"></span>
            <input id="findSearchTerm" className="input_searchterm" type="text" onKeyUp={this.handleValidateInput} placeholder="Enter search term" required />
            {/* <button id="searchBtn" className="btn btn_search" type='button' onClick={() => this.fetchShows(document.getElementById('findSearchTerm').value)}>SEARCH</button> */}
            {/* <Link to="/shows?term={document.getElementById('findSearchTerm').value)}"><button id="searchBtn" className="btn btn_search" type='button'>SEARCH</button></Link> */}
            {/* <Link to={{ pathname: "/shows", search: "?term="+document.getElementById('findSearchTerm').value }}><button id="searchBtn" className="btn btn_search" type='button'>SEARCH</button></Link> */}
            {/* <Link to={{ pathname: "/account", search: "?name=yahoo" }}></Link> */}
          <Link to={{ pathname: "/shows" }}><button id="searchBtn" className="btn btn_search" type='button' onClick={this.getAndUpdateSearchTerm()}>SEARCH</button></Link>
        </div>

        <Switch>
          <Route exact path="/">
            <div className="centerMe">Use the search field above to find TV shows</div> 
          </Route>
          <Route path="/shows" >
            <div id="listOfShows" className="results_block">
              {/* {foundShowsOutput} */}
              <h1>LIST OF SHOWS</h1>
              {/* <h1>LIST OF SHOWS FOR TERM {params.get("term")}</h1> */}
              {/* <h1>LIST OF SHOWS FOR TERM {fooSearch}</h1> */}
              {/* {this.fetchShows(showTerm)} */}
              <FetchShows searchTerm={this.state.searchTerm} updateShows={this.updateShowSearchState}/>
            </div>
          </Route>
          <Route path="/episodes/:id">
            {/* <Dashboard /> */}
            {/* <h1>EPISODES FOR SHOW {this.state.showId}</h1> */}
            {/* <h1>EPISODES FOR SHOW {id}</h1> */}
          </Route>
        </Switch>
    </Router>

      // <React.Fragment>

      //   <div id="listOfShows" className="results_block">
      //     {foundShowsOutput}
      //   </div>
      // </React.Fragment>
    );
  }

}

export default App;
