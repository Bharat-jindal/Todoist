import React , { createContext ,useContext ,useState} from 'react';
import {useProjects} from '../hooks';

export const SelectedProjectsContext = createContext();

export const SelectedProjectsProvider = ({children}) => {
    const [selectedprojects, setSelectedProjects] = useState('INBOX');
    return <SelectedProjectsContext.Provider value={{selectedprojects, setSelectedProjects}}>
        {children}
    </SelectedProjectsContext.Provider>
}

export const useSelectedProjectValue = () => useContext(SelectedProjectsContext)