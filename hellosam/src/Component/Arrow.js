import React from 'react';
const Arrow=()=>{
    return(
        <form>
            <div>
                <h2>LogIn</h2>
            </div>
            <div>
                Username <input type="email" required/>
            </div>
            <div>
                Password <input type="password" maxLength={6} required/>
            </div>
            <div>
                <button>LogIn</button>
            </div>

        </form>
    )
}
export default Arrow