import React from 'react';
import './Navbar.css';
import MenuIcon from '../../resources/images/menu_icon.png';
import user_image from '../../resources/images/User_Image.png';
function Navbar(props) {
    const getMenuIcon = ()=>{
        if(!props.isOpen){
            return (
                <img src={MenuIcon} class='navbar-menuIcon' onClick={()=>props.toggleSidebar()} alt='hamberger-menu'/>
            )
        }
        else {
            return (
                <></>
            )
        }
    }
    return (
        <div className='navbar-main' onClick={()=>{if(props.isOpen)props.toggleSidebar()}}>
            <div className='navbar-search'>
                {getMenuIcon()}
                <input class='navbar-search-field' type='text' placeholder='Search'/>
            </div>
            <div className='navbar-user-details'>
                <img alt='user-profile' className='navbar-user-image' src={user_image}/>
                <div className='navbar-user-name'>
                    <div style={{fontSize:'0.8vw'}}>Welcome</div>
                    <div style={{color:'white', fontSize:'1.2vw'}}>UserName</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
