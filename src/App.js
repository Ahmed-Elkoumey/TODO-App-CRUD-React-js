import {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Todolist from './components/Todolist';
function App() {

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);



    return (
        <div className="App">
            <main className='text-center'>

        <Header />
        <Form 
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
               />
<Todolist todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
            </main>
        </div>
    );
}

export default App;
