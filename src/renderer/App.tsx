import React from 'react'

import Layout from './components/Layout'
import Request from './components/Workspace/Request/RequestPanel'
import Response from './components/Workspace/Response/ResponsePanel'

import './App.scss'

function App() {
  return (
    <Layout>
      <Request />
      <Response />
    </Layout>
  )
}

export default App
