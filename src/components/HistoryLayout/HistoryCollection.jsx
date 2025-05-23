import React from 'react'
import Sidebar from '../Sidebar/Sidebar.jsx'
import MobileSidebar from '../Sidebar/MobileSidebar.jsx'
import HistoryCollection from './'


function HistoryCollection() {
  return (
    <div className='flex flex-col h-screen relative w-full'>
        {/* Sidebar for Desktop */}
        <aside className='hidden md:block z-50'>
            <Sidebar/>
        </aside>

        {/* Sidebar for Mobile View */}
        <div className='block md:hidden'>
            <MobileSidebar/>
        </div>
    </div>
  )
}

export default HistoryCollection