import React, { useState } from "react";
import { Button, FormControl, ButtonGroup, Row, Col } from "react-bootstrap";
import s from "./TodoList.module.css"
const TodoList = ({todo,setTodo}) => {

    const [edit,setEdit] = useState(null)
    const [value,setValue] = useState('')
    const [filtered,setFiltered] = useState(todo)
    function deleteTodo(id){
        let newTodo =[...todo].filter(item => item.id!==id)
        setTodo(newTodo)
        
    }
    function statusLock(id){
        let newTodo =[...todo].filter(item => {
            if(item.id === id) {
                item.status = !item.status
            }
            return item;
        })
        setTodo(newTodo)
    }
    function editTodo(id,value){
        setEdit(id)
        setValue(value)
    }
    function saveTodo(id){
        let newTodo = [...todo].map(item=>{
            if(item.id === id){
                item.title = value
            }
            return item;
        })
        setTodo(newTodo)
        setEdit(null)
    }
    function filterList(status){
        if(status ==='all') {
            setFiltered(todo)
        } else {
            let newTodo = [...todo].filter(item => item.status === status)
            setFiltered(newTodo)
        }
    }
    return (
      <div>
        <Row>
          <Col className={s.filter}>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" onClick={() => filterList("all")}>
                Все
              </Button>
              <Button variant="secondary" onClick={() => filterList(true)}>
                Открытые
              </Button>
              <Button variant="secondary" onClick={() => filterList(false)}>
                Выполненые
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        {filtered.map((item) => (
          <div key={item.id} className={s.list}>
            {edit === item.id ? (
              <div>
                <FormControl
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                />
              </div>
            ) : (
              <div className={!item.status ? s.close : ""}>{item.title}</div>
            )}

            {edit === item.id ? (
              <div>
                <Button variant="dark" onClick={() => saveTodo(item.id)}>
                  Сохранить
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  variant="dark"
                  onClick={() => editTodo(item.id, item.title)}
                >
                  Редактировать
                </Button>
                <Button
                  className={s.btn}
                  variant="dark"
                  onClick={() => deleteTodo(item.id)}
                >
                  Удалить
                </Button>
                <Button
                  className={s.btn}
                  variant="dark"
                  onClick={() => statusLock(item.id)}
                >
                  {item.status ? "Выполнено" : "Надо сделать"}
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
}
export default TodoList;