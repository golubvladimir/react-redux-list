import React from 'react';
import styled from 'styled-components';

import Row from "grid/Row";
import Column from "grid/Column";
import Container from "grid/Container";
import Menu from '../Menu';

const Layout = styled.div`
    padding-top: 20px;
`;

export default ({ children }) => {
    return (
        <Layout>
            <Container>
                <Row>
                    <Column
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                    >
                        <Menu />
                        { children }
                    </Column>
                </Row>
            </Container>
        </Layout>
    )
};