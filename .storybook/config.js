import { configure, addDecorator } from '@kadira/storybook';
import React from 'react';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import { setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

addDecorator(withKnobs);

addDecorator((story) => (
  <div>
    <h1>jahe-react-starter</h1>
    {story()}
  </div>
));

configure(
  () => {
    const req = require.context('../src', true, /.stories.js$/);
    req.keys().forEach((filename) => req(filename));
  },
  module
);