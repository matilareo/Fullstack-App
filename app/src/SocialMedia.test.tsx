import React from 'react';
import {shallow } from 'enzyme';
import SocialMedia from './components/SocialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

describe('App test suite', ()=>{
  let wrapper;
  beforeAll(()=>{
    wrapper = shallow(<SocialMedia/>)
  })
  it('renders without crashing',()=>{
    expect(wrapper).not.toBeNull();
  })
  it('renders p tag', ()=>{
    expect(wrapper.find('p').text()).toBe('test');
  })
  it('check if icon is ok ', ()=>{
    let value='linkedin'
    wrapper.setProps({media:value})
    expect(wrapper.find(FontAwesomeIcon).props().icon).toEqual(['fab', value]);
  })
})