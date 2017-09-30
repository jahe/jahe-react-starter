import { configure, addDecorator } from '@storybook/react'
import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { setAddon } from '@storybook/react'
import infoAddon from '@storybook/addon-info'

setAddon(infoAddon)

addDecorator(withKnobs)

addDecorator(story => (
  <div>
    <h1>jahe-react-starter</h1>
    {story()}
  </div>
))

configure(() => {
  const req = require.context('../src', true, /.stories.js$/)
  req.keys().forEach(filename => req(filename))
}, module)
