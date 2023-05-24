import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');

  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;
  //console.log(todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
    //console.log(todo);
    setTodo(''); // Clear the input field after submitting
  };

  const removeHandler = (event) => {
    dispatch(RemoveTodoAction(event));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo list app in redux</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a todo"
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: 'none',
              fontSize: 20,
            }}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
            }}
            type="submit"
          >
            Go
          </button>
        </form>
        <ul className="allTodos">
          {todos.map((todo) => {
            const {id, todo:task} =todo;
            return (
            <li key={id} className="singleTodo">
              <span className="todoText">{task}</span>
              <button
                style={{
                  borderRadius: 25,
                  padding: 10,
                  border: '1px solid white',
                  color: 'white',
                  backgroundColor: 'orangered',
                  marginLeft: '10px',
                }}
                onClick={() => removeHandler(task)}
              >
                Delete
              </button>
            </li>
          )})}
        </ul>
      </header>
    </div>
  );
}

export default App;
