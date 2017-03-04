import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text, select } from '@kadira/storybook-addon-knobs';

import Button from './Button';

const types = {
  '': '',
  primary: 'primary',
  disabled: 'disabled'
};

storiesOf('Components', module)
  .addWithInfo(
    'Button with Info',
    `
    A component to display a Button.
    `,
    () =>  (
      <Button text={text('Name', 'Louie Anderson')} type={select('Type', types)} onClick={action('clicked')}/>
    ),
    { inline: true }
  );