import React from 'react';

const styles = {
    list: {
        background: 'cyan',
        padding: 20
    }
};

class List extends React.Component {
    render() {
        return (
            <ul style={styles.list}>
                {this.props.children}
            </ul>
        )
    }
}

export default List;
