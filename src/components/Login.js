import React from "react";
import { useHistory } from "react-router-dom";

class Login extends React.Component {

    state = {
        form: {
            email: '',
            password: ''
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    doLogin() {
        var isValidEmail = false;
        var isValidPassword = false;

        let pattern = "^[A-Za-z][A-Za-z0-9]*$";
        if (!this.state.form.email || !this.state.form.password) {
            alert("User And Password cannont be Empty")
        } else {
            if (this.state.form.email.match(pattern)) {
                isValidEmail=true;
            } else {
                alert("Invalid Email")
            } if (this.state.form.password.length < 6) {
                alert("Invalid Password, Password must be 6 or more digits")
            } else {
                isValidPassword=true;
            }
        }
        if(isValidEmail && isValidPassword){
            window.location.href="./LandingPage";
        }
    }

    render() {
        return (

            <div className="container">

                <div className="justify-content-center row">
                    <div className="col-md-5">
                        <div className="card-body">
                            <h2>Unosquare Movie Store</h2>
                            <hr />
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                </div>
                                <input className="form-control" name="email" placeholder="Email" aria-label="Email"
                                    aria-describedby="basic-addon1" onChange={this.handleChange} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon2">#</span>
                                </div>
                                <input type="password" className="form-control" name="password" placeholder="Password" aria-label="Password"
                                    aria-describedby="basic-addon2" onChange={this.handleChange} secureTextEntry={true} />
                            </div>
                            <br />
                            <button className="btn btn-primary" onClick={() => this.doLogin()}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;