import React from 'react'

function Section() {
    return (
        <section hidden="[count(todo) = 0]" class="main">

            <input property="toggleAll" id="toggle-all"
                class="toggle-all" type="checkbox"
            />
            <label for="toggle-all">
                Mark all as complete
            </label>

            <ul class="todo-list">
                <li mv-multiple="todo"
                    class="[if(done, 'completed')]"
                    hidden="[(done and activeFilter = 'active') or (!done and activeFilter = 'completed')]">
                    <div class="view">
                        <input property="done" class="toggle" type="checkbox" />
                        <label property="text">Taste JavaScript</label>
                        <button class="destroy" mv-action="delete(todo)"></button>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Section
