import React, { PropsWithChildren } from 'react'
import { TabPanel as ReactTabsTabPanel } from 'react-tabs'

const TabPanel: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactTabsTabPanel className='react-tabs__tab-panel rounded-b-lg border border-t-0 border-gray-300 px-4 py-4'>
      {children}
    </ReactTabsTabPanel>
  )
}

export default TabPanel
