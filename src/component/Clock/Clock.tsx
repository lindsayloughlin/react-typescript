import *  as React from 'react';

export interface IClockProps {
    date: Date;
}

export interface IClockState {
    date: Date;    
}

class Clock extends React.Component<IClockProps, IClockState> {

    private timerId: any;
    constructor(props: IClockProps) {
        super(props);

        this.state = {
            date: new Date()
        }
    }

    public componentWillMount() {
        this.timerId = setInterval(() => {
            this.setState({
                date: new Date()
            });                       
        }, 1000);
    }

    public componentWillUnmount() {
        clearInterval(this.timerId);
    }

    public render() {
        return (             
            <div> 1234 Helloworld {this.state.date.toLocaleTimeString()} </div>
        )
    }



}

export default Clock;


