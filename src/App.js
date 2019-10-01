import React from 'react';
import styled,{ createGlobalStyle } from 'styled-components';
import * as actionTypes from './actions/actions';

import Container from './grid/Container';
import Row from './grid/Row';
import Column from './grid/Column';
import ListElement from './components/ListElement';

const ListSection = styled.div`
  color: black;
  font-size: 14px;
  font-family: sans-serif, serif;
  padding: 10px 0;
`;

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'GraphikLCG-Regular', sans-serif;
  }
`;

function App() {
  return (
    <>
      <ListSection>
        <Container>
          <Row>
            <Column
              lg={12}
              md={12}
              sm={12}
              xs={12}
            >
              <ListElement/>
            </Column>
          </Row>
        </Container>
      </ListSection>
        { this.props.items }
      <GlobalStyles/>
    </>
  );
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
};

const mapDispatch = dispatch => {
    return {
        onAddItem: (value) => dispatch({ type: actionTypes.ADD_ITEM, value}),
        onDeleteItem: (value) => dispatch({ type: actionTypes.DELETE_ITEM, value })
    }
};

export default App;
