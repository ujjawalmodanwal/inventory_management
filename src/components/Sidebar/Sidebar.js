import React from 'react';
import './Sidebar.css';
import Logo from '../../resources/images/LOGO.png'
function Sidebar() {
    return (
        <div className='sidebar-main'>
            <div>
                <img alt='logo' className='sidebar-logo' src = {Logo}/>
            </div>
            <div className='sidebar-menu'>
                Home
            </div>
            <div className='sidebar-menu'>
                Items
            </div>
            <div className='sidebar-menu'>
                Orders
            </div>
            <div className='sidebar-menu'>
                Vehicles
            </div>
            <div className='sidebar-menu'>
                Trips
            </div>
        </div>
    )
}

export default Sidebar
