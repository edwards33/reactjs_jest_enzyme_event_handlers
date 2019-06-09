import React from 'react';
import ReactDOM from 'react-dom';
import App, { Link, LinkOpt } from './App';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const TITLE = 'Title'

configure({
  adapter: new Adapter()
});


describe('<App /> mount rendering', () => {
  it('h1 contains correct text', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find('h1').text()).toBe(TITLE)
    wrapper.unmount()
  })
});

describe('<App /> shallow rendering', () => {
  it('updates className with new State', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.blue').length).toBe(1)
    expect(wrapper.find('.red').length).toBe(0)
    wrapper.setState({ mainColor: 'red' })
    expect(wrapper.find('.blue').length).toBe(0)
    expect(wrapper.find('.red').length).toBe(1)
  })
});
