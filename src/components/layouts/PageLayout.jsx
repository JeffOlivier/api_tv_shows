import React, { Component } from 'react'
import Header from './Header'
import SearchShowsForm from '../SearchShowsForm'
import SearchResults from '../SearchResults'
import Footer from './Footer'

import "./PageLayoutGenericStyles.scss";
import styles from './PageLayout.module.scss'

// const PageLayout = (props) => {
class PageLayout extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        searchTerm: '',
      };

      this.updateSearchTerm = this.updateSearchTerm.bind(this);
    }

    timerId = 0;
    updateSearchTerm = (searchTerm) => {
        if (searchTerm !== this.state.searchTerm) {
            // Wait 1.5 seconds before updating the state of searchTerm, if this
            // function is called before the timer expires, restart the clock
            clearTimeout(this.timerId);
            this.timerId = setTimeout(() =>{
                    this.setState({ searchTerm: searchTerm.trim() });
                }, 1000); //1500 == 1.5 seconds
        }
    };

    render() {
        var searchResultsSection;
        if (this.state.searchTerm === '') {
            searchResultsSection = <div className={styles.startText}>Use the search field above to find TV shows</div>;
        } else {
            searchResultsSection =  <SearchResults searchTerm={this.state.searchTerm} />;
        }

        return (
            <div className={styles.pageWrapper}>
                {/* <Header heading={props.heading} /> */}
                <Header />
                {/* <page /> */}
                <div className={styles.contentWrapper}>
                    <SearchShowsForm updateSearchTerm={this.updateSearchTerm} />
                    { searchResultsSection }
                </div>
                <Footer />
            </div>
        );
    }
}

export default PageLayout
