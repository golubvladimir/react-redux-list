import React, { Component } from 'react';
import styled from 'styled-components';

import Input from '../../../elements/Input';

const StyledInput = styled(Input)`
    width: 100%;
    border: 1px solid #000;
    font-size: 14px;
`;

class InputField extends Component {
    state = {
        value: this.props.value ?  this.props.value : ''
    };

    handlerChange = (event) => {
        this.setState({
            value: event.target.value
        });

        this.props.changeFunc(event.target.value);
    };

    render() {
        return (
            <StyledInput
                className={this.props.className}
                changeFunc={this.handlerChange}
                value={this.state.value}
                placeholder={''}
            />
        )
    }
}

export default InputField;