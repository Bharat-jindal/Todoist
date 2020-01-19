import React, {useState} from 'react';
import {Projects} from '../Projects'
import {FaChevronDown,FaInbox,FaRegCalendarAlt,FaRegCalendar} from 'react-icons/fa';
import {useSelectedProjectValue} from '../../context'
import {AddProject} from '../AddProject'

export const Sidebar = () => {
    const {setSelectedProjects} = useSelectedProjectValue();
    const [active,setActive] = useState('inbox')
    const [showProjects , setShowProjects] = useState(true)
    return (<div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
        <li 
            className={active==='inbox' ? 'active' : undefined}
            data-testid="inbox"
            onClick={()=>{
                setActive('inbox')
                setSelectedProjects('INBOX')
            }} >
            <span><FaInbox /></span>
            <span>Inbox</span>
        </li>
        <li 
            className={active==='today' ? 'active' : undefined}
            data-testid="today"
            onClick={()=>{
                setActive('today')
                setSelectedProjects('TODAY')
            }} >
            <span><FaRegCalendar /></span>
            <span>Today</span>
        </li>
        <li 
            className={active==='next_7' ? 'active' : undefined}
            data-testid="next_7"
            onClick={()=>{
                setActive('next_7')
                setSelectedProjects('NEXT_7')
            }} >
            <span><FaRegCalendarAlt /></span>
            <span>Next 7 days</span>
        </li>
    </ul>

    <div className="sidebar__middle" onClick={() => setShowProjects(!showProjects)}>
        <span>
            <FaChevronDown className={!showProjects ? 'hidden-projects' : undefined}/>
        </span>
        <h2>Projects</h2>
    </div>

    <ul className="sidebar__projects">{showProjects && <Projects />}</ul>

    {showProjects && <AddProject />}
</div>)}
