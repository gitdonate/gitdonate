import React from 'react';
//import { browserHistory as history } from 'react-router-dom';

/*
This component displays a form where the user can enter a GitHub username
When they submit the form either by pressing ENTER or clicking the button,
we will use react-router's history.push function to push a new URL to the history.

This will have as an effect to navigate to a new URL, which will display the User component
Why are we doing this instead of using a <Link>? The answer is straightforward, but make sure you understand!!!
*/
class Search extends React.Component {
    _submitForm (e) {
		e.preventDefault()
		this.props.history.push(`/user/${this.refs.userInput.value}/repos`);
	}

    render() {
        return (
            <div className="search-page">
                <h2>Enter a GitHub username</h2>
                <form  onSubmit={this._submitForm.bind(this)}>
                    <input ref="userInput" className="search-page__input" type="text" />
                    <button className="search-page__button">Search</button>
                </form>
            </div>
        );
    }
};

export default Search;
