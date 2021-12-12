import logo from './logo.svg';
import './App.css';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <InstantSearch
        indexName="bestbuy"
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
