import React, { Component, Fragment } from 'react';
import actions from '../../services/index';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,MDBAnimation } from 'mdbreact';


class LogIn extends Component {

    state = {

    } 
    handleChange = e => {
        console.log(e.target.name,e.targe.value, '?????')
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
         actions.logIn(this.state).then(user => {
            this.props.setUser({...user.data})  
        }).catch(({ response }) => console.error('error',response.data));
    }
    render() {
        return (

            

            
            <Fragment>
            <div className="login_bg">
            <MDBAnimation type="bounce">
                <MDBContainer>
                    <MDBRow>
                    <MDBCol md="12">
                        <form className="auth-styles">
                        
                        <p className="h2 text-center mb-4">Login</p>
                        
                        <div className="grey-text">
                        <form>
                            <MDBInput name="email" label="Type your email" icon="envelope" group type="email" validate error="wrong"
                            success="right" onChange={this.handleChange} />
                            <MDBInput name="password" label="Type your password" icon="lock" group type="password" validate onChange={this.handleChange}/>
                        </form>
                        </div>
                    <div className="text-center">
                    <MDBBtn gradient="peach" onClick={this.handleSubmit}>Login</MDBBtn>
                    </div>
                    </form>
                </MDBCol>
                </MDBRow>
            </MDBContainer>
            </MDBAnimation>
                {/* here's the old login form.... <h2>LogIn</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" onChange={this.handleChange} />
                    <input name="password" type="password" onChange={this.handleChange} />
                    <input type="submit" value="Log In"/>
                </form> */}
                </div>
            </Fragment>
          
           
            
           
    
            
        );
    }
}

export default LogIn;