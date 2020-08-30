import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <li>
                {this.props.name}
                <a href="#/" onClick={this.props.remove(this.props._id)}>&times;</a>
            </li>
        );
    }
}

export default Item;
