import logo from './logo.svg';
import './App.css';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch("1DDP2SO5ID", "97fa4f0a39cda3d338bc74dc2d4214ff");

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <InstantSearch
        indexName="wine"
        searchClient={searchClient}
      >
        <SearchBox />
        <Hits />
      </InstantSearch>
      </header>
    </div>
  );
}

export default App;