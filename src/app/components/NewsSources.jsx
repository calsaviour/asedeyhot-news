import React, { Component } from 'react';
import _ from 'lodash';

import GetNewsSources from '../actions/GetNewsSources';
import NewsSourcesStore from '../stores/NewsSourcesStore';
import SourceCard from './SourceCard.jsx';
import SearchBar from './SearchBar.jsx';

GetNewsSources();

/**
 * @class Sources
 * @extends {Component}
 * @method onChange
 * @method handleSearch
 */

class Sources extends Component {
  constructor() {
    super();
    this.state = {
      sources: NewsSourcesStore.loadAllSources(),
      searchResult: []
    };
    this.onSourcesChange = this.onSourcesChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    NewsSourcesStore.addChangeListener(this.onSourcesChange);
  }

  componentWillUnmount() {
    NewsSourcesStore.removeChangeListener(this.onSourcesChange);
  }

  onSourcesChange() {
    this.setState({
      sources: NewsSourcesStore.loadAllSources()
    });
  }

  handleSearch(event, value) {
    const searchKey = value.toLowerCase();
    const filteredSources = _.filter(this.state.sources,
    source => _.startsWith(source.name.toLowerCase(), searchKey));
    this.setState({
      searchResult: filteredSources
    });
  }

  render() {
    let displayedSources;
    if (this.state.searchResult.length === 0) {
      displayedSources = this.state.sources;
    } else {
      displayedSources = this.state.searchResult;
    }
    return (
     <div className="container-fluid">
      <SearchBar
      handleSearch={this.handleSearch}/>
      <div className="row body">
        {displayedSources.map(source => (
          <div className="col-sm-4 col-md-3" key={source.id}>
            <SourceCard source={source}/>
          </div>
        ))}
      </div>
     </div>
    );
  }
}

export default Sources;
