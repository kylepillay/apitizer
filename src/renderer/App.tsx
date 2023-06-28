import React from 'react'

import Layout from './components/Layout'
import { useDarkMode } from './hooks/useDarkMode'

import './App.scss'
import MainTabs from './components/Layout/MainTabs'

function App() {
  useDarkMode()
  return (
    <Layout>
      <MainTabs />
    </Layout>
  )
}

export default App
