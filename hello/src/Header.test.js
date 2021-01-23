import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

test('Header rendered correctly', () => {
  const tree = renderer
	.create(<Header count={10} />)
	.toJSON();
  expect(tree).toMatchSnapshot();
});
