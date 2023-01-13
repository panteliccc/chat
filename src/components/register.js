import React from 'react';
import add from '../images/add-avatar.svg'

function Register() {
    return (
        <div className='register'>
            <span className='heading'>Sing Up</span>
            <form>
                <input type="text" placeholder='Display name' />
                <input type="email" placeholder='E-mail' />
                <input type="password" placeholder='Password' />
                <input style={{display:"none"}} type="file" id='file' />
                <label htmlFor='file'>
                    <img src={add}/>
                    <span>Add an avatar     </span>
                </label>
                <button>Sing up</button>
            </form>
            <span className='link-login'>You do have an accoun? Login</span>
        </div>
    );
}

export default Register;