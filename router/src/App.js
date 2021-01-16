import React from 'react';
import Header from './Header';
import MyDrawer from './MyDrawer';

const App = () => {
    const [open, toggle] = React.useState(false);

    const toggleDrawer = state => () => {
        toggle(state);
    };

    return (
        <div>
            <Header toggleDrawer={toggleDrawer} />
            <MyDrawer toggleDrawer={toggleDrawer} open={open} />
        </div>
    );
}

export default App;
