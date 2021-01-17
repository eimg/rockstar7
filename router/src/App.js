import React from 'react';
import Header from './Header';
import MyDrawer from './MyDrawer';
import Inbox from './Inbox';
import Compose from './Compose';
import Draft from './Draft';
import Label from './Label';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

const App = () => {
    let [open, toggle] = React.useState(false);

    const toggleDrawer = state => () => {
        toggle(state);
    };

    return (
        <Router>
            <div>
                <MyDrawer toggleDrawer={toggleDrawer} open={open} />
                
                <Switch>
                    <Route path="/" exact>
                        <Header toggleDrawer={toggleDrawer} title="Inbox" />
                        <Inbox />
                    </Route>
                    <Route path="/draft">
                        <Header toggleDrawer={toggleDrawer} title="Draft" />
                        <Draft />
                    </Route>
                    <Route path='/compose'>
                        <Header back={true} title="Compose" />
                        <Compose />
                    </Route>
                    <Route path='/label/:label'>
                        <Header toggleDrawer={toggleDrawer} title="Label" />
                        <Label />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
