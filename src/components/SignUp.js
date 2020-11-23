import React from 'react'

function SignUpComponent() {
    const handlesigup = () =>{
        alert('😍Sign Up Successful!')
    }
  return (
    <div class="contianer" >
        <div className="login-form">
            <form>
                <h2 className="text-center">Sign up</h2>
                <div>
                    <input type="text" className="form-control" placeholder="Full Name" required="required"/>
            
                    <input type="email" className="form-control" placeholder="Email" required="required"/>
            
                    <input type="password" className="form-control" placeholder="Password" required="required"/>
            
                    <input type="confirmpassword" className="form-control" placeholder="Confirm Password" required="required"/>
                
                    <button className="btn btn-primary btn-block" onClick={handlesigup}>Sign Up</button>
                </div>
                <p className="text-center">Already have an account?<a href='/login'>Log In</a></p>
            </form>
</div>
    </div>
  );
}

export default SignUpComponent;
