import React from 'react';
import {Header} from './components/layout/Header'
import {Content} from './components/layout/Content';
import {ProjectsProvider , SelectedProjectsProvider} from './context'
import './App.scss'

export const App = () => {
    return (
    <SelectedProjectsProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Content />
          <p>Hello there!</p>
        </div>
      </ProjectsProvider>
    </SelectedProjectsProvider>)
};
