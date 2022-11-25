import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.js';
import WhoPage from './Pages/WhoPage/WhoPage.js';
import ActionsPage from './Pages/ActionsPage/ActionsPage';
import NewsPage from './Pages/NewsPage/NewsPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import ParcoursPage from './Pages/ParcoursPage/ParcoursPage';

import urls from './urls';

import './index.css';
import TestImagePersons from './Pages/TestImagePersons/TestImagePersons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path={ urls.HOME_PAGE } element={ <HomePage /> } />
      <Route path={ urls.WHO_PAGE } element={ <WhoPage /> } />
      <Route path={ urls.ACTIONS_PAGE } element={ <ActionsPage /> } />
      <Route path={ urls.NEWS_PAGE } element={ <NewsPage /> } />
      <Route path={ urls.CONTACT_PAGE } element={ <ContactPage /> } />
      <Route path={ urls.PARCOURS_PAGE } element={ <ParcoursPage /> } />
      <Route path={ "test/persons" } element={ <TestImagePersons /> } />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
