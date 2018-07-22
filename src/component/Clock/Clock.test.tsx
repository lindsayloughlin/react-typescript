import * as enzyme from 'enzyme'
import * as React from 'react'
import Clock from './Clock'

it ('should render the current time on the click', ()=> {
    const renderedClock = enzyme.shallow(<Clock date={new Date()} />)
    // console.log(renderedClock.children())
    // expect(renderedClock.children).toBeFalsy()
})