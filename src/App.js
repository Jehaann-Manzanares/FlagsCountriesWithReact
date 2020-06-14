import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './App.css';
import CountryList from './components/country/country-list'
import ActionList from './components/actions/action-list'
import reducer from './reducers/reducer'
//const store = createStore( initalState, reducer, enhancer)

const initalState = {
  countryList : [],
  countryListByName:[],
  coutryFilteredByRegion:[],
  filterByRegion:'',

}


const store = createStore(  reducer, initalState)

function App() {
  return (
    <Provider store = { store } >
      <div className="App">
        <ActionList/>
        <CountryList/>
      </div>
    </Provider>
  );
}


export default App;
