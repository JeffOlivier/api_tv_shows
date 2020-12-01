import React, { Component } from 'react'
import styles from './SearchShowsForm.module.scss'

class SearchShowsForm extends Component { 
    constructor(props) {
        super(props);
        this.state = {
          isSearchFormValid: true,
        };
    
        this.handleValidateInput = this.handleValidateInput.bind(this);
    };

    handleValidateInput = (searchInput) => {
        const validChars = /^[a-zA-Z0-9 ]+$/i;
        // const searchInput = e.target.value;
    
        const isFormInputValid = validChars.test(searchInput);
        this.setState({ isSearchFormValid: isFormInputValid });
      
        if (isFormInputValid) {
          document.getElementById("findSearchTerm").classList.remove("textInputError");
          document.getElementById("inputErrorMessage").style.display = "none";

          // The input is valid, so update the state of searchTerm in PageLayout.js
          this.props.updateSearchTerm(searchInput);
        } else {
          document.getElementById("findSearchTerm").classList.add("textInputError");
          document.getElementById("inputErrorMessage").style.display = "block";
        }
    }
    
    render() {
      return (
          <div className={styles.searchContainer}>
              <div id="inputErrorMessage" className={styles.inputErrorMessage}>Only letters and numbers are allowed in this search form</div>
              <span className={`fas fa-search fa-2x ${styles.btn_episode} ${styles.searchIcon}`}></span>
              <input id="findSearchTerm" className={styles.input_searchterm} type="text" onChange={(event) => this.handleValidateInput(event.target.value)} value={this.state.searchTerm} placeholder="Enter search term" />
          </div>
      )
    }
}

export default SearchShowsForm
