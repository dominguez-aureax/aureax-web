# How to Create a Component

This is the suggested usage for each component. Each component should be in its own directory.
src/components/<component-name>

All style and format are handled by the [latest eslint rules](https://eslint.org/docs/rules/).
Greater styling is also enhanced by the [latest prettier rules](https://prettier.io/docs/en/options.html)

The folder name should be lowecase with \_ separators

Note: The folder is not under client because components are shared between the client and server.

Here are the files in order of creation:

- [index.js](#index)
- [component.js/x](#component)
- [container.js](#container) (If it's a connected component)
- [flux.js](#flux) (If it's a connected component)

Even if 'flux.js' is a dependencyt of 'container.js', it is created while defining 'container.js, that's why it is late in the list.

## index.js <a name='index></a>

If you have a connected component:

```javascript
export { default } from './container';
export { reducer } from './flux';
```

If you only have a stateless component:

```javascript
export { default } from './component';
```

## component.jsx <a name='component'></a>

This is the base component and should ALWAYS remain stateless.

```javascript
import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ click, counter }) => {
  // Logic Needed

  return <div className='counter-class'></div>;
};

Component.displayName = 'COUNTER';

Component.propTypes = {
  click: PropTypes.func.isRequired,
  counter: PropTypes.number,
};

Component.defaultProps = {
  counter: 0,
};
```

## container.js <a name='container'></a>

We want to keep the connected components and disconnected components apart. So if you need access to the state (eg: 'useSelector()', 'useDispatch()', etc), this logic should be in this file.

```javascript
import { useDispatch, useSelector } from 'react-utils';

import Component from './component';
import { reducer } from './flux';

const getComponentProps = (props) => {
  const dispatch = useDispatch();

  const counter = useSelector(reducer.counter);

  return {
    counter,
    click: () => dispatch({type: 'count', payload: counter+1}),
  };
};

export defautl bindCompoennt(Component, getComponentProps);
```

## bindComponent

If necessary a bindComponent function will be made which will combine the reducer and compnent. However, this may not be necessary.

## flux.js <a name='flux></a>

This file is where the flux flow is defined. We have decided to combine the different parts into a single file instead of individual files.

### General structure

Usually starts with the global structure:

```javascript
import { Map } from 'immutable';

const initalState = [{ id: 0, initalCounter: 5, completed: true }];

function nextAction(var) {
	const maxId = var.reduce(maxId, var) => Math.max(var, maxId), - 1)
	return maxId + 1;
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

//a different style of reducer can also be used
export const reducer = combineReducers([{
	actions: [ actions.SET ],
	reducer: ( state, action ) => setSubstateAttribute(state, 'EXAMPLE_APP', 'count', action.payload?.count)
}])
```
