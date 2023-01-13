import React from 'react'
function Login() {
    return (
        <div className='login'>
            <span className='heading'>Login</span>
            <form>
                <input type="email" placeholder='E-mail' />
                <input type="password" placeholder='Password' />
                <button>Login</button>
            </form>
            <span className='link-register'>I don't have account. Register?</span>
        </div>
    );
}

export default Login;