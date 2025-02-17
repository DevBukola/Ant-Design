import React, { useState, useEffect } from "react";
import "antd/dist/reset.css";
import "./todo.css";
import { Input, Button, List, Typography, Card } from "antd";
import { CheckOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";

function AntTodo() {
  const [allTasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [doneTasks, setDoneTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasktodo"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    if (allTasks.length > 0) {
      localStorage.setItem("tasktodo", JSON.stringify(allTasks));
    }
  }, [allTasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasktodo"));
    if (storedTasks) {
      setTasks(storedTasks);
    }

    const storedDoneTasks = JSON.parse(localStorage.getItem("donetodo"));
    if (storedDoneTasks) {
      setDoneTasks(storedDoneTasks);
    }
  }, []);

  //   const handleDeleteTask = (index) => {
  //     let reducedTasks = [
  //       ...allTasks.slice(0, index),
  //       ...allTasks.slice(index + 1),
  //     ];
  //     localStorage.setItem("tasktodo", JSON.stringify(reducedTasks));
  //     setTasks(reducedTasks);
  //   };

  const handleDeleteTask = (index) => {
    let updatedTasks = [
      ...allTasks.slice(0, index),
      ...allTasks.slice(index + 1),
    ];
    setTasks(updatedTasks);
    localStorage.setItem("tasktodo", JSON.stringify(updatedTasks));
  };

  const handleMarkAsDone = (index) => {
    let completedTask = allTasks[index];
    let updatedTasks = [
      ...allTasks.slice(0, index),
      ...allTasks.slice(index + 1),
    ];
    setTasks(updatedTasks);
    const updatedDoneTasks = [...doneTasks, completedTask];
    setDoneTasks(updatedDoneTasks);
    localStorage.setItem("tasktodo", JSON.stringify(updatedTasks));
    localStorage.setItem("donetodo", JSON.stringify(updatedDoneTasks));
  };

  const handleDeleteDoneTask = (index) => {
    let updatedDoneTasks = [
      ...doneTasks.slice(0, index),
      ...doneTasks.slice(index + 1),
    ];
    setDoneTasks(updatedDoneTasks);
    localStorage.setItem("donetodo", JSON.stringify(updatedDoneTasks));
  };

  const handleAddNewTask = () => {
    let newTaskItem = {
      task: newTask,
    };
    if (newTask.trim() === "") return;
    let updatedTaskArray = [...allTasks];
    updatedTaskArray.push(newTaskItem);
    setTasks(updatedTaskArray);
    setNewTask("");
    localStorage.setItem("tasktodo", JSON.stringify(updatedTaskArray));
  };
  return (
    <div id="todo-container">
      <h1 className="title">Todo App</h1>
      <div id="todo-wrapper">
        <Card className="card-wrapper">
          <div className="add-task-box">
            <Input
              type="text"
              value={newTask}
              onChange={(event) => {
                setNewTask(event.target.value);
              }}
              className="input"
              placeholder="Add a new task"
              style={{ color: "white" }}
              // suffix={<Button type="primary" icon={<PlusOutlined />} />}
            />
            <Button
              onClick={handleAddNewTask}
              className="add-btn"
              type="primary"
              icon={<PlusOutlined />}
            ></Button>
          </div>
          <div className="custom-card-wrapper">
            <Card className="custom-card">
              <h3>Tasks to do - {allTasks.length}</h3>
              {allTasks.map((item, index) => {
                return (
                  <List>
                    <div className="list-wrapper" key={index}>
                      <p className="item">{item.task}</p>
                      <div className="cta-icons">
                        <CheckOutlined
                          className="check"
                          onClick={() => handleMarkAsDone(index)}
                        />
                        <DeleteOutlined
                          className="delete-added-task"
                          onClick={() => handleDeleteTask(index)}
                        />
                      </div>
                    </div>
                  </List>
                );
              })}
            </Card>
            <Card className="done-tasks">
              <h3>Done - {doneTasks.length}</h3>
              {doneTasks.map((item, index) => (
                <div className="list-wrapper" key={index}>
                  <Typography.Text delete className="item">
                    {item.task}
                  </Typography.Text>
                  <DeleteOutlined
                    className="delete-done-task"
                    onClick={() => handleDeleteDoneTask(index)}
                  />
                </div>
              ))}
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AntTodo;
