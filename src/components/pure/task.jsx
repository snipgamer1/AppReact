import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Models
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/level.enum';


//importamos hoja de estilos
import '../../styles/task.scss'


const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);
     /**
     * Function that returns a Badge
     * depending on the level of the task
     */
     function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.URGENT:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.BLOCKING:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)
            default:
                break;
        }
    }


     /**
     * Function that returns icon depending on completion of the task
     */
     function taskCompletedIcon(){
        if(task.completed){
            return (<i  className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        }else{
            return (<i  className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }


    return (
        
         <tr className='fw-normal' >
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* Execution of function to return badge element */}
                {taskLevelBadge()}
                
            </td>
            <td className='align-middle'>
                {/* Execution of function to return icon depending on completion */}
                <span>{task.completed}</span>
                {taskCompletedIcon()}
                <i className='bi-trash task-action' style={{color: 'tomato'}} ></i>
            </td>
        </tr>

    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
