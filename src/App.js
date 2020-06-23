import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './App.css';
import CountryList from './components/country/country-list'
import ActionList from './components/actions/action-list'
import reducer from './reducers/reducer'
import Header from './components/header'
import CountryPage from './components/country/country-page'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'



//const store = createStore( initalState, reducer, enhancer)

const initalState = {
  countryList : [],
  countryListByName:[],
  coutryFilteredByRegion:[],
  filterByRegion:'',

}


const store = createStore(  reducer, initalState)

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])
  return (
      <main className={mainClass}>
        <Provider store = { store } >
          <Router>
            <Header setDarkMode = {setDarkMode} darkMode={darkMode}/>
            <Switch>
              <Route path='/country/:id' component={CountryPage}/>
              <Route path="/">
                <ActionList/>
                <CountryList/>
              </Route>
            </Switch>
          </Router>
      </Provider>

      </main>
  );
}


export default App;
