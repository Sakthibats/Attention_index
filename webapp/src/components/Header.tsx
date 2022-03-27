import './topbar.css'
import {BsMenuButtonFill} from 'react-icons/bs'
import Sidebar from './Sidebar'

function showNavMenu() {
  return (
    <>
      <div>
        <Sidebar />
      </div>
    </>
  )
}

const Header = () => {
  return (
    <div className ='topbar'>
        <div className= 'topbarWrapper'>
            <div className="topLeft">
              <img className='logo' src='../logo.png' alt='logo'></img>
            </div>
              
            <div className="itemArray">
              <div className='icon'><BsMenuButtonFill onClick={showNavMenu}/></div>
              <div className="profile"/>
            </div>

        </div>
    </div>
  )
}

export default Header