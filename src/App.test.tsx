import React from 'react';
import App from './App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const mountedApp = mount(<App />);
  expect(mountedApp.text()).toBe("Hello World!");
});
