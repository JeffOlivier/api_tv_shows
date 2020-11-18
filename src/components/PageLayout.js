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
        hasSearchedBefore: false,
        searchTerm: 'walking',
      };
    }

    updateSearchTerm = (searchTerm) => {
        console.log("Event Handler Called -", searchTerm);
        // const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ searchTerm: searchTerm, hasSearchedBefore: true });

        console.log('The new searchterm is: '+this.state.searchTerm);
        console.log('hasSearchedBefore='+this.state.hasSearchedBefore);
    };

    render() {
        return (
            <div className={styles.pageWrapper}>
                {/* <Header heading={props.heading} /> */}
                <Header />
                {/* <page /> */}
                <div className={styles.contentWrapper}>
                    <SearchShowsForm updateSearchTerm={this.updateSearchTerm} />
                    <SearchResults {...this.state} />
                    {/* <div className={styles.searchResultsBlock}>The Results 1</div> */}
                </div>
                <Footer />
            </div>
        );
    }
}

export default PageLayout
