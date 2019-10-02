import React from 'react';
import {shallow} from 'enzyme';
import AlertCard from '../AlertCard';
describe('Alert card', ()=>{
 it('Renders', ()=>{
     const wrapper = shallow(<AlertCard />).debug();
     expect(wrapper).toMatchSnapshot();
 })
})