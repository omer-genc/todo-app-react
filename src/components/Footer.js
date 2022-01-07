import React from 'react'

function Footer() {
    return (
        <footer class="footer">
            <meta property="todoDone" content="[count(todo where done)]" />
            <meta property="todoLeft" content="[count(todo where !done)]" />

            {/* <!-- This should be `0 items left` by default --> */}
            <span class="todo-count">
                <strong >0</strong>
                <span> items left</span>
            </span>

            <meta property="activeFilter" content="all"/>
            <ul class="filters">
                <li>
                    <a href class="selected">All</a>
                </li>
                <li>
                    <a href class="selected">Active</a>
                </li>
                <li>
                    <a href class="'completed', 'selected'">Completed</a>
                </li>
            </ul>
            {/* <!-- Hidden if no completed items are left ↓ --> */}
            <button
                class="clear-completed">
                Clear completed
            </button>
        </footer>
    )
}

export default Footer
