import React, {ChangeEvent, useState} from 'react';
import {ITask} from "./Interface";
import TodoTask from "./TodoTask";
import "./App.css";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";

const App: React.FC = () => {
    const [task, setTask] = useState<string>("");
    const [deadLine, setDeadLine] = useState<number>(0);
    const [todo, setTodo] = useState<ITask[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "task") {
            setTask(event.target.value);
        } else {
            setDeadLine(Number(event.target.value));
        }
    }

    const addTask = () => {
        const newTask = {
            taskName: task,
            deadLine: deadLine,
        }
        setTodo([...todo, newTask]);
        setTask("");
        setDeadLine(0);
    }

    const completeTask = (taskNameToDelete: string) => {
        setTodo(todo.filter((task => {
            return task.taskName !== taskNameToDelete
        })))
    }

    return (
        <div className="App">
            <Container className={"App-title"}>
                <h1>Jeff's Todo List</h1>
            </Container>
            <div className="header">
                <InputGroup className={"inputContainer"}>
                    <InputGroup.Text>Enter a new item</InputGroup.Text>
                    <FormControl type={"text"} name={"task"} placeholder={"Add a task"} value={task}
                                 onChange={handleChange}/>
                    <FormControl type={"number"} name={"deadline"} placeholder={"set a deadline (days)"}
                                 value={deadLine} onChange={handleChange}/>
                </InputGroup>
                <Button onClick={addTask} variant={"dark"} size={"lg"}>Add</Button>
            </div>
            <div className="App-todo-list">
                {todo.map((task: ITask, key: number) => {
                    return <TodoTask key={key} task={task} completeTask={completeTask}/>
                })}
            </div>
        </div>
    )
}

export default App;
