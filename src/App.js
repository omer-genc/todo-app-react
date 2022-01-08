import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Info from './components/Info';
import Section from './components/Section';

function App() {
  const [filter, setFilter] = useState("ALL")
  const [todos, setTodos] = useState([]);
  const [fTodos, setFTodos] = useState(todos)




  useEffect(() => {
    const todoStore = localStorage.getItem("todos")
    if (todoStore)
      setTodos(JSON.parse(todoStore))
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  useEffect(() => {
    if (filter === "ALL")
      setFTodos(todos)
    else if (filter === "ACTIVE")
      setFTodos(todos.filter(item => item.done === false))
    else if (filter === "COMPLETED")
      setFTodos(todos.filter(item => item.done === true))
  }, [filter, todos])

  return [
    <section className="todoapp">
      <Header todos={fTodos} setTodos={setTodos} />
      <Section todos={fTodos} setTodos={setTodos} />
      <Footer todos={todos} setTodos={setTodos} setFilter={setFilter} filter={filter} />
    </section>,
    <Info />
  ];
}

export default App;
