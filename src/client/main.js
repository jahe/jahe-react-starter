// Import React
import React from 'react';
import ReactDOM from 'react-dom';

import {addLocaleData, IntlProvider} from 'react-intl';
import de from 'react-intl/locale-data/de';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';

// Import our Component
import HelloWorld from './components/HelloWorld.js';

// Import Styles
import './stylesheets/main.scss';

addLocaleData([...de, ...en, ...fr]);

// const language = navigator.language;
// const messages = require('./translations/locales/' + language + '.json');

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Root';
    this.state = {
      language: 'de'
    };
  }
  render() {
    const {language} = this.state;
    const messages = require('./translations/locales/' + language + '.json');

    return(
      <IntlProvider locale={language} key={language} messages={messages}>
        <div>
          <HelloWorld/>
          <select value={language} onChange={({target: {value}}) => this.setState({language: value})}>
            <option value="de">Deutsch</option>
            <option value="en">English</option>
            <option value="fr">Francaise</option>
          </select>
        </div>
      </IntlProvider>
    );
  }
}

export default Root;


// Render application
ReactDOM.render(
  <Root />,
  document.getElementById('mountPoint')
);