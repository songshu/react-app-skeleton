import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter as Router, Route, hashHistory } from 'react-router-dom'

//Styles.
import styles from './styles/app.scss';

//Components, Pages, etc.
import Home from './pages/home/index.js'

//App begins.
ReactDOM.render((
   <HashRouter>
      <div>
        <Route exact path="/" component={Home} />
      </div>
   </HashRouter >
), document.getElementById( 'root' ));
