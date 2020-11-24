import React, { Component } from 'react'
import styles from './SearchShowsForm.module.scss'

class SearchShowsForm extends Component { 
    constructor(props) {
        super(props);
        this.state = {
          isSearchFormValid: true,
        };
    
        // this.updateSearchTerm = this.updateSearchTerm.bind(this);
    };

    handleValidateInput = e => {
        const validChars = /^[a-zA-Z0-9 ]+$/i;
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

    render() {
        const searchButtonClasses = `btn ${styles.btn_search}`;

        return (
            <div className={styles.searchContainer}>
                <div id="inputErrorMessage" className={styles.inputErrorMessage}>Only letters and numbers are allowed in this search form</div>
                <span className="fas fa-search fa-2x"></span>
                <input id="findSearchTerm" className={styles.input_searchterm} type="text" onKeyUp={this.handleValidateInput} placeholder="Enter search term" required />
                <button id="searchBtn" className={searchButtonClasses} type='button' onClick={() => this.props.updateSearchTerm(document.getElementById('findSearchTerm').value)}>SEARCH</button>
            </div>
        )
    }
}

export default SearchShowsForm
