
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Component } from 'react';

import LamaContext from './Context/lamaContext';

import Home from './Component/Home'
import Projects from './Component/Projects';
import UploadProjects from './Component/UploadProjects';
import Setting from './Component/Setting';
import WidgetConfigurations from './Component/WidgetConfigurations';

class App extends Component {
  state = {
    projectData: ["Sample data", "Sample data", "Sample data",  "Sample data", "Sample data"],
  }

  addProjectData = data => {
    const {projectData} = this.state
    this.setState({projectData: [...projectData, data]})
  }

  render(){
    const {projectData} = this.state
    return(
      <LamaContext.Provider
        value={{projectData, addProjectData: this.addProjectData}}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/projects" Component={Projects} />
            <Route eract path="/upload" Component={UploadProjects}/>
            <Route exact path="/setting" Component={Setting} />
            <Route exact path='/widget-configurations' Component={WidgetConfigurations} />
          </Routes>
        </BrowserRouter>
      </LamaContext.Provider>
    )
  }
}

export default App;
