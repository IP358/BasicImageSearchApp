import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''}

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);

    }
    render(){

        return(
            <div className="searchBarDiv">
                <form className="form" onSubmit = {this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="searchField">Image Search</label>
                        <input id="searchField" type="text" placeholder="Keyoword" value={this.state.term} onChange={e => this.setState({ term: e.target.value})} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;