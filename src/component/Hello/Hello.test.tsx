import * as enzyme from 'enzyme'
import * as React from 'react';

import Hello from './Hello'

it ('renders the correct text when no enthusiasm level is given', () => {
    const helloRendered = enzyme.shallow(<Hello name={'Loffa'} />);
    expect(helloRendered.find(".greeting").text()).toEqual('Hello Loffa!')
})

it('renders the correct text with an explicit enthusiasm of 1',()=>{
    const helloRendered = enzyme.shallow(<Hello name={'Loffa'} enthusiasmLevel={1}/>)
    expect(helloRendered.find(".greeting").text()).toEqual('Hello Loffa!');  
})