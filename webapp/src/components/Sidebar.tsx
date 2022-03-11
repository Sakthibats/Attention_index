
import "./sidebar.css"
import { LineStyle,Timeline } from '@mui/icons-material'

const Sidebar = () => {
  return (
    <div className='sidebar'>
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
                           
                        </ul>
                    
                </div>
            
            </div>
        
        </div>
    
  )
}

export default Sidebar