import React, { useState } from 'react'
function TodoInput(props) {

    const [todoInput, setTodoInput] = useState("");
    return (
        <>
            <header>
                <h1>To-Do List</h1>
                <div className="flex-box">
                    <input
                        type="text"
                        id="new-task"
                        placeholder="Add a new task..."
                        value={todoInput}
                        onChange={e => {
                            setTodoInput(e.target.value)
                        }}

                    />
                    <button
                        id="add-task-btn"
                        onClick={() => {
                            props.addList(todoInput)
                            setTodoInput('')
                        }}
                    >Add
                    </button>
                </div>
            </header>
            <ul id="task-list">

            </ul>

        </>

    );
}

export default TodoInput;
