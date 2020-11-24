import React from 'react'

function LogInForm() {

    const handleClick = (e) =>{
        e.preventDefault()
        alert(':) Login successful')
    }
    return (
        
        <section className="container" id="section">
            <div className="card" id='signup-card'>
                <h2>LOGIN PAGE</h2>
                <div className="form">
                    <form >
                        <input className="form-control" type="text" name="name" placeholder="username" required/>

                        <input className="form-control" type="password" name="password" placeholder="password" required/>

                        <button onClick = {handleClick} className="btn">Submit</button>
                    </form>
                </div>

                <p>Don't have an account? <a href = './signup'>Signup</a></p>
            </div>
        </section>
        
    )
}

export default LogInForm
