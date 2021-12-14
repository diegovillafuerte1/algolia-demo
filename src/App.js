
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
  SortBy
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import Rheostat from 'rheostat';
import PropTypes from 'prop-types';
import './App.css';
import { connectRange } from 'react-instantsearch-dom';
import 'rheostat/initialize';
import 'rheostat/css/rheostat.css';

const searchClient = algoliasearch("1DDP2SO5ID", "97fa4f0a39cda3d338bc74dc2d4214ff");

const RangeSlider = ({ min, max, currentRefinement, canRefine, refine }) => {
  const [stateMin, setStateMin] = React.useState(min);
  const [stateMax, setStateMax] = React.useState(max);

  React.useEffect(() => {
    if (canRefine) {
      setStateMin(currentRefinement.min);
      setStateMax(currentRefinement.max);
    }
  }, [currentRefinement.min, currentRefinement.max]);

  if (min === max) {
    return null;
  }

  const onChange = ({ values: [min, max] }) => {
    if (currentRefinement.min !== min || currentRefinement.max !== max) {
      refine({ min, max });
    }
  };

  const onValuesUpdated = ({ values: [min, max] }) => {
    setStateMin(min);
    setStateMax(max);
  };

  return (
    <Rheostat
      min={min}
      max={max}
      values={[currentRefinement.min, currentRefinement.max]}
      onChange={onChange}
      onValuesUpdated={onValuesUpdated}
    >
      <div
        className="rheostat-marker rheostat-marker--large"
        style={{ left: 0 }}
      >
        <div className="rheostat-value">{stateMin}</div>
      </div>
      <div
        className="rheostat-marker rheostat-marker--large"
        style={{ right: 0 }}
      >
        <div className="rheostat-value">{stateMax}</div>
      </div>
    </Rheostat>
  );
};

const CustomRangeSlider = connectRange(RangeSlider);

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
              <h2>Year</h2>
              <CustomRangeSlider attribute="year" />
              <h2>Sort</h2>
              <SortBy
                defaultRefinement="wine"
                items={[
                  {label: 'Default', value: 'wine'},
                  {label: 'Price (asc)', value: 'wine_price_asc'},
                  {label: 'Price (dsc)', value: 'wine_price_dsc'}
              ]}
              />
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
