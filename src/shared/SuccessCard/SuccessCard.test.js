import React from 'react';
import {shallow} from 'enzyme';
import SuccessCard from '../SuccessCard';
describe('Alert card', ()=>{
 it('Renders', ()=>{
     const wrapper = shallow(<SuccessCard />).debug();
     expect(wrapper).toMatchSnapshot();
 })
})