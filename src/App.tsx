import React, { useState } from 'react'
import Layout from './components/Layout/Layout'
import Request from './components/Workspace/Request/RequestPanel'
import Response from './components/Workspace/Response/ResponsePanel'

export const AppContext = React.createContext<object>({});

const App = () => {
  return (
    <AppContext.Provider value={{}}>
      <Layout>
        <Request />
        <Response />
      </Layout>
    </AppContext.Provider>
  )
}

export default App
