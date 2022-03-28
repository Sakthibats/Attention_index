
import "./sidebar.css"
import './topbar.css'
import { LineStyle,Timeline } from '@mui/icons-material'
import AssessmentIcon from '@mui/icons-material/Assessment';
import {BsMenuButtonFill} from 'react-icons/bs'

import React, {useState, useEffect, useRef} from 'react'

function Sidebar () {
    const [isSideMenu, setSideMenu] = useState(false)

    const open = (isSideMenu: boolean) => {
        return setSideMenu(!isSideMenu)
    }
  const domeNode = useRef<any>()
  const updateState = (event: MouseEvent) => {
    if (domeNode.current.contains(event.target)) {
      return
    }
    setSideMenu(false)
  }
  useEffect(() => {
    document.addEventListener('mousedown', updateState)
    return () => {
      document.removeEventListener('mousedown', updateState)
    }
  }, [])

  return (
      <>
        <div className ='topbar'>
        <div className= 'topbarWrapper'>
            <div className="topLeft">
              <img className='logo' src='../logo.png' alt='logo'></img>
            </div>
              
            <div className="itemArray">
              <div className="profile"/>
                <span className='icon' ref={domeNode} onClick={() => open(isSideMenu)}>
                  <BsMenuButtonFill />
                </span>
            </div>

            <div className='sideMenu' style={{ right: isSideMenu ? '0' : '-265px' }}>
            
            {/* <a href="#">Menu 01</a>
            <a href="#">Menu 02</a>
            <a href="#">Menu 03</a>
            <a href="#">Menu 04</a> */}
            
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                        <ul className='sidebarList'>
                            <li className='sidebarListItem'>
                                <LineStyle className="sidebarIcon"/>
                                Home
                            </li>
                            <li className='sidebarListItem'>
                                <Timeline className="sidebarIcon"/>
                                Analytics
                            </li>
                            <li className='sidebarListItem'>
                                <AssessmentIcon className="sidebarIcon"/>
                                Report
                            </li>       
                        </ul>
                </div>
                </div>

            </div>
        </div>
        </div>
    </>
    
  )
}

export default Sidebar