import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/layouts/Header";
import NavBar from "./components/layouts/navBar";
import SearchShowsForm from "./components/SearchShowsForm";
import Footer from "./components/layouts/Footer";

import ListOfShows from "./components/ListOfShows";
import ListOfEpisodes from "./components/ListOfEpisodes";

import Home from "./components/pages/Home";
import ReadMe from "./components/pages/purpose";
import NotFound from "./components/pages/NotFound";
// import styles from "./App.scss";
import "./components/layouts/PageLayoutGenericStyles.scss";
import "./App.scss";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
        };

        this.updateSearchTerm = this.updateSearchTerm.bind(this);
    }

    timerId = 0;
    updateSearchTerm = (searchTerm, history) => {
        if (searchTerm !== this.state.searchTerm) {
            // Wait 1.5 seconds before updating the state of searchTerm, if this
            // function is called before the timer expires, restart the clock
            clearTimeout(this.timerId);
            this.timerId = setTimeout(() => {
                this.setState({ searchTerm: searchTerm.trim() });
                // <Redirect to={`/shows/${searchTerm.trim()}`} />;
                // history.replace(`/shows/${searchTerm.trim()}`);
                history.replace(`/shows?term=${searchTerm.trim()}`);
            }, 1000); //1500 == 1.5 seconds
        }
    };

    render() {
        return (
            <BrowserRouter>
                <div className="pageWrapper">
                    {/* <Header /> */}
                    <NavBar />
                    <div className="contentWrapper">
                        <SearchShowsForm
                            updateSearchTerm={this.updateSearchTerm}
                            searchTerm={this.state.searchTerm}
                        />
                        <main className="searchResultsBlock">
                            <Switch>
                                <Route
                                    // path="/shows/:searchTerm"
                                    path="/shows"
                                    component={ListOfShows}
                                />
                                {/* <Route path="/show/:season/:episode" component={ListOfEpisodes} /> */}
                                <Route
                                    path="/show/:showId/:season?"
                                    component={ListOfEpisodes}
                                />
                                {/* <Redirect from="/show/:id" exact to="/show/:id/1" /> */}
                                {/* <Route path="/episode" component={Rentals} /> */}
                                <Route path="/404" component={NotFound} />
                                {/* <Route path="/" exact component={Home} /> */}
                                <Redirect from="/shows" exact to="/" />
                                <Redirect from="/shows" to="/" />
                                <Route path="/readme" component={ReadMe} />
                                <Route path="/" exact component={Home} />
                                <Redirect to="/404" />
                            </Switch>
                        </main>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
