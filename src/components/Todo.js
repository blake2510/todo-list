import React from 'react'; 
import { Button } from 'reactstrap'; 

function Todo({ todo, toggleComplete, removeTodo }) {

    function handleCheckboxClick() {
        toggleComplete(todo); 
    }

    function handleRemoveClick() {
        removeTodo(todo.id); 
    }

    return (
    <div style={{ display: 'flex'}}>
        <input type="checkbox" onClick={handleCheckboxClick} />
        <li style={{
            color: "white", 
            textDecoration: todo.completed ? "line-through" : null
        }}>
            {todo.task}
        </li> 
        <Button onClick={handleRemoveClick}>X</Button>
    </div>
    ); 
}

export default Todo; 
