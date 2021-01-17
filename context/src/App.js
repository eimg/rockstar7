import React, { createContext, useContext } from 'react';
import Title from './Title';
import MyContext from './MyContext';

const Header = props => {
    return (
        <Title />
    );
}

const App = () => {
    return (
        <Header />
    );
}

export default App;
