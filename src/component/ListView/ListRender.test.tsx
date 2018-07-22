import * as enzyme from 'enzyme'
import * as React from 'react'
import ListView from './ListView'

it ('should render the basic list', ()=>{
    const renderedList = enzyme.mount(<ListView name={'sample name'}/>)
    renderedList.setState({data: ['first', 'second']})
    const children = renderedList.children()

    const result = renderedList.find('li')
    console.log(result);
    // for (var i =0; i < children.length; ++i) {

    //     console.log(i + ": " + children.at(i).html())
    // } 


    // forEach(renderedList.children(), (child) =>  {
    // for (let entry of renderedList.children()) {

    // })
    // console.log(renderedList.children().find('ui').length)
})