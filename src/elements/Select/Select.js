import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
    height: 40px;
    font-size: 16px;
`;

class Select extends Component {
    constructor(props){
        super(props);

        this.state = {
            selected: props.selected ? props.selected : (props.nullElement ? props.nullElement.value : props.items[0].value)
        }
    }

    handlerChange = (event) => {
        this.setState({
            selected: event.target.value
        });

        this.props.changeFunc(event.target.value);
    };

    render() {
        const {
            className,
            items,
            nullElement
        } = this.props;

        return (
            <StyledSelect
                value={this.state.selected}
                onChange={ this.handlerChange }
                className={className}
            >
                {
                    nullElement ?
                        <option key={ nullElement.id } value={ nullElement.value }>{ nullElement.title }</option>
                        : null
                }
                {
                    items.map(item =>
                        <option key={ item.id } value={ item.value }>{ item.title }</option>
                    )
                }
            </StyledSelect>
        )
    }
}

export default Select;