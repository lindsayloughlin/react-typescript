import * as React from 'react'


export interface IMeatProps {
    depth: number
}

export interface IMeatGridState {
    selected: string
}

class MeatGrid extends React.Component<IMeatProps, IMeatGridState> {

    constructor(props: IMeatProps) {
        super(props)
    }

    public render() {
        return (    <div className="container">
        <div className="item item-1">first item</div>
        <div className="item item-2">second item</div>
        <div className="item item-3">third item</div>
      </div>)
    }
} 

export default MeatGrid