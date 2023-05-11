
import './App.css';
import Header from './components/Header/Header';
import AddField from './components/AddField/AddField';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function App() {
  const [todo,setTodo] = useState([
    {
        id:1,
        title: 'Покакать',
        status: true,
    },
    {
        id:2,
        title: 'Атжумания',
        status: true,
    },
    {
        id:3,
        title: 'Прес качац',
        status: false,
    }
])
  return (
    <Container >
      <div class='app'>
        <Header/>
        <AddField todo={todo} setTodo={setTodo}/>
        <TodoList todo={todo} setTodo={setTodo}/>
      </div>
    </Container>
  );
}

export default App;
