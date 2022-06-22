import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })



  it('add 1 to 4 and get 5', () => {
    const button4 = container.find('#number4');
    const buttonPlus = container.find('#operator_add');
    const button1 = container.find('#number1');
    const buttonEquals = container.find('#operator-equals');
    button4.simulate('click');
    buttonPlus.simulate('click');
    button1.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  })


  it('subtract 4 from 7 and get 3', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const buttonMinus = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals');
    button7.simulate('click');
    buttonMinus.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })


  it('multiply 3 by 5 and get 15', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonEquals = container.find('#operator-equals');
    button3.simulate('click');
    buttonMultiply.simulate('click');
    button5.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  })


  it('divide 21 by 7 and get 3', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const buttonDivide = container.find('#operator-divide');
    const buttonEquals = container.find('#operator-equals');
    button2.simulate('click');
    button1.simulate('click');
    buttonDivide.simulate('click');
    button7.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })


  it('concatenate multiple number button clicks', () => {
    const button1 = container.find('#number1');
    const button2 = container.find('#number2');
    const button3 = container.find('#number3');
    button1.simulate('click');
    button2.simulate('click');
    button3.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('123');
  })


  it('chain multiple operations together', () => {
    const button9 = container.find('#number9');
    const button6 = container.find('#number6');
    const button1 = container.find('#number1');
    const buttonMinus = container.find('#operator-subtract');
    const buttonPlus = container.find('#operator_add');
    const buttonEquals = container.find('#operator-equals');
    button9.simulate('click');
    buttonMinus.simulate('click');
    button6.simulate('click');
    buttonPlus.simulate('click');
    button1.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('4');
  })
})

