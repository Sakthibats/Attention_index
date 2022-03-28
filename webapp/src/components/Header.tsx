import './topbar.css'
import {BsMenuButtonFill} from 'react-icons/bs'
import Sidebar from './Sidebar'


const Header = () => {
  return (
    <div className ='topbar'>
        <div className= 'topbarWrapper'>
            <div className="topLeft">
              <img className='logo' src='../logo.png' alt='logo'></img>
            </div>
              
            <div className="itemArray">
              <div className="profile"/>
              <div className='icon'><BsMenuButtonFill /></div>
              <div className='sidebar ${navOpen}'>
                <Sidebar />
              </div>
            </div>

        </div>
    </div>
  )
}

export default Header