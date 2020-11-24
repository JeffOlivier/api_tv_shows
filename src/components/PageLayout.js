// import React from 'react'
import React, { Component } from 'react'
import Header from './Header'
import SearchShowsForm from './SearchShowsForm'
import SearchResults from './SearchResults'
import Footer from './Footer'

import "./PageLayoutGenericStyles.scss"; /* TODO: create mixins and add it to SCSS modules */
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

    updateSearchTerm = (searchTerm) => {
        // const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ searchTerm: searchTerm.trim() });
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
