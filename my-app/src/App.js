import logo from './logo.svg';
import './App.css';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

// const searchClient = algoliasearch(
//   'latency',
//   '6be0576ff61c053d5f9a3225e2a90f76'
// );

const searchClient = algoliasearch("1DDP2SO5ID", "97fa4f0a39cda3d338bc74dc2d4214ff");
// const index = client.initIndex("wine");

// const objects = [
//   {
//     objectID: 1,
//     name: "Foo"
//   }
// ];

// index
//   .saveObjects(objects)
//   .then(({ objectIDs }) => {
//     console.log(objectIDs);
//   })
//   .catch(err => {
//     console.log(err);
//   });

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
