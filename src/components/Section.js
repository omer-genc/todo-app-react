import React from 'react'

function Section({ todos, setTodos }) {

    const toggleTodo = (id) => {
        const newTodos = todos.map(item => item.id === id ? { ...item, done: !item.done } : item)
        setTodos(newTodos)
    }

    const deleteTodo = (id) => {
        setTodos(state => state.filter(todo => todo.id !== id))
    }

    return (
        <section className="main">

            <input property="toggleAll" id="toggle-all"
                className="toggle-all" type="checkbox"
            />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">
                {todos.map(todo =>
                    <li
                        key={todo.id + todo.text}
                        className={todo.done ? "completed" : ""}
                    >
                        <div className="view">
                            <input
                                onChange={() => { toggleTodo(todo.id) }}
                                className="toggle" type="checkbox"
                                checked={todo.done}
                            />
                            <label >{todo.text}</label>
                            <button className="destroy"
                                onClick={() => deleteTodo(todo.id)}
                            ></button>
                        </div>
                    </li>
                )}

            </ul>
        </section>
    )
}

export default Section
