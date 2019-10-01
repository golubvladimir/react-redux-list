import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/common/Layout';
import List from './conteiners/List';
import FormAdd from './conteiners/FormAdd';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        padding: 0;
        font-family: 'GraphikLCG-Regular', sans-serif;
        color: black;
        font-size: 14px;
    }
`;

function App() {
    return (
        <>
            <Layout>
                <Router>
                    <Switch>
                        <Route path={'/'} exact={true} component={List} />
                        <Route path={'/form'} component={FormAdd} />
                    </Switch>
                </Router>
            </Layout>
            <GlobalStyles/>
        </>
    );
}

export default App;
