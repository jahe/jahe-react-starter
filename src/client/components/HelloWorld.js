import React from 'react';
import { FormattedRelative, FormattedMessage } from 'react-intl';
import moment from 'moment';

export default function HelloWorld() {
  return (
    <h1 className="hw-headline">
      <span>
        <FormattedMessage
          id="app.helloWorld.greeting"
          description="Greeting to welcome the user to the app"
          defaultMessage="Hello, {name}! Last Action: {date}"
          values={{
            name: <i>World</i>,
            date: (
              <FormattedRelative
                value={moment().add(7, 'days')}
                options={{ style: 'numeric', units: 'second' }}
              />
            )
          }}
        />
      </span>
    </h1>
  );
}
