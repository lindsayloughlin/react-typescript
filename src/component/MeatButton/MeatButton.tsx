import {Button} from 'antd'
import * as React from 'react'


export interface IProps {
    name?: string
}

function MeatButton({ name = 'unknown'}: IProps) {

    return (
        // React.createElement(Button)
        <Button type="primary">Hello</Button>
    )
}

export default MeatButton;
