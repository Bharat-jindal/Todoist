import React , {useState} from 'react';
import {useSelectedProjectValue,useProjectValue} from '../context';
import {IndividualProject} from './individualProject';

export const Projects = ({activeValue = null}) => {
    const [active , setActive] = useState(activeValue);
    const {setSelectedProjects} = useSelectedProjectValue();
    const {projects} = useProjectValue();

    return (
        projects &&
        projects.map(project => (
            <li key={project.projectId}
                data-doc-id={project.docId}
                data-testis="project-action"
                className={
                    active===project.projectId
                    ?'active sidebar__project':'sidebar__project'
                }>
                    <div role="button"
                        onClick={() => {
                            setActive(project.projectId);
                            setSelectedProjects(project.projectId)
                        }}
                        onKeyDown={() => {
                            setActive(project.projectId);
                            setSelectedProjects(project.projectId)
                        }}>
                        <IndividualProject project={project}/>
                    </div>
                </li>
        ))
    )
}