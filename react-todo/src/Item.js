import React from 'react';

const Item = props => {
    return (
        <li>
            {
                props.task.status
                ? <input
                    type="checkbox"
                    checked={1}
                    onChange={props.toggle(props.task._id)}
                    />
                : <input
                    type="checkbox"
                    checked={0}
                    onChange={props.toggle(props.task._id)}
                    />
            }
            {props.task.subject}
        </li>
    )
}

export default Item;
