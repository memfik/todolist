import React, { useState } from "react";
import { Button, Col, FormControl, Row } from "react-bootstrap";
import s from "./AddField.module.css"
import { v4 as uuidv4 } from "uuid"
const AddField = ({todo,setTodo}) => {

    const [value,setValue] = useState('')
    function saveTodo(){
        if(value){
            setTodo(
                [...todo ,{
                    id:uuidv4(),
                    title:value,
                    status:true
                }]
            )
            setValue('')
        } else {
            alert('Поле пустое')
        }
        
    }
    
    return(
        <Row>
            <Col className={s.form}>
                <FormControl type="text" placeholder="Добавить задачу" value={value} onChange={(e)=>setValue(e.target.value)}/>
                <Button className={s.button_save} variant="dark" onClick={saveTodo}>Сохранить</Button>
            </Col>
            
        </Row>
    )
}
export default AddField;