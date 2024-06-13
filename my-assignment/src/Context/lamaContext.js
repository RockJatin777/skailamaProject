import React from 'react'

const LamaContext = React.createContext({
  projectData: ["Sample data", "Sample data", "Sample data",  "Sample data", "Sample data"],
  addProjectData: () => {},
})

export default LamaContext