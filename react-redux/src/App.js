import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import Item from './Item';

class App extends React.Component {
    input = React.createRef();

    render() {
        return (
            <div>
                <h1>Hello React</h1>
                <List>
                    {this.props.users.map(user => {
                        return (
                            <Item
                                key={user._id}
                                _id={user._id}
                                name={user.name}
                            />
                        )
                    })}
                </List>
                <input type="text" ref={this.input} />
                <button onClick={this.props.add}>ADD</button>
            </div>
        );
    }
}

function stateToProps(state) {
    return {
        users: state
    }
}

function dispatchToProps(dispatch) {
    return {
        add: () => {
            dispatch({ type: 'ADD', data: { _id: 3, name: 'Bob', gender: 'm' } });
        }
    }
}

const ReduxApp = connect(stateToProps, dispatchToProps)(App);

export default ReduxApp;
