import  * as Antd  from 'antd'
import * as React from 'react'
// import * as Select from 'react-select'


interface IMeatSelectorProps {
    state: string    
}

interface IMeatSelectState {
    blurItem: string
    selectedOption: string,    
    valueClick: string,
    values: any[],
    children: any[],
}

class MeatSelector extends React.Component<IMeatSelectorProps, IMeatSelectState> {

    // private options = [
    //     { value: 'chocolate', label: 'Chocolate' ,color: '#FF5630' },
    //     { value: 'strawberry', label: 'Strawberry' , color: '#FF5630'},
    //     { value: 'vanilla', label: 'Vanilla' , color: '#FF5630'},
    //     { value: 'banana', label: 'Banana' , color: '#FF5630'}
    //   ];
    // const children = [];
    // for (let i = 10; i < 36; i++) {
    //   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    // }


    constructor(props:IMeatSelectorProps) {
        super(props)

        this.state = {
            blurItem: '',
            children: [],
            selectedOption: '',    
            valueClick : '',     
            values : [],                    
        }
    }

    public render() {

        const newChildren = [];
        for (let i = 10; i < 36; i++) {
            newChildren.push(<Antd.Select.Option key={i + ""}>item{i}</Antd.Select.Option>);
          }

        return (
            <div>
                <div> selected option {this.state.selectedOption} </div>
                <div> burl option {this.state.blurItem} </div>
                <div> value click {this.state.valueClick} </div>

                <Antd.Select style={{ width: 120 }} mode="multiple">
                    {newChildren}
                    {/* <Antd.Select.Option value="jack">Jack</Antd.Select.Option>
                    <Antd.Select.Option value="lucy">Lucy</Antd.Select.Option>
                    <Antd.Select.Option value="disabled" disabled={true}>Disabled</Antd.Select.Option>
                    <Antd.Select.Option value="Yiminghe">yiminghe</Antd.Select.Option> */}

                </Antd.Select>

                  {/* <Select.Creatable                    
                    multi={true}
                    name="colors"                    
                    options={this.options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    /> */}

                {/* <Select.default options={this.options} onChange={this.handleChange}            
                onBlur={this.onBlur}
                placeholder="some placeholder..."               
                multi={true} value={[this.options[0], this.options[1]]}                    
                className="basic-multi-select"  /> */}
            </div>
            )    
    }

    // private onBlur = (blurOption : any ) => {
    //     const updatedStsate = { ...this.state, blurItem: blurOption.value }
    //     this.setState(updatedStsate)
    // }

    // private handleChange = (selectedOption : any) => {
    //     const values = this.state.values
    //     values.push(selectedOption)
    //     this.setState({ ...this.state, selectedOption: selectedOption.value, values });
    //      // console.log(`Option selected:`, selectedOption);
    // }    
}

export default MeatSelector;
