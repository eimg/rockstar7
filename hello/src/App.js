import React from 'react';
import List from './List';
import Item from './Item';

const api = "http://localhost:8000/tasks";

class App extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        fetch(api).then(res => res.json()).then(data => {
            this.setState({ data });
        });
    }

    input = React.createRef();

    add = () => {
        const subject = this.input.current.value;

        fetch(api, {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ subject })
        }).then(res => res.json()).then(item => {
            this.setState({
                data: [ ...this.state.data, item ]
            });
        });
    }

    remove = _id => () => {
        fetch(`${api}/${_id}`, { method: "delete" });

        this.setState({
            data: this.state.data.filter(user => user._id !== _id)
        });
    }

    render() {
        return (
            <div>
                <h1>Hello React</h1>
                <List>
                    {this.state.data.map(item => {
                        return (
                            <Item
                                key={item._id}
                                _id={item._id}
                                name={item.subject}
                                remove={this.remove}
                            />
                        )
                    })}
                </List>
                <input type="text" ref={this.input} />
                <button onClick={this.add}>ADD</button>
            </div>
        );
    }
}

export default App;
