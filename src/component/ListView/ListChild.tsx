
import * as React from 'react'


export interface IListChildProps {
    data: string
    callback: any
}

class ListChild extends React.Component<IListChildProps, any> {

    // private myData: string
    // private myCallback: any
    constructor(props: IListChildProps) {
        super(props)
        
        this.childClicked = this.childClicked.bind(this)
    }

    public render() {
        return (<li>
                    I am a list child
                    <button onClick={this.childClicked}> I am a button</button>
                </li>)
    }

    public childClicked() {
        this.props.callback(this.props.data);
    }
}

export default ListChild