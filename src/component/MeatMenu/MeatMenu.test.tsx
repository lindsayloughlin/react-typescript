import * as enzyme from 'enzyme';
import * as React from 'react';

import MeatMenu from './MeatMenu'

it ('should render the meat menu', ()=>{
    const renderedMeatMenu = enzyme.shallow(<MeatMenu />);
    expect(renderedMeatMenu.find("div").text()).toEqual('menu')
})