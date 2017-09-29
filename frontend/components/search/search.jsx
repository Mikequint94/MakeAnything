import React from 'react';
import {Link} from 'react-router-dom'

class Search extends React.Component {
  constructor(){
    super();

    this.state = {
      query: ""
    };
  }

  handleChange (e) {
    this.setState({query: e.currentTarget.value});
  }
  handleSearchTimer() {
    this.delay = setTimeout(this.handleSearch.bind(this), 100);
  }
  checkEnter(e) {
    if (e.keyCode === 13) {
      this.handleSearchTimer();
    }
  }
  handleSearch() {
    this.props.history.push(`/howto/${this.state.query}`);
  }
  render (){
    let searchbutton;
    if (this.state.query.length > 0) {
      searchbutton = (
        <button onClick={this.handleSearchTimer.bind(this)} >🔍 </button>
        );
    }
    return(
    <div className="search">
      {searchbutton}
      <input onChange={this.handleChange.bind(this)}
         placeholder=" 🔍  Let's Make..."
         value={this.state.query}
         onKeyDown={this.checkEnter.bind(this)}
        ></input>
    </div>
  );
}
}

export default Search;
