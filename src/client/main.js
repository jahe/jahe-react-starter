// Import React
import React from 'react';
import ReactDOM from 'react-dom';

// Import Redux Store
import store from './store/store';

// Import React-Intl with supported languages
import {addLocaleData} from 'react-intl';
import de from 'react-intl/locale-data/de';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';

// Globally register React-Intl languages
addLocaleData([...de, ...en, ...fr]);

// Import Styles
import './stylesheets/main.scss';

// Import Root Component
import Root from './containers/Root';

if (!global.Intl) {
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/de.js',
    'intl/locale-data/jsonp/en.js',
    'intl/locale-data/jsonp/fr.js'
  ], function (require) {
    require('intl');
    require('intl/locale-data/jsonp/en.js');
    require('intl/locale-data/jsonp/de.js');
    require('intl/locale-data/jsonp/fr.js');
    renderApp();
  });
} else {
  renderApp();
}

// Render application
function renderApp() {
  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('mountPoint')
  );
}