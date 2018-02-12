import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

import Btn from '../app/components/Btn'

storiesOf('Btn', module)
  .add( 'default Btn', () => <Btn>click me!</Btn> )
  .add('hovered Btn', () => <Btn hovered> click me! </Btn>)
  .add('clicked Btn', () => <Btn hovered clicked> click me! </Btn>)
  .add('red Btn', () => <div> <Btn>default</Btn> <Btn color={'red'} onclick={action('clicked')}> red </Btn> <Btn color={'green'}> green </Btn> <Btn color={'lightBlue'}>lightBlue</Btn> <Btn color={'blue'}> blue </Btn> <Btn color={'yellow'}> yellow </Btn> <Btn color={'orange'}> orange </Btn> </div>)