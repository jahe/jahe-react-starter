import React from 'react';
import {IntlProvider} from 'react-intl';

// Import Redux Store Provider Component
import {Provider} from 'react-redux';

// Import our Component
import HelloWorld from '../components/HelloWorld.js';

export default class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'de'
    };
  }

  render() {
    const {language} = this.state;
    const messages = require('../translations/locales/' + language + '.json');

    return(
      <IntlProvider locale={language} key={language} messages={messages}>
        <Provider store={this.props.store}>
          <div>
            <HelloWorld/>
            <select value={language} onChange={({target: {value}}) => this.setState({language: value})}>
              <option value="de">Deutsch</option>
              <option value="en">English</option>
              <option value="fr">Francaise</option>
            </select>
          </div>
        </Provider>
      </IntlProvider>
    );
  }
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired
};