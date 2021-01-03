import React, { useState, useEffect } from 'react';
import Header from './Header';
import Item from './Item';
import Add from './Add';

import { List, Divider } from '@material-ui/core';

const api = 'http://localhost:8000/tasks';

const App = props => {
    const [ tasks, setTasks ] = useState([]);

    useEffect(() => {
        fetch(api).then(res => res.json()).then(data => {
            setTasks(data);
        })
    }, []);

    const add = subject => {
        fetch(api, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ subject })
        }).then(res => res.json()).then(item => {
            setTasks([
                ...tasks, item
            ]);
        });
    }

    const remove = _id => () => {
        fetch(`${api}/${_id}`, { method: 'delete' });
        setTasks(tasks.filter(task => task._id !== _id));
    }

    const toggle = _id => () => {
        setTasks(tasks.map(task => {
            let newStatus = +!task.status;
            
            if(task._id === _id) {
                task.status = newStatus;
                fetch(`${api}/${_id}`, {
                    method: 'put',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ status: newStatus })
                });
            }

            return task;
        }));
    }

    const clear = () => {
        fetch(api, { method: 'delete' });
        setTasks(tasks.filter(task => task.status === 0));
    }

    return (
        <div>
            <Header
                clear={clear}
                count={tasks.filter(task => task.status === 0).length}
            />
            <Add add={add} />
            <List>
                {tasks.filter(task => task.status === 0).map(task => {
                    return (
                        <Item
                            key={task._id}
                            task={task}
                            toggle={toggle}
                            remove={remove}
                        />
                    );
                })}
            </List>
            <Divider />
            <List>
                {tasks.filter(task => task.status === 1).map(task => {
                    return (
                        <Item
                            key={task._id}
                            task={task}
                            toggle={toggle}
                            remove={remove}
                        />
                    );
                })}
            </List>
        </div>
    );
}

export default App;
