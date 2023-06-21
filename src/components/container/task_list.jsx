import React, { useState, useEffect } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/level.enum";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
    const defaultTask1 = new Task( "Example1", "Default description1",false, LEVELS.NORMAL );
    const defaultTask2 = new Task( "Example2", "Default description2",true, LEVELS.URGENT );
    const defaultTask3 = new Task( "Example3", "Default description3",true, LEVELS.BLOCKING );

  //Estado del componente
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState([false]);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Task State has been modified");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      console.log("TaskList component is going to unmount...");
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log("TODO: Cambiar estado de una tarea");
  };

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* Card Header (title) */}
          <div className="card-header p-3">
            <h5>Your Tasks:</h5>
          </div>
          {/* Card Body (content) */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}>
            <table>
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                { tasks.map((tasks, index) => {
                    return <TaskComponent key={index} task={tasks}></TaskComponent>
                })}
                
                </tbody>
            </table>
            {/* TODO: Add Loading Spinner
            {loading ? (
              <p style={loadingStyle}>Loading tasks...</p>
            ) : (
              tasksTable
            )} */}
          </div>
        </div>
      </div>
      {/* <Taskform add={addTask} length={tasks.length}></Taskform> */}

      {/* TODO: Aplicar un For/MAO para renderizar una lista*/}
    </div>
  );
};

export default TaskListComponent;
