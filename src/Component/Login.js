import React from 'react'
import './style.css'
import { MDBContainer,
    MDBCol, MDBRow, MDBBtn, MDBInput, MDBCheckbox} from 'mdb-react-ui-kit'
import 'bootstrap/dist/css/bootstrap.min.css'
function Login() {
    return (
        <MDBContainer fluid className="p-3 my-5">
            <div class="loginbox">
        <MDBRow>
        
          <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone img" />
          </MDBCol>
  
          <MDBCol col='4' md='6'>

            <div>
            <h4 className=" mb-5">Let's Chat</h4>
            <h4 class="mb-4">Email</h4>
            <MDBInput wrapperClass='mb-4'  id='formControlLg' type='email' size="lg"/>
            </div>
            <h4 class="mb-4">Password</h4>
            <MDBInput wrapperClass='mb-4'  id='formControlLg' type='password' size="lg"/>

  
            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>
  
            <MDBBtn className="mb-4 w-100" size="lg">Sign in</MDBBtn>
  
            <div className="divider d-flex align-items-center my-4">
            </div>
  
          </MDBCol>
          
        </MDBRow>
        </div>
      </MDBContainer>
    )
}
export default Login;