import React from 'react'

function LogInForm() {

    const handleClick = (e) =>{
        e.preventDefault()
        alert(':) Login successful')
    }
    return (
        
        <section class="container" id="section">
            <div class="card" id='signup-card'>
                <h2>LOGIN PAGE</h2>
                <div class="form">
                    <form >
                        <input class="form-control" type="text" name="name" placeholder="username" required/>

                        <input class="form-control" type="password" name="password" placeholder="password" required/>

                        <button onClick = {handleClick} class="btn">Submit</button>
                    </form>
                </div>

                <p>Don't have an account? <a href = './signup'>Signup</a></p>
            </div>
        </section>
        
    )
}

export default LogInForm
