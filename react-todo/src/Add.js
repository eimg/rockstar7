import React, { createRef } from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles= {
    new: {
        padding: 20,
        background: '#efefef',
    },
    add: { display: 'flex' },
    input: { marginLeft: 20, flex: 1 }
}

const Add = props => {
    const subject = createRef();

    return (
        <div style={styles.new}>
            <Paper component="form" style={styles.add}>
                <InputBase placeholder="New Task" style={styles.input} inputRef={subject} />
                <IconButton onClick={() => {
                    props.add(subject.current.value)
                }}>
                    <AddIcon />
                </IconButton>
            </Paper>
        </div>
    );
}

export default Add;
