import './topbar.css'

const Header = () => {
  return (
    <div className ='topbar'>
        <div className= 'topbarWrapper'>
            <div className="topLeft">
                <img className='logo' src='../logo.png' alt='logo'></img>
                </div>
              <div className="topRight">
                <div className="profile"/>
              </div>
        </div>
    </div>
  )
}

export default Header