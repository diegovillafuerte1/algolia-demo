import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  SortBy,
  Rheostat
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch("1DDP2SO5ID", "97fa4f0a39cda3d338bc74dc2d4214ff");

class App extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <InstantSearch indexName="wine" searchClient={searchClient}>
          <div className="ais-SearchZone">
            <div className="title-text">Wine Search</div>
            <SearchBox />
          </div>
          <div className="ais-PanelZone">
            <div className="left-panel">
              <ClearRefinements />
              <h2>Region</h2>
              <RefinementList attribute="domain" />
              {/* <Rheostat /> */}
              {/* <SortBy
                items={[{label: 'Price (asc)', value: 'wine_price_asc'}]}
              /> */}
              <Configure hitsPerPage={8} />
            </div>
            <div className="right-panel">
              <Hits hitComponent={Hit} />
              <Pagination />
            </div>
          </div>
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  return (
    <div>
      <img src={props.hit.image} align="left" alt={props.hit.name} />
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-domain">{props.hit.domain}</div>
      <div className="hit-year">{props.hit.year}</div>
      <div className="hit-quality">{props.hit.quality}</div>
      <div className="hit-type">{props.hit.type}</div>
      <div className="hit-price">€{props.hit.price}</div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
