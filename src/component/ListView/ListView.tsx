import *  as React from 'react';
import ListChild from './ListChild'

export interface IListProps {
    name: string;
}

interface ILooperState {
    childClicks: number;
    callbackInfo: string;
    data: string[];
}

class ListView extends React.Component<IListProps, ILooperState> {

    
    private count: number;

    constructor(props: IListProps) {
        super(props)        
        this.count = 0
        this.addData = this.addData.bind(this);
        this.removeData = this.removeData.bind(this);
        this.callBack = this.callBack.bind(this);
        this.state = { 
            callbackInfo: 'no data',
            childClicks : this.count,            
            data : []
        }
    }

    public callBack(callbackData: string) {
        this.setState( { ...this.state, callbackInfo: callbackData});
    }

    public render() {

        return (<div>
                    I am a list view with {this.state.data.length} data elments, the callback info is :{this.state.callbackInfo}
                    <div>
                        <button onClick={this.addData}> click for more items </button>
                    </div>
                    <div>
                        <button onClick={this.removeData}> click for less items </button>
                    </div>

                    <ul>
                    {this.state.data.map((listValue) => {                        
                        return (<ListChild key={listValue} data={listValue} callback={this.callBack} />)
                    })}
                    </ul>
                </div>)
    }

    public removeData() {
        if (this.state.data.length > 0) {
            const newData = this.state.data 
            newData.pop()           
            const newState = { ...this.state, data: newData }
            this.setState(newState)
        }
    }
    public addData() {        
        this.count = this.count + 1;
        const newData = this.state.data;
        newData.push("item-" + this.count)
        const newState = { ...this.state, data: newData, childClicks: this.count};
        this.setState(newState)    
    }
}

export default ListView

