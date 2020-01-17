import React ,{useEffect} from 'react';
import {Checkbox} from './Checkbox';
import { useTasks } from '../hooks';
import {collatedTasks} from '../constants';
import {getTitle , getCollatedTitle , collatedTasksExist} from '../helpers';
import {useSelectedProjectValue , useProjectValue} from '../context';
import {AddTask} from './AddTask';

export const Tasks = () => {
    const {selectedprojects} = useSelectedProjectValue() ;
    const {projects} = useProjectValue() ;
    const {tasks} = useTasks(selectedprojects) ;
    let projectName = '';

    if( projects.length>0 && selectedprojects && !collatedTasksExist(selectedprojects)){
        projectName=getTitle(projects,selectedprojects).name
    }

    if(collatedTasksExist(selectedprojects) && selectedprojects){
        projectName=getCollatedTitle(collatedTasks,selectedprojects).name
    }

    useEffect(() => {
        document.title = `${projectName} : todoist`
    })
    console.log('tasks',tasks)
    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="project-name">{projectName}</h2>

            <ul className="tasks__list">
                {tasks.map(task=>(
                    <li key={task.id}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>

            <AddTask />
        </div>
    )
}