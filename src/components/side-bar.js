import React from 'react'
import '../style.css'
import avatar from '../images/download.jpg'
function SideBar(){

    return (
        <div className="side-bar">
            <h1>Chat App</h1>
            <div className='line'></div>
            
            <ul className='chatMenu'>
                <li className='element'>
                    <img className='avatar' src={avatar} />
                    <span className='username'>Fica</span>
                </li>
                <li className='element'>
                    <img className='avatar' src={avatar} />
                    <span className='username'>Mika</span>
                </li>
                <li className='element'>
                    <img className='avatar' src={avatar} />
                    <span className='username'>Laki</span>
                </li>
                <li className='element'>
                    <img className='avatar' src={avatar} />
                    <span className='username'>Tasa</span>
                </li>
                <li className='element'>
                    <img className='avatar' src={avatar} />
                    <span className='username'>Stefa</span>
                </li>
            </ul>
        </div>
      );
}
export default SideBar;