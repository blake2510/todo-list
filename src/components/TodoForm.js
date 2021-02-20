import React, { useState } from 'react'; 
import { Form, Button } from 'reactstrap'; 
import uuid from 'react-uuid'; 

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: '', 
        task: '', 
        completed: false
    }); 

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value}); 
    }

    function handleSubmit(e) {
        e.preventDefault(); 
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid()}); 
            setTodo({ ...todo, task: ''}); 
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <input
                name='task'
                type='text'
                value={todo.task} 
                onChange={handleTaskInputChange}
            />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}

export default TodoForm; 