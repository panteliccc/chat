import React from 'react'
import avatar from '../images/download.jpg'
function Header(){
    return (
        <div className='header'>
            <img className='avatar' src={avatar}/>
            <span className='ChatmateName'>Fica</span>
        </div>
    )
}

export default Header;