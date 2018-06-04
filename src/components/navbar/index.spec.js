import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '.';

describe('[Component] Navbar', () => {
  it('renders as expected', () => {
    expect(shallow(<Navbar title="test" />)).toMatchSnapshot();
  });
});
