import React, { useState } from 'react'

function Header({ todos, setTodos }) {
    const [text, setText] = useState("")
    const addTodo = (e) => {
        e.preventDefault()
        setTodos(state => [...state, {
            id: Math.random() * 50,
            text,
            done: false
        }])
        setText("")

    }
    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={addTodo}>
                <input
                    value={text}
                    type="text"
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    onChange={(e) => setText(e.target.value)}
                />
            </form>
        </header>
    )
}

export default Header
