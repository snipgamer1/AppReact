import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/level.enum';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
   
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    
    const changeState = ( id ) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                <h1>Your Task:</h1>
            </div>
            {/* TODO: Aplicar un For/MAO para renderizar una lista*/}
            <TaskComponent task={ defaultTask }></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
