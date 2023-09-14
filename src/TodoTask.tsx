import React from "react";
import {ITask} from "./Interface";
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"

interface Props {
    task: ITask;

    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, completeTask}:Props) => {
    return (
        <Card className={"task"}>
            <Container>
                <Row>
                    <Col sm={10}>
                        <span>{task.taskName}</span>
                        <span>{task.deadLine}</span>
                    </Col>
                    <Col sm={2}>
                        <Button onClick={() => completeTask(task.taskName)}>X</Button>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default TodoTask;