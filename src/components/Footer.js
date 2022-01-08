import React from 'react'

function Footer({ todos, setFilter, filter, setTodos }) {
    const left = todos.filter(item => item.done === false).length
    return (
        <footer className="footer">
            <meta property="todoDone" content="[count(todo where done)]" />
            <meta property="todoLeft" content="[count(todo where !done)]" />

            {/* <!-- This should be `0 items left` by default --> */}
            <span className="todo-count">
                <strong >{left}</strong>
                <span>{left <= 1 ? " item left" : " items left"}</span>
            </span>

            <meta property="activeFilter" content="all" />
            <ul className="filters">
                <li>
                    <a href="#/" onClick={() => {
                        setFilter("ALL")
                    }} className={filter === "ALL" ? "selected" : ""} >All</a>
                </li>
                <li>
                    <a href="#/" onClick={() => {
                        setFilter("ACTIVE")
                    }} className={filter === "ACTIVE" ? "selected" : ""}>Active</a>
                </li>
                <li>
                    <a href="#/" onClick={() => {
                        setFilter("COMPLETED")
                    }} className={filter === "COMPLETED" ? "selected" : ""}>Completed</a>
                </li>
            </ul>
            {/* <!-- Hidden if no completed items are left ↓ --> */}
            <button
                type='button'
                onClick={() => {
                    setTodos(state => state.filter(item => item.done === false))
                }}
                className="clear-completed">
                Clear completed
            </button>
        </footer>
    )
}

export default Footer
