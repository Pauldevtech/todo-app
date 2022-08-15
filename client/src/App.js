import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {

  const [todos, setTodos] = useState([])
  const [activity, setActivity] = useState('')

  return (
    <div className="App">
      <Todo todos={todos} setTodos={setTodos} />
      <TodoForm todos={todos} setTodos={setTodos} activity={activity} setActivity={setActivity} />
    </div>
  );
}

export default App;
